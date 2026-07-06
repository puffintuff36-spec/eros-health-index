#!/usr/bin/env python3
"""Extract transparent WTSSPS-weighted GSS signals for the Eros Health Index.

This module accepts a CSV subset exported from NORC GSS Data Explorer or the
Berkeley SDA mirror. Numeric-coded and human-readable labelled CSV exports are
both supported. The extractor never treats missing/split-ballot codes as data.

Recommended columns:
    year, age, marital, marcohab, hapmar, hapcohab,
    xmoviey, sexfreq, xmarsex, wtssps

Run directly:
    python gss_extract.py path/to/gss_subset.csv

The default output is gss_signals.json next to this script.
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
import math
import re
from pathlib import Path
from typing import Any, Iterable

ROOT = Path(__file__).resolve().parent
DEFAULT_OUT = ROOT / "gss_signals.json"

MISSING_LABELS = {
    "", "iap", "don't know", "dont know", "no answer", "refused",
    "skipped on web", "uncodeable", "not available in this release",
    "not available in this year", "see codebook", "dk", "na", "n/a",
}


def _norm(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "").strip().lower())


def _number(value: Any) -> float | None:
    raw = str(value or "").strip()
    if not raw or raw.startswith("."):
        return None
    try:
        number = float(raw)
    except ValueError:
        return None
    return number if math.isfinite(number) else None


def _coded(value: Any, labels: dict[str, int]) -> int | None:
    number = _number(value)
    if number is not None and float(number).is_integer():
        return int(number)
    text = _norm(value)
    if text in MISSING_LABELS:
        return None
    return labels.get(text)


def _field(row: dict[str, str], name: str) -> str:
    for key in (name, name.lower(), name.upper()):
        if key in row:
            return row[key]
    return ""


def _weight(row: dict[str, str]) -> float | None:
    value = _number(_field(row, "wtssps"))
    return value if value is not None and value > 0 else None


def _weighted_share(rows: Iterable[tuple[bool, float]]) -> tuple[float | None, int, float]:
    numerator = 0.0
    denominator = 0.0
    n = 0
    for flag, weight in rows:
        numerator += (1.0 if flag else 0.0) * weight
        denominator += weight
        n += 1
    value = numerator / denominator * 100.0 if denominator > 0 else None
    return value, n, denominator


HAPPY = {
    "very happy": 1,
    "pretty happy": 2,
    "not too happy": 3,
}
XMOVIEY = {
    "never": 1,
    "less than once a year": 2,
    "about once or twice a year": 3,
    "several times a year": 4,
    "about once a month": 5,
    "2-3 times a month": 6,
    "2 or 3 times a month": 6,
    "nearly every week": 7,
    "every week": 8,
    "once a day": 9,
    "several times a day": 10,
}
SEXFREQ = {
    "not at all": 0,
    "once or twice": 1,
    "once a month": 2,
    "2 or 3 times a month": 3,
    "2-3 times a month": 3,
    "about once a week": 4,
    "2 or 3 times a week": 5,
    "2-3 times a week": 5,
    "more than 3 times a week": 6,
}
XMARSEX = {
    "always wrong": 1,
    "almost always wrong": 2,
    "wrong only sometimes": 3,
    "not wrong at all": 4,
    "other": 5,
}


def _age_band(row: dict[str, str]) -> str | None:
    age = _number(_field(row, "age"))
    if age is None:
        return None
    if 18 <= age <= 29:
        return "18-29"
    if age <= 44:
        return "30-44"
    if age <= 64:
        return "45-64"
    if age >= 65:
        return "65+"
    return None


def _relationship_status(row: dict[str, str]) -> str:
    marital_raw = _field(row, "marital")
    marcohab_raw = _field(row, "marcohab")
    marital = _norm(marital_raw)
    marcohab = _norm(marcohab_raw)
    marital_code = _number(marital_raw)
    marcohab_code = _number(marcohab_raw)
    # GSS MARCOHAB: 1 married; 2 not married with cohabiting partner;
    # 3 not married/no partner; 4 partner status missing. MARITAL code 1 is married.
    if marcohab_code == 1 or marital_code == 1:
        return "married"
    if marcohab_code == 2:
        return "cohabiting"
    if "married" in marital and "never" not in marital:
        return "married"
    if "cohab" in marital or "cohab" in marcohab or "partner" in marcohab:
        return "cohabiting"
    return "other_or_unknown"


def extract_gss_signals(csv_path: Path, year: int = 2024) -> dict[str, Any]:
    with csv_path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames:
            raise ValueError("GSS CSV has no header row")
        lower_fields = {name.lower() for name in reader.fieldnames}
        required = {"year", "wtssps", "hapmar", "hapcohab", "xmoviey", "sexfreq", "xmarsex"}
        missing = sorted(required - lower_fields)
        if missing:
            raise ValueError("GSS CSV missing required columns: " + ", ".join(missing))
        rows = []
        for row in reader:
            row_year = _number(_field(row, "year"))
            if row_year is None or int(row_year) != year:
                continue
            weight = _weight(row)
            if weight is None:
                continue
            rows.append(row)

    if not rows:
        raise ValueError(f"No usable year={year} rows with positive WTSSPS weights")

    # Relationship quality: one response per person. HAPMAR takes precedence when
    # present; otherwise HAPCOHAB is used. This avoids double counting.
    relationship_rows: list[tuple[int, float]] = []
    for row in rows:
        code = _coded(_field(row, "hapmar"), HAPPY)
        if code not in (1, 2, 3):
            code = _coded(_field(row, "hapcohab"), HAPPY)
        weight = _weight(row)
        if code in (1, 2, 3) and weight is not None:
            relationship_rows.append((code, weight))

    very_happy, rel_n, rel_weight = _weighted_share(
        (code == 1, weight) for code, weight in relationship_rows
    )
    happy_or_pretty, _, _ = _weighted_share(
        (code in (1, 2), weight) for code, weight in relationship_rows
    )

    porn_rows: list[tuple[int, float]] = []
    infidelity_rows: list[tuple[int, float]] = []
    sex_rows: list[tuple[int, float, str | None, str]] = []
    for row in rows:
        weight = _weight(row)
        if weight is None:
            continue
        p = _coded(_field(row, "xmoviey"), XMOVIEY)
        if p is not None and 1 <= p <= 10:
            porn_rows.append((p, weight))
        x = _coded(_field(row, "xmarsex"), XMARSEX)
        if x is not None and 1 <= x <= 4:  # code 5 "other" is not on the ordered norm scale
            infidelity_rows.append((x, weight))
        s = _coded(_field(row, "sexfreq"), SEXFREQ)
        if s is not None and 0 <= s <= 6:
            sex_rows.append((s, weight, _age_band(row), _relationship_status(row)))

    porn_weekly, porn_n, porn_weight = _weighted_share(
        (code >= 7, weight) for code, weight in porn_rows
    )
    porn_daily, _, _ = _weighted_share(
        (code >= 9, weight) for code, weight in porn_rows
    )
    porn_any_monthly, _, _ = _weighted_share(
        (code >= 5, weight) for code, weight in porn_rows
    )

    infid_always, infid_n, infid_weight = _weighted_share(
        (code == 1, weight) for code, weight in infidelity_rows
    )
    infid_strong, _, _ = _weighted_share(
        (code in (1, 2), weight) for code, weight in infidelity_rows
    )

    sex_none, sex_n, sex_weight = _weighted_share(
        (code == 0, weight) for code, weight, _, _ in sex_rows
    )
    sex_weekly, _, _ = _weighted_share(
        (code >= 4, weight) for code, weight, _, _ in sex_rows
    )
    sex_monthly, _, _ = _weighted_share(
        (code >= 2, weight) for code, weight, _, _ in sex_rows
    )

    def sex_strata(index: int) -> dict[str, dict[str, float | int | None]]:
        values: dict[str, dict[str, float | int | None]] = {}
        keys = sorted({row[index] for row in sex_rows if row[index]})
        for key in keys:
            subset = [(code, weight) for code, weight, age_band, status in sex_rows if (age_band, status)[index - 2] == key]
            none_pct, n, _ = _weighted_share((code == 0, weight) for code, weight in subset)
            weekly_pct, _, _ = _weighted_share((code >= 4, weight) for code, weight in subset)
            values[str(key)] = {
                "n_unweighted": n,
                "no_sex_pct": round(none_pct, 2) if none_pct is not None else None,
                "weekly_or_more_pct": round(weekly_pct, 2) if weekly_pct is not None else None,
            }
        return values

    return {
        "generated_at": dt.datetime.now(dt.UTC).isoformat(),
        "source": {
            "name": "General Social Survey, 1972-2024 Cumulative Release 3",
            "year_analyzed": year,
            "weight": "WTSSPS",
            "note": "All percentages are WTSSPS-weighted among substantive responses to the relevant item. Split-ballot/inapplicable and other missing responses are excluded.",
        },
        "rows": {
            "year_rows_with_positive_weight": len(rows),
        },
        "relationship_quality": {
            "very_happy_pct": round(very_happy, 2) if very_happy is not None else None,
            "very_or_pretty_happy_pct": round(happy_or_pretty, 2) if happy_or_pretty is not None else None,
            "n_unweighted": rel_n,
            "weight_sum": round(rel_weight, 4),
            "rule": "Use HAPMAR when substantive; otherwise HAPCOHAB. Very-happy share is the scored outcome candidate.",
        },
        "porn_frequency": {
            "monthly_or_more_pct": round(porn_any_monthly, 2) if porn_any_monthly is not None else None,
            "weekly_or_more_pct": round(porn_weekly, 2) if porn_weekly is not None else None,
            "daily_or_more_pct": round(porn_daily, 2) if porn_daily is not None else None,
            "n_unweighted": porn_n,
            "weight_sum": round(porn_weight, 4),
            "rule": "Weekly-or-more is the low-weight exposure candidate; frequency is not treated as impairment.",
        },
        "sexual_frequency": {
            "no_sex_pct": round(sex_none, 2) if sex_none is not None else None,
            "monthly_or_more_pct": round(sex_monthly, 2) if sex_monthly is not None else None,
            "weekly_or_more_pct": round(sex_weekly, 2) if sex_weekly is not None else None,
            "n_unweighted": sex_n,
            "weight_sum": round(sex_weight, 4),
            "by_age_band": sex_strata(2),
            "by_relationship_status": sex_strata(3),
            "rule": "Diagnostic only. Sexual inactivity is not automatically dysfunction and is not automatically scored.",
        },
        "infidelity_norms": {
            "always_wrong_pct": round(infid_always, 2) if infid_always is not None else None,
            "always_or_almost_always_wrong_pct": round(infid_strong, 2) if infid_strong is not None else None,
            "n_unweighted": infid_n,
            "weight_sum": round(infid_weight, 4),
            "rule": "Always-wrong share is the scored low-weight reciprocity-orientation candidate; attitude is not behavior.",
        },
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_path", type=Path, help="GSS CSV subset/export")
    parser.add_argument("--year", type=int, default=2024)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    result = extract_gss_signals(args.csv_path, year=args.year)
    args.out.write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {args.out}")
    for key in ("relationship_quality", "porn_frequency", "sexual_frequency", "infidelity_norms"):
        print(f"{key}: {result[key]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
