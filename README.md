# Eros Health Index — prototype v0.3

A small static dashboard plus Python refresher. The goal is not to pretend that “the Awakening” can be scientifically measured; it is to build a transparent civilizational pulse meter from observable proxies.

## What it tracks

- **EHI:** the slow-moving structural composite built from partnership, marriage, fertility, digital substitution, and related signals.
- **GOON:** a daily aggregate digital-pressure tracker. In demo mode it uses clearly marked sample motion; with a private local basket it refreshes from Tranco historical domain ranks and publishes only the aggregate.
- **Embodied connection:** partnership and marriage aspiration/expectation.
- **Synthetic substitution:** AI-companion substitution and extreme digital saturation.
- **Generativity:** marriage and fertility signals.
- **Context-only signals:** international porn exposure and possible anti-porn countercurrents.

## Easiest way to open it

1. Extract the ZIP file.
2. Open the extracted folder.
3. Double-click `index.html`.

That is enough to view the dashboard. The page loads the local `data.js` fallback, so it works when opened directly from disk.

## Refresh the data on Windows

1. Install Python 3 if you do not already have it. During installation, check **Add Python to PATH**.
2. Open the extracted `eros_health_index` folder.
3. Click the folder address bar, type `cmd`, and press Enter. A Command Prompt opens already pointed at the correct folder.
4. Type:

```bash
python update_data.py
```

5. When it finishes, reload `index.html` in the browser.

For an offline rebuild using only the bundled seed/snapshot values and GOON demo motion:

```bash
python update_data.py --offline
```

Advanced option: serve the folder locally with:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## The two trackers

### EHI

The EHI tracker is the same structural score used by the main dashboard. Every updater run adds a timestamped EHI snapshot to `data.json`, so its small history line builds gradually on your machine.

Higher EHI is healthier.

### GOON

The Gooning Index is deliberately separate from the headline EHI. It is a short-term digital-pressure indicator, not a direct measurement of total pornography consumption and not a scoreboard for individual sites.

Higher GOON is worse for Eros.

The live adapter:

- queries Tranco for at least 30 days of daily historical ranks for each domain in the private local basket;
- converts lower (more popular) ranks into pressure values;
- averages the private basket into one aggregate series;
- smooths the line with a short exponential moving average;
- converts those ranks into one log-scaled pressure series and writes only that aggregate GOON series into public dashboard data.

The browser offers 7D and 30D views. If no private basket is configured, the dashboard says `DEMO` clearly and uses deterministic sample movement so the UI can still be tested locally.

## Eros field guide

The dashboard generates two short action cards for men and two for women after each rebuild. The advice wording and evidence links are curated; the priority and “why this is showing” lines are calculated from the current metric and group scores.

This is deliberately not a diagnosis engine. It connects population-level warning signals to practical, evidence-linked actions. The current advice rules live in `generate_advice()` inside `update_data.py`, so the logic is visible and editable.

## Scoring

For a higher-is-better metric:

`score = clamp((value - low_anchor) / (high_anchor - low_anchor) * 100)`

For a lower-is-better metric, the score is reversed. The headline index is the weighted mean of included metrics.

The anchors and weights are explicitly editable in `seed_data.json`. They are interpretive choices, not natural constants.

## Refresh architecture

1. **Live API adapters** pull longitudinal Census ACS and World Bank fertility series.
2. **Tranco rank adapter** builds the aggregate GOON series when a private local basket is available.
3. **Auto-page adapters** conservatively parse selected CDC/NCHS headline values.
4. **Snapshots** store survey-wave findings where the publisher does not provide a stable current-value API. These should be replaced when a comparable new wave appears.

The script keeps partial results when one source fails and records failures in `refresh_errors`. A failed or unavailable Radar refresh falls back to visibly labeled demo motion rather than pretending sample data is live.

## Important methodological limits

The metrics come from different populations, years, and sampling designs. The headline composite is therefore a theory-driven monitoring tool, not a validated clinical or sociological scale. Cross-country signals are displayed but excluded from the US headline score. Intent measures are weighted below direct behavior measures.

GOON is also a proxy. Tranco domain rank is not the same thing as raw visits, minutes watched, or unique porn consumers. The exact conversion from rank to pressure is transparent in `rank_to_pressure()` and should be treated as an interpretable index design choice, not natural law.

## Census API key

The Census charts require a Census API key.

1. Request and activate a free Census API key from the Census Developers site.
2. In this folder, create a plain text file named `census_api_key.txt`.
3. Paste only your API key into that file and save it.
4. Run:

```bash
python update_data.py
```

The updater also accepts an environment variable named `CENSUS_API_KEY`.

## GOON basket for observed data

The local package includes `goon_basket.txt`. The updater reads that file, queries Tranco's official historical-rank endpoint sequentially, and writes only the aggregate signal to `data.json` / `data.js`. Tranco documents a one-query-per-second API limit, so a refresh with eight basket domains takes several seconds.

`goon_basket.txt` is ignored by Git. For GitHub Actions later, use a repository secret named `GOON_DOMAIN_BASKET` containing comma-separated domains instead of committing the file.

The public dashboard shows only the aggregate GOON line.

## GOON candle semantics

The GOON chart uses custom daily candles rather than financial OHLC data:

- candle open = previous day aggregate GOON close
- candle close = current day median basket pressure
- wick = interquartile (middle 50%) basket pressure range for that day
- red = GOON pressure rose; green = GOON pressure fell
- purple line = 3-day exponential moving average of daily closes

This is a presentation of daily domain-ranking pressure, not a financial market and not intraday traffic.


## GOON chart ranges

The candlestick tracker offers 7D, 14D, and 30D views. The 7D view shows raw candles only; 14D overlays a 3-day EMA; 30D overlays a 5-day EMA.

## GOON chart hover inspection

Move the pointer anywhere across the GOON chart. The chart snaps to the nearest daily candle and shows:

- date
- GOON close
- previous daily value
- daily change
- middle-range low and high values represented by the wick
- EMA value when the selected range displays a trend line

The vertical guide line follows the selected day; the tooltip stays within the chart card.
