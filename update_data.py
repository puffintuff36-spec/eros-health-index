# v0.3.1: GOON candlestick presentation and robust daily aggregation
#!/usr/bin/env python3
"""Refresh the Eros Health Index data file from public sources.

The script deliberately distinguishes four source types:
- live APIs: Census ACS, World Bank
- GOON pulse: aggregate daily Tranco domain-rank pressure
- auto-page values: selected CDC/NCHS pages parsed by conservative regexes
- snapshots: survey findings that require versioned manual review

Run:
    python update_data.py
    python update_data.py --offline   # rebuild scores from cached seed values only
"""

from __future__ import annotations

import argparse
import copy
import datetime as dt
import json
import os
import re
from html.parser import HTMLParser
import sys
import time
import statistics
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
SEED = ROOT / "seed_data.json"
OUT = ROOT / "data.json"
OUT_JS = ROOT / "data.js"
USER_AGENT = "ErosHealthIndex/0.1 (+local research dashboard)"
CENSUS_KEY_FILE = ROOT / "census_api_key.txt"
GOON_BASKET_FILE = ROOT / "goon_basket.txt"

# The public dashboard never exposes individual domain-level results. The local
# updater reads a private basket, queries Tranco history, and publishes only one
# aggregate GOON series.



def get_census_api_key() -> str | None:
    """Return a Census API key from env var or local text file, if available."""
    env_key = os.environ.get("CENSUS_API_KEY", "").strip()
    if env_key:
        return env_key
    if CENSUS_KEY_FILE.exists():
        key = CENSUS_KEY_FILE.read_text(encoding="utf-8").strip()
        if key:
            return key
    return None


def get_goon_domain_basket() -> list[str]:
    """Return the private GOON domain basket from env var or local text file."""
    raw = os.environ.get("GOON_DOMAIN_BASKET", "").strip()
    if not raw and GOON_BASKET_FILE.exists():
        raw = GOON_BASKET_FILE.read_text(encoding="utf-8")
    domains: list[str] = []
    cleaned_lines = [line.split("#", 1)[0] for line in raw.splitlines()]
    for token in re.split(r"[\s,;]+", "\n".join(cleaned_lines)):
        token = token.strip().lower()
        if not token:
            continue
        token = re.sub(r"^https?://", "", token).split("/", 1)[0].strip(".")
        if re.fullmatch(r"[a-z0-9.-]+\.[a-z]{2,}", token) and token not in domains:
            domains.append(token)
    return domains


class _TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)


def html_to_text(raw: str) -> str:
    parser = _TextExtractor()
    parser.feed(raw)
    return " ".join(parser.parts)


def fetch_text(url: str, timeout: int = 30, headers: dict[str, str] | None = None) -> str:
    request_headers = {"User-Agent": USER_AGENT}
    if headers:
        request_headers.update(headers)
    req = urllib.request.Request(url, headers=request_headers)
    with urllib.request.urlopen(req, timeout=timeout) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_json(url: str, timeout: int = 30, headers: dict[str, str] | None = None) -> Any:
    return json.loads(fetch_text(url, timeout=timeout, headers=headers))


def http_error_detail(exc: urllib.error.HTTPError) -> str:
    """Return a compact Cloudflare/Census HTTP error description including body text."""
    try:
        body = exc.read().decode("utf-8", errors="replace").strip()
    except Exception:
        body = ""
    if len(body) > 500:
        body = body[:500] + "…"
    return f"HTTP {exc.code}: {body or exc.reason}"


def clamp(value: float, lo: float = 0.0, hi: float = 100.0) -> float:
    return max(lo, min(hi, value))


def score_metric(metric: dict[str, Any]) -> float | None:
    if metric.get("value") is None:
        return None
    lo = float(metric["low_anchor"])
    hi = float(metric["high_anchor"])
    if hi <= lo:
        raise ValueError(f"Invalid anchors for {metric['id']}: {lo}, {hi}")
    raw = (float(metric["value"]) - lo) / (hi - lo) * 100.0
    if metric["direction"] == "lower_better":
        raw = 100.0 - raw
    elif metric["direction"] != "higher_better":
        raise ValueError(f"Unknown direction for {metric['id']}")
    return round(clamp(raw), 1)


def calculate_index(data: dict[str, Any]) -> None:
    numerator = 0.0
    denominator = 0.0
    groups: dict[str, list[tuple[float, float]]] = {}

    for metric in data["metrics"]:
        metric["score"] = score_metric(metric)
        if not metric.get("include_in_index") or metric["score"] is None:
            continue
        weight = float(metric.get("weight", 1.0))
        numerator += metric["score"] * weight
        denominator += weight
        groups.setdefault(metric["group"], []).append((metric["score"], weight))

    data["index"] = round(numerator / denominator, 1) if denominator else None
    data["group_scores"] = {
        group: round(sum(s * w for s, w in rows) / sum(w for _, w in rows), 1)
        for group, rows in groups.items()
    }


def metric_by_id(data: dict[str, Any], metric_id: str) -> dict[str, Any]:
    for metric in data["metrics"]:
        if metric["id"] == metric_id:
            return metric
    raise KeyError(metric_id)


def generate_advice(data: dict[str, Any]) -> None:
    """Generate blunt, practical advice from the current dashboard signals.

    The engine is intentionally simple and inspectable: the wording and evidence base are
    curated, while the "why now" lines and priorities are calculated from current metric
    values and group scores. This keeps the advice grounded without pretending an index can
    diagnose an individual person.
    """
    metrics = {m["id"]: m for m in data.get("metrics", [])}
    groups = data.get("group_scores", {})

    def value(metric_id: str, default: float = 0.0) -> float:
        try:
            return float(metrics[metric_id]["value"])
        except (KeyError, TypeError, ValueError):
            return default

    def score(metric_id: str, default: float = 50.0) -> float:
        try:
            raw = metrics[metric_id].get("score")
            return float(raw) if raw is not None else default
        except (KeyError, TypeError, ValueError):
            return default

    synthetic = float(groups.get("Synthetic substitution", 50.0))
    embodied = float(groups.get("Embodied connection", 50.0))
    generativity = float(groups.get("Generativity", 50.0))
    ai_monthly = value("ai_companion_monthly")
    ai_satisfaction = value("ai_equal_satisfaction")
    always_online = value("almost_constant_online")
    marriage_desire = value("marriage_desire")
    partnered = value("partnered_adults")
    anti_porn = value("anti_porn_restriction_support")

    data["advice"] = {
        "engine_note": "Actions are selected from current index signals; evidence links support the behavioral rationale, not the metaphysical interpretation.",
        "men": [
            {
                "priority": round(100.0 - synthetic, 1),
                "title": "STOP GOONING.",
                "action": "If porn is replacing sex, courtship, sleep, work, or your ability to want an ordinary woman, kill the loop.",
                "why": f"Synthetic substitution scores {synthetic:.1f}/100. The countercurrent metric also finds {anti_porn:.0f}% of young men favor harder access to online porn.",
                "evidence_note": "The clean claim is not “porn automatically causes ED.” A meta-analysis found pornography use associated with lower interpersonal satisfaction, with significant sex-stratified results for men; problematic use is also studied separately from ordinary use.",
                "sources": [
                    {
                        "label": "Meta-analysis: pornography & satisfaction",
                        "url": "https://academic.oup.com/hcr/article-abstract/43/3/315/4670699"
                    },
                    {
                        "label": "Study: problematic porn use & ED",
                        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8569536/"
                    }
                ]
            },
            {
                "priority": round((100.0 - score("almost_constant_online") + 100.0 - score("ai_companion_monthly") + 100.0 - score("ai_equal_satisfaction")) / 3.0, 1),
                "title": "LEAVE THE CAVE.",
                "action": "Put two recurring, in-person social commitments on your calendar. Screens do not count.",
                "why": f"{always_online:.0f}% of teens report being online almost constantly; {ai_monthly:.0f}% use AI companions at least monthly, and {ai_satisfaction:.0f}% rate those conversations as equally or more satisfying than talk with real friends.",
                "evidence_note": "Large meta-analyses link stronger social relationships with substantially better survival and health outcomes. The practical move is boring and powerful: create recurring embodied contact.",
                "sources": [
                    {
                        "label": "Meta-analysis: social relationships & mortality",
                        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2910600/"
                    },
                    {
                        "label": "Index source: teen AI companions",
                        "url": metrics.get("ai_companion_monthly", {}).get("source_url", "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions")
                    }
                ]
            }
        ],
        "women": [
            {
                "priority": round((100.0 - embodied) * 0.75 + min(25.0, max(0.0, marriage_desire - partnered)) * 2.0, 1),
                "title": "STOP SHOPPING. START CHOOSING.",
                "action": "Cap the swipe session. Give one plausible man a real conversation or date before reopening the catalogue.",
                "why": f"Embodied connection scores {embodied:.1f}/100, while {marriage_desire:.0f}% of unmarried young adults still say they want marriage. Desire for union is surviving better than actual connection.",
                "evidence_note": "Online-dating experiments found that repeated profile evaluation can create a rejection mind-set; in one consequential study, women’s match probability fell as the task progressed.",
                "sources": [
                    {
                        "label": "Experiments: rejection mind-set in online dating",
                        "url": "https://journals.sagepub.com/doi/10.1177/1948550619866189"
                    },
                    {
                        "label": "Experiment: excessive partner availability",
                        "url": "https://www.sciencedirect.com/science/article/pii/S0747563221003009"
                    }
                ]
            },
            {
                "priority": round((100.0 - embodied) * 0.8 + (100.0 - generativity) * 0.2, 1),
                "title": "DATE CHARACTER, NOT DANGER.",
                "action": "Charisma is not character. Watch how he handles frustration, boundaries, responsibility, and boring Tuesdays.",
                "why": f"Embodied connection scores {embodied:.1f}/100 and generativity {generativity:.1f}/100. The index is weak where durable pair-bonding and life-building should show up.",
                "evidence_note": "Couple research links Dark Triad traits with relationship satisfaction outcomes, while longitudinal work finds perceived partner responsiveness—feeling understood, valued, and cared for—predicts later eudaimonic well-being.",
                "sources": [
                    {
                        "label": "Couple study: Dark Triad & relationship satisfaction",
                        "url": "https://pubmed.ncbi.nlm.nih.gov/37288559/"
                    },
                    {
                        "label": "Longitudinal study: partner responsiveness & well-being",
                        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5458635/"
                    }
                ]
            }
        ]
    }

    for audience in ("men", "women"):
        data["advice"][audience].sort(key=lambda item: item["priority"], reverse=True)
        data["advice"][audience] = data["advice"][audience][:2]



def make_demo_goon_series(now: dt.datetime | None = None) -> list[dict[str, Any]]:
    """Create deterministic daily demo candles so the local UI can be tested honestly."""
    import math

    now = now or dt.datetime.now(dt.UTC)
    end = now.replace(hour=0, minute=0, second=0, microsecond=0)
    rows: list[dict[str, Any]] = []
    previous_close: float | None = None
    for i in range(30):
        t = end - dt.timedelta(days=29 - i)
        close = clamp(58.0 + 2.7 * math.sin(i / 3.8) + 1.1 * math.sin(i / 1.7) + i * 0.035)
        open_value = close if previous_close is None else previous_close
        spread = 2.2 + 0.8 * (1 + math.sin(i / 2.2))
        high = clamp(max(open_value, close) + spread)
        low = clamp(min(open_value, close) - spread * 0.9)
        rows.append({
            "timestamp": t.isoformat(),
            "open": round(open_value, 2),
            "high": round(high, 2),
            "low": round(low, 2),
            "close": round(close, 2),
            "value": round(close, 2),
        })
        previous_close = close
    return rows


def _parse_radar_rank_value(raw: Any) -> float:
    """Parse exact ranks and Cloudflare rank-bucket labels into one rank proxy."""
    import math

    if raw is None:
        return float("nan")
    if isinstance(raw, (int, float)) and not isinstance(raw, bool):
        value = float(raw)
        return value if math.isfinite(value) and value > 0 else float("nan")

    text = str(raw).strip()
    if not text:
        return float("nan")
    try:
        value = float(text)
        return value if math.isfinite(value) and value > 0 else float("nan")
    except ValueError:
        pass

    def magnitude(token: str) -> float | None:
        token = token.strip().lower().replace(",", "")
        match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)([kmb]?)", token)
        if not match:
            return None
        value = float(match.group(1))
        suffix = match.group(2)
        if suffix == "k":
            value *= 1_000
        elif suffix == "m":
            value *= 1_000_000
        elif suffix == "b":
            value *= 1_000_000_000
        return value

    cleaned = text.lower().replace("_", "-").replace(" ", "-")
    tokens = re.findall(r"[0-9]+(?:\.[0-9]+)?[kmb]?", cleaned)
    numbers = [magnitude(token) for token in tokens]
    numbers = [value for value in numbers if value is not None]
    if not numbers:
        return float("nan")
    if len(numbers) >= 2:
        lo, hi = min(numbers), max(numbers)
        return (lo * hi) ** 0.5 if lo > 0 else hi

    upper = numbers[0]
    if "top" in cleaned and upper > 1:
        boundaries = [
            100, 200, 500, 1_000, 2_000, 5_000, 10_000, 20_000,
            50_000, 100_000, 200_000, 500_000, 1_000_000,
        ]
        previous = 1.0
        for boundary in boundaries:
            if upper <= boundary:
                lo = previous + 1.0 if previous > 1 else 1.0
                return (lo * boundary) ** 0.5
            previous = float(boundary)
    return upper


def extract_radar_rank_matrix(payload: dict[str, Any]) -> tuple[list[str], list[list[float]]]:
    """Return timestamps and every usable rank vector in Radar ``serie_0``."""
    result = payload.get("result", payload)
    if not isinstance(result, dict):
        raise ValueError("Cloudflare response result was not an object")
    serie = result.get("serie_0")
    if not isinstance(serie, dict):
        raise ValueError("Cloudflare response did not contain serie_0")

    timestamps = serie.get("timestamps")
    if not isinstance(timestamps, list) or not timestamps:
        return [], []

    vectors: list[list[float]] = []
    for key, values in serie.items():
        if key == "timestamps" or not isinstance(values, list) or not values:
            continue
        n = min(len(timestamps), len(values))
        if n < 2:
            continue
        parsed = [_parse_radar_rank_value(value) for value in values[:n]]
        if any(value == value and value > 0 for value in parsed):
            # Pad short vectors so alignment remains timestamp-based.
            parsed.extend([float("nan")] * (len(timestamps) - len(parsed)))
            vectors.append(parsed[:len(timestamps)])

    return [str(value) for value in timestamps], vectors


def extract_radar_top_ranks(payload: dict[str, Any]) -> tuple[list[float], str | None]:
    """Return ranks from a Radar top response plus its dataset update time."""
    result = payload.get("result", payload)
    if not isinstance(result, dict):
        return [], None
    rows = result.get("top_0")
    ranks: list[float] = []
    if isinstance(rows, list):
        for row in rows:
            if isinstance(row, dict):
                value = _parse_radar_rank_value(row.get("rank"))
                if value == value and value > 0:
                    ranks.append(value)
    meta = result.get("meta", {})
    last_updated = str(meta.get("lastUpdated")) if isinstance(meta, dict) and meta.get("lastUpdated") else None
    return ranks, last_updated


def rank_to_pressure(rank: float, cap: float = 1_000_000.0) -> float:
    """Convert lower-is-more-popular domain rank to a 0-100 pressure contribution."""
    import math

    rank = clamp(rank, 1.0, cap)
    return clamp(100.0 * math.log(cap / rank) / math.log(cap))


def ensure_goon_candles(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Normalize legacy GOON points into candle-ready rows without inventing extra volatility."""
    normalized: list[dict[str, Any]] = []
    previous_close: float | None = None
    for row in rows:
        if not isinstance(row, dict) or row.get("timestamp") is None:
            continue
        try:
            close = float(row.get("close", row.get("value")))
        except (TypeError, ValueError):
            continue
        try:
            open_value = float(row.get("open"))
        except (TypeError, ValueError):
            open_value = previous_close if previous_close is not None else close
        try:
            high = float(row.get("high"))
        except (TypeError, ValueError):
            high = max(open_value, close)
        try:
            low = float(row.get("low"))
        except (TypeError, ValueError):
            low = min(open_value, close)
        clean = dict(row)
        clean.update({
            "open": round(open_value, 2),
            "high": round(max(high, open_value, close), 2),
            "low": round(min(low, open_value, close), 2),
            "close": round(close, 2),
            "value": round(close, 2),
        })
        normalized.append(clean)
        previous_close = close
    return normalized


def finalize_goon_summary(data: dict[str, Any]) -> None:
    goon = data.get("goon", {})
    rows = goon.get("series", []) if isinstance(goon, dict) else []
    if not rows:
        return
    rows = ensure_goon_candles(rows)
    goon["series"] = rows
    current = float(rows[-1]["value"])
    baseline = float(rows[-2]["value"]) if len(rows) > 1 else current
    goon["value"] = round(current, 1)
    goon["change_24h"] = round(current - baseline, 1)


def refresh_goon_index(data: dict[str, Any]) -> None:
    """Build an anonymous daily GOON pressure signal from Tranco rank histories.

    Tranco exposes at least 30 days of daily rank history per domain. The updater
    queries the private local basket sequentially (respecting the documented
    one-query-per-second limit), converts rank to a log pressure contribution,
    and publishes only the aggregate series.
    """
    domains = get_goon_domain_basket()
    if not domains:
        data["goon"] = {
            "mode": "demo",
            "label": "The Gooning Index",
            "ticker": "GOON",
            "description": "Demo movement only. Add a private goon_basket.txt for observed daily aggregate pressure.",
            "source_name": "Tranco (demo until basket is configured)",
            "source_url": "https://tranco-list.eu/",
            "last_updated": None,
            "series": make_demo_goon_series(),
        }
        finalize_goon_summary(data)
        return

    histories: dict[str, dict[str, float]] = {}
    diagnostics: list[str] = []

    for index, domain in enumerate(domains):
        url = "https://tranco-list.eu/api/ranks/domain/" + urllib.parse.quote(domain, safe="")
        try:
            payload = fetch_json(url)
        except urllib.error.HTTPError as exc:
            diagnostics.append(f"{domain}: {http_error_detail(exc)}")
        except urllib.error.URLError as exc:
            diagnostics.append(f"{domain}: network error {exc.reason}")
        else:
            rows = payload.get("ranks", []) if isinstance(payload, dict) else []
            parsed: dict[str, float] = {}
            if isinstance(rows, list):
                for row in rows:
                    if not isinstance(row, dict):
                        continue
                    date = str(row.get("date", "")).strip()
                    try:
                        rank = float(row.get("rank"))
                    except (TypeError, ValueError):
                        continue
                    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", date) and rank > 0:
                        parsed[date] = rank
            if parsed:
                histories[domain] = parsed
            else:
                diagnostics.append(f"{domain}: no rank history")

        # Tranco documents a one-query-per-second API limit.
        if index < len(domains) - 1:
            time.sleep(1.05)

    minimum_domains = max(2, (len(domains) + 1) // 2)
    if len(histories) < minimum_domains:
        detail = "; ".join(diagnostics[:8]) or "no usable histories returned"
        raise RuntimeError(
            f"Tranco returned usable history for only {len(histories)}/{len(domains)} basket domains; "
            f"need at least {minimum_domains}. {detail}"
        )

    dates = sorted({date for history in histories.values() for date in history})
    rows: list[dict[str, Any]] = []
    coverage_floor = max(2, (len(histories) + 1) // 2)
    previous_close: float | None = None
    for date in dates:
        ranks = [history[date] for history in histories.values() if date in history]
        if len(ranks) < coverage_floor:
            continue
        pressures = sorted(rank_to_pressure(rank) for rank in ranks)
        close = float(statistics.median(pressures))
        open_value = close if previous_close is None else previous_close
        q1, _, q3 = statistics.quantiles(pressures, n=4, method="inclusive")
        rows.append({
            "timestamp": f"{date}T00:00:00Z",
            "open": round(open_value, 2),
            "high": round(max(q3, open_value, close), 2),
            "low": round(min(q1, open_value, close), 2),
            "close": round(close, 2),
            "value": round(close, 2),
            "coverage": len(ranks),
        })
        previous_close = close

    if len(rows) < 2:
        detail = "; ".join(diagnostics[:8]) or "insufficient overlapping dates"
        raise RuntimeError(f"Tranco returned insufficient overlapping history for GOON. {detail}")

    data["goon"] = {
        "mode": "live",
        "signal_kind": "timeseries",
        "label": "The Gooning Index",
        "ticker": "GOON",
        "description": "Aggregate daily adult-domain popularity pressure derived from a private basket and Tranco rank histories. Candle bodies show median basket movement; wicks show the basket interquartile pressure range. Higher is worse for Eros; individual domains and ranks are not published.",
        "source_name": "Tranco",
        "source_url": "https://tranco-list.eu/api_documentation",
        "last_updated": rows[-1]["timestamp"],
        "basket_size": len(domains),
        "domains_reporting": len(histories),
        "series": rows[-60:],
    }
    finalize_goon_summary(data)



def merge_goon_history(data: dict[str, Any], previous: dict[str, Any] | None) -> None:
    """Carry forward observed GOON history and merge newly fetched daily observations."""
    goon = data.get("goon")
    if not isinstance(goon, dict) or goon.get("mode") != "live":
        return
    current_rows = goon.get("series") if isinstance(goon.get("series"), list) else []
    old_rows: list[dict[str, Any]] = []
    if previous and isinstance(previous.get("goon"), dict):
        prior = previous["goon"].get("series")
        if isinstance(prior, list):
            old_rows = [row for row in prior if isinstance(row, dict) and row.get("timestamp") is not None]
    merged: dict[str, dict[str, Any]] = {str(row["timestamp"]): row for row in old_rows}
    for row in current_rows:
        if isinstance(row, dict) and row.get("timestamp") is not None:
            merged[str(row["timestamp"])] = row
    goon["series"] = ensure_goon_candles([merged[key] for key in sorted(merged)][-365:])
    finalize_goon_summary(data)


def update_ehi_history(data: dict[str, Any], previous: dict[str, Any] | None = None) -> None:
    history: list[dict[str, Any]] = []
    if previous and isinstance(previous.get("ehi_history"), list):
        history = [row for row in previous["ehi_history"] if isinstance(row, dict)]
    if data.get("index") is not None:
        history.append({
            "timestamp": data["generated_at"],
            "value": float(data["index"]),
        })
    data["ehi_history"] = history[-240:]

def refresh_census_series(data: dict[str, Any]) -> None:
    partnered: list[dict[str, float | int]] = []
    alone: list[dict[str, float | int]] = []
    current_year = dt.datetime.now(dt.UTC).year
    api_key = get_census_api_key()
    if not api_key:
        raise RuntimeError(
            "Census API key required. Put the key alone in census_api_key.txt "
            "next to update_data.py, or set CENSUS_API_KEY."
        )

    for year in range(2010, current_year + 1):
        params = urllib.parse.urlencode({
            "get": "NAME,B09021_008E,B09021_009E,B09021_010E,B09021_011E",
            "for": "us:1",
            "key": api_key,
        })
        url = f"https://api.census.gov/data/{year}/acs/acs1?{params}"
        try:
            payload = fetch_json(url)
            header, row = payload[0], payload[1]
            rec = dict(zip(header, row))
            total = float(rec["B09021_008E"])
            lives_alone = float(rec["B09021_009E"])
            spouse = float(rec["B09021_010E"])
            unmarried_partner = float(rec["B09021_011E"])
            if total <= 0:
                continue
            partnered.append({"year": year, "value": round((spouse + unmarried_partner) / total * 100, 2)})
            alone.append({"year": year, "value": round(lives_alone / total * 100, 2)})
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, ValueError, KeyError, IndexError, json.JSONDecodeError):
            continue

    if not partnered or not alone:
        raise RuntimeError("No Census ACS rows were retrieved; check Census API availability or query parameters")

    data["series"]["young_adult_partnered_pct"] = partnered
    data["series"]["young_adult_living_alone_pct"] = alone


def refresh_world_bank_tfr(data: dict[str, Any]) -> None:
    url = "https://api.worldbank.org/v2/country/USA/indicator/SP.DYN.TFRT.IN?format=json&per_page=100"
    payload = fetch_json(url)
    rows = payload[1]
    series = [
        {"year": int(r["date"]), "value": round(float(r["value"]), 3)}
        for r in rows
        if r.get("value") is not None
    ]
    series.sort(key=lambda r: r["year"])
    if series:
        data["series"]["us_total_fertility_rate"] = series


def extract_first_float(text: str, patterns: list[str]) -> float | None:
    compact = re.sub(r"\s+", " ", html_to_text(text))
    for pattern in patterns:
        match = re.search(pattern, compact, flags=re.IGNORECASE)
        if match:
            return float(match.group(1).replace(",", ""))
    return None


def refresh_cdc_marriage_rate(data: dict[str, Any]) -> None:
    url = "https://www.cdc.gov/nchs/fastats/marriage-divorce.htm"
    text = fetch_text(url)
    value = extract_first_float(text, [r"Marriage rate:\s*([0-9.]+)"])
    if value is not None:
        metric_by_id(data, "marriage_rate")["value"] = value


def refresh_cdc_fertility_rate(data: dict[str, Any]) -> None:
    url = "https://www.cdc.gov/nchs/nvss/births.htm"
    text = fetch_text(url)
    value = extract_first_float(text, [r"Fertility rate:\s*([0-9.]+)"])
    if value is not None:
        metric_by_id(data, "general_fertility_rate")["value"] = value


def refresh_online(data: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    jobs = [
        ("Census ACS", refresh_census_series),
        ("World Bank fertility", refresh_world_bank_tfr),
        ("CDC marriage rate", refresh_cdc_marriage_rate),
        ("CDC fertility rate", refresh_cdc_fertility_rate),
        ("Tranco GOON pulse", refresh_goon_index),
    ]
    for name, fn in jobs:
        try:
            fn(data)
        except Exception as exc:  # keep partial refreshes usable
            errors.append(f"{name}: {exc}")
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--offline", action="store_true", help="Do not contact remote sources")
    args = parser.parse_args()

    data = json.loads(SEED.read_text(encoding="utf-8"))
    data = copy.deepcopy(data)
    previous: dict[str, Any] | None = None
    if OUT.exists():
        try:
            previous = json.loads(OUT.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            previous = None
    errors: list[str] = []

    if not args.offline:
        errors = refresh_online(data)
    if "goon" not in data:
        # Offline mode or a failed Tranco refresh falls back visibly to DEMO data.
        data["goon"] = {
            "mode": "demo",
            "label": "The Gooning Index",
            "ticker": "GOON",
            "description": "Demo movement only. Add a private goon_basket.txt for observed daily aggregate rank pressure.",
            "source_name": "Tranco (demo until basket is configured)",
            "source_url": "https://tranco-list.eu/",
            "last_updated": None,
            "series": make_demo_goon_series(),
        }
        finalize_goon_summary(data)

    merge_goon_history(data, previous)
    data["generated_at"] = dt.datetime.now(dt.UTC).isoformat()
    data["refresh_errors"] = errors
    calculate_index(data)
    generate_advice(data)
    update_ehi_history(data, previous)
    OUT.write_text(json.dumps(data, indent=2), encoding="utf-8")
    OUT_JS.write_text("window.EROS_DATA = " + json.dumps(data, indent=2) + ";\n", encoding="utf-8")

    print(f"Wrote {OUT}")
    print(f"Wrote {OUT_JS}")
    print(f"Index: {data['index']}")
    if errors:
        print("Partial refresh warnings:", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
