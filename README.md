# Eros Health Index — launch v1.0.1

A small static dashboard plus Python refresher. The goal is not to pretend that “the Awakening” can be scientifically measured; it is to build a transparent civilizational pulse meter from observable proxies.

## What it tracks

- **EHI:** the slow-moving structural composite built from partnership, marriage, fertility, digital substitution, and related signals, with annual backcast rows clearly separated from observed snapshots.
- **GOON:** a daily aggregate digital-pressure tracker. In demo mode it uses clearly marked sample motion; with a private local basket it refreshes from Tranco historical domain ranks and publishes only the aggregate signal.
- **Embodied connection:** partnership, socializing, and marriage aspiration/expectation.
- **Synthetic substitution:** AI-companion substitution and extreme digital saturation.
- **Relational reciprocity:** direct dating-boundary harm and future reciprocity signals.
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

The EHI tracker is the same structural score used by the main dashboard. Its history combines annual reconstructed fixed-core rows with observed full-basket snapshots from updater runs. Backcast rows in `data.json` are marked with `kind: "backcast"`, coverage, component names, and `method_version: "ehi-backcast-v1"`; observed snapshots are marked with `kind: "observed"`; current full-basket snapshots use `method_version: "headline-ehi-v2"`, while older saved observations retain their original method version. The chart offers 5Y, 10Y, and All available windows because the current fixed-core overlap begins in 2015.

Higher EHI is healthier.

### GOON

The Gooning Index is deliberately separate from the headline EHI. It is a short-term digital-pressure indicator, not a direct measurement of total pornography consumption and not a scoreboard for individual sites.

Higher GOON is worse for Eros.

The live adapter:

- queries Tranco for at least 30 days of daily historical ranks for each domain in the private local basket;
- converts lower (more popular) ranks into pressure values;
- aggregates the private basket inside target-share categories before producing one public series;
- smooths the line with a short exponential moving average;
- applies a conservative architecture uplift using novelty, intensity, interaction, and explicit extremity descriptors;
- writes only the aggregate GOON series into public dashboard data.

The browser offers 7D, 14D, and 30D views. If no private basket is configured, the dashboard says `DEMO` clearly and uses deterministic sample movement so the UI can still be tested locally.

## Eros field guide

The dashboard generates two short action cards for men and two for women after each rebuild. The advice wording and evidence links are curated; the priority and “why this is showing” lines are calculated from the current metric and group scores.

This is deliberately not a diagnosis engine. It connects population-level warning signals to practical, evidence-linked actions. The current advice rules live in `generate_advice()` inside `update_data.py`, so the logic is visible and editable.

## Scoring

For a higher-is-better metric:

`score = clamp((value - low_anchor) / (high_anchor - low_anchor) * 100)`

For a lower-is-better metric, the score is reversed. The headline index is the weighted mean of included metrics.

The anchors and raw weights are explicitly editable in `seed_data.json`. They are interpretive choices, not natural constants.

### Signal roles and correlation firewall

Every metric now carries a `signal_role`, `domain`, `correlation_cluster`, `evidence_tier`, and `mapping_confidence`. Outcomes, orientations, impairment signals, exposure proxies, mechanisms, context, and countercurrents are kept distinct so exposure is not silently promoted into pathology.

The headline score uses a correlation firewall. Included metrics keep their authored raw weights, but if metrics inside one `correlation_cluster` exceed that cluster cap, the effective weights are scaled proportionally. This lets related signals corroborate one another without allowing the same underlying phenomenon to vote repeatedly just because several adjacent measures are available. Both raw and effective weights remain visible in generated data and on metric cards.

### GOONER vs FEMOID meter

The joke meter is explicitly separate from the EHI outcome score. Only metrics marked `accountability_include: true` participate. Population outcomes such as partnership, marriage rate, fertility, and embodied socialization stay neutral unless a defensible directional behavioral mapping exists.

The launch meter uses **side-normalized severity** rather than a single shared pressure denominator. For each directional signal, the updater begins with the metric's effective correlation-capped weight, then applies visible modifiers for signal role, evidence tier, and mapping confidence. Exposure proxies and orientations therefore carry less directional authority than direct impairment signals. Each archetype gets its own weighted severity score:

`side_severity = weighted mean of (100 - metric_score) for the signals routed to that side`

The public GOONER/FEMOID split compares those two independent severity scores. This prevents a side from dominating merely because the current research basket happens to contain more sensors for that archetype.

The meter also reports both raw directional coverage and role/confidence-adjusted coverage. A breadth gate marks the comparison `PROVISIONAL` until each side has at least two independent correlation clusters and at least one impairment signal. This is an evidence-coverage safeguard, not an equality-of-outcome rule.

The labels are behavioral shorthand, not exclusive sex categories: both sexes can do both. `data.json` keeps contributor-level severity, adjusted accountability weight, role/evidence/mapping modifiers, cluster membership, and rationale auditable.

The launch browser UI uses a self-contained Canvas clash animation. The public GOONER/FEMOID split controls the collision position, while the inverse EHI score controls total animation pressure: lower EHI produces faster flow, stronger turbulence, more impact spray, and more frequent drips; healthier EHI values calm the entire duel without changing the left/right result. Sparse cosmetic-side debris (eyelash, fake nail, smartphone, lipstick, red flag, or heart) occasionally enters the stream as a visual gag. Animation starts only while the meter is in view, pauses when it leaves the viewport or the tab is hidden, and falls back to a static rendering when the browser requests reduced motion. No external graphics library or art asset is required.

## Plain-language methodology layer

The launch dashboard includes an optional **Plain-language methodology & current interpretation** layer near the accountability-meter disclaimer. It uses the same in-memory data object as the public dashboard and generates a classroom-safe explanation of:

- the current EHI and domain interpretation;
- the side-normalized accountability severities, display split, coverage, and provisional evidence-breadth status;
- normalization formulas and the correlation firewall;
- headline and accountability weighting logic;
- a complete current metric register with observed values, signal roles, evidence tiers, scores, raw/effective weights, headline inclusion status, and source links;
- interpretive limits and direct access to `data.json` for audit.

The layer deliberately removes the comedy vocabulary where possible while preserving the project names of the two accountability buckets. Its purpose is to make the project understandable without requiring the reader to share the dashboard's sense of humor. It explicitly states that the EHI is exploratory and recreational, not a validated clinical, psychological, or sociological scale.

## Refresh architecture

1. **Live API adapters** pull longitudinal Census ACS and World Bank fertility series.
2. **Tranco rank adapter** builds the aggregate GOON series when a private local basket is available.
3. **Auto-page adapters** conservatively parse selected CDC/NCHS headline values.
4. **Snapshots** store survey-wave findings where the publisher does not provide a stable current-value API. These should be replaced when a comparable new wave appears.

The script keeps partial results when one source fails and records failures in `refresh_errors`. Cached longitudinal series are carried forward when an upstream refresh temporarily fails, so the historical EHI spine is not deleted by a partial run. A failed or unavailable GOON refresh falls back to visibly labeled demo motion rather than pretending sample data is live.

## Important methodological limits

The metrics come from different populations, years, and sampling designs. The headline composite is therefore a theory-driven monitoring tool, not a validated clinical or sociological scale. Cross-country signals are displayed but excluded from the US headline score. Exposure is not treated as identical to impairment, and outcome deterioration is not automatically assigned to either accountability archetype.

`research_pipeline` in the data files records high-priority candidates that require more analysis before scoring. The current GSS candidates—relationship quality, pornography frequency, and sexual frequency—are intentionally held out until a documented weighted extraction is complete. Raw codebook counts are not substituted for weighted national estimates. `research_watchlist` records plausible but not-yet-score-ready domains such as deceptive self-presentation, breadcrumbing, fantasy-media displacement, and coparental gatekeeping.

GOON is also a proxy. Tranco domain rank is not the same thing as raw visits, minutes watched, or unique porn consumers. The exact conversion from rank to pressure is transparent in `rank_to_pressure()`, and the extremity trait is a bounded architecture modifier rather than a substitute for observed popularity.

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

Local observed refreshes can use a private `goon_basket.txt`. The updater reads that file, queries Tranco's official historical-rank endpoint sequentially, and writes only the aggregate signal to `data.json` / `data.js`. Tranco documents a one-query-per-second API limit, so larger baskets take longer to refresh.

`goon_basket.txt` is ignored by Git. For GitHub Actions, use a repository secret named `GOON_DOMAIN_BASKET` instead of committing the file. Structured rows may include `domain|category|novelty|intensity|interaction|extremity`; older five-field rows remain supported.

The public dashboard shows only the aggregate GOON line.

## GOON pressure chart

The GOON chart is a market-style pressure tape rather than financial OHLC data:

- main line = daily aggregate GOON close
- red segment = aggregate pressure rose from the previous day
- green segment = aggregate pressure fell from the previous day
- soft ribbon = compressed interquartile (middle 50%) basket pressure spread for that day
- purple line = 3-day exponential moving average of daily closes

The tooltip reports the previous close, daily change, and full middle-range low/high values. The ribbon is visually compressed so cross-domain spread does not flatten the aggregate daily move. This is a presentation of daily domain-ranking pressure, not a financial market and not intraday traffic.


## GOON chart ranges

The GOON tracker offers 7D, 14D, and 30D views. The 7D view shows the raw pressure line only; 14D overlays a 3-day EMA; 30D overlays a 5-day EMA.

## GOON chart hover inspection

Move the pointer anywhere across the GOON chart. The chart snaps to the nearest daily point and shows:

- date
- GOON close
- previous daily value
- daily change
- middle-range low and high values represented by the spread band
- EMA value when the selected range displays a trend line

The vertical guide line follows the selected day; the tooltip stays within the chart card.


## v1.0.1 polish

- Score-card tooltips briefly explain what each domain rating means and how it is composed.
- Tooltips support mouse hover, keyboard focus, and touch without changing any scores or weights.
