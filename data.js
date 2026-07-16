window.EROS_DATA = {
  "generated_at": "2026-07-16T13:08:08.914297+00:00",
  "title": "Eros Health Index",
  "subtitle": "A transparent prototype for tracking embodied connection, synthetic substitution, relational reciprocity, and generativity.",
  "metrics": [
    {
      "id": "partnered_adults",
      "label": "Adults living with spouse or partner",
      "group": "Embodied connection",
      "value": 58.0,
      "unit": "%",
      "year": 2023,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 50,
      "high_anchor": 70,
      "weight": 1.5,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Pew Research Center",
      "source_url": "https://www.pewresearch.org/short-reads/2025/01/08/share-of-us-adults-living-without-a-romantic-partner-has-ticked-down-in-recent-years/",
      "note": "Derived as 100 minus the reported 42% living without a spouse or partner.",
      "signal_role": "outcome",
      "domain": "embodied_connection",
      "correlation_cluster": "embodied_partnership",
      "evidence_tier": "B",
      "mapping_confidence": "high",
      "accountability_include": false,
      "effective_weight": 1.5,
      "score": 40.0
    },
    {
      "id": "marriage_desire",
      "label": "Unmarried young adults who want to marry",
      "group": "Embodied connection",
      "value": 69.0,
      "unit": "%",
      "year": 2023,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 50,
      "high_anchor": 85,
      "weight": 1.2,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Pew Research Center",
      "source_url": "https://www.pewresearch.org/short-reads/2024/02/15/among-young-adults-without-children-men-are-more-likely-than-women-to-say-they-want-to-be-parents-someday/",
      "note": "Intent is not behavior, so this is weighted below actual partnership.",
      "signal_role": "orientation",
      "domain": "embodied_connection",
      "correlation_cluster": "marriage_orientation",
      "evidence_tier": "B",
      "mapping_confidence": "high",
      "accountability_include": false,
      "effective_weight": 0.8182,
      "score": 54.3
    },
    {
      "id": "marriage_expectation_12th",
      "label": "12th graders expecting to marry someday",
      "group": "Embodied connection",
      "value": 67.0,
      "unit": "%",
      "year": 2023,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 50,
      "high_anchor": 85,
      "weight": 1.0,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Pew Research Center / Monitoring the Future",
      "source_url": "https://www.pewresearch.org/short-reads/2025/11/14/12th-grade-girls-are-less-likely-than-boys-to-say-they-want-to-get-married-someday/",
      "note": "Tracks expectation of durable pair-bonding among older adolescents.",
      "accountability_split": {
        "gooner": 0.4,
        "femoid": 0.6,
        "rationale": "Orientation signal with a reported sex gap: 2023 negative pressure is split from 26% of boys versus 39% of girls not saying they expect to marry. This is a directional proxy, not a blame allocation."
      },
      "signal_role": "orientation",
      "domain": "embodied_connection",
      "correlation_cluster": "marriage_orientation",
      "evidence_tier": "B",
      "mapping_confidence": "moderate",
      "accountability_include": true,
      "effective_weight": 0.6818,
      "score": 48.6
    },
    {
      "id": "ai_companion_monthly",
      "label": "Teens using AI companions at least monthly",
      "group": "Synthetic substitution",
      "value": 52.0,
      "unit": "%",
      "year": 2025,
      "region": "US",
      "direction": "lower_better",
      "low_anchor": 0,
      "high_anchor": 60,
      "weight": 1.1,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Common Sense Media",
      "source_url": "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions",
      "note": "Broad usage metric; not every use is romantic or isolating.",
      "accountability_split": {
        "gooner": 1.0,
        "femoid": 0.0,
        "rationale": "Synthetic relational substitution is mapped to the GOONER behavioral archetype regardless of user sex."
      },
      "signal_role": "exposure_proxy",
      "domain": "synthetic_substitution",
      "correlation_cluster": "ai_substitution",
      "evidence_tier": "B",
      "mapping_confidence": "moderate",
      "accountability_include": true,
      "effective_weight": 0.7857,
      "score": 13.3
    },
    {
      "id": "ai_equal_satisfaction",
      "label": "Teens rating AI companion talk as equally or more satisfying than real friends",
      "group": "Synthetic substitution",
      "value": 31.0,
      "unit": "%",
      "year": 2025,
      "region": "US",
      "direction": "lower_better",
      "low_anchor": 0,
      "high_anchor": 40,
      "weight": 1.0,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Common Sense Media",
      "source_url": "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions",
      "note": "Closer to substitution risk than simple trial or occasional use.",
      "accountability_split": {
        "gooner": 1.0,
        "femoid": 0.0,
        "rationale": "Synthetic relational substitution is mapped to the GOONER behavioral archetype regardless of user sex."
      },
      "signal_role": "exposure_proxy",
      "domain": "synthetic_substitution",
      "correlation_cluster": "ai_substitution",
      "evidence_tier": "B",
      "mapping_confidence": "moderate",
      "accountability_include": true,
      "effective_weight": 0.7143,
      "score": 22.5
    },
    {
      "id": "almost_constant_online",
      "label": "Teens online almost constantly",
      "group": "Synthetic substitution",
      "value": 46.0,
      "unit": "%",
      "year": 2024,
      "region": "US",
      "direction": "lower_better",
      "low_anchor": 10,
      "high_anchor": 50,
      "weight": 0.8,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Pew Research Center",
      "source_url": "https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/",
      "note": "A proxy for digital saturation, not a direct measure of misdirected eros.",
      "signal_role": "exposure_proxy",
      "domain": "synthetic_substitution",
      "correlation_cluster": "social_withdrawal",
      "evidence_tier": "B",
      "mapping_confidence": "low",
      "accountability_include": false,
      "effective_weight": 0.6095,
      "score": 10.0
    },
    {
      "id": "marriage_rate",
      "label": "Marriage rate",
      "group": "Generativity",
      "value": 6.1,
      "unit": "per 1,000",
      "year": 2023,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 4,
      "high_anchor": 10,
      "weight": 1.0,
      "include_in_index": true,
      "refresh_mode": "auto_page",
      "source_name": "CDC/NCHS",
      "source_url": "https://www.cdc.gov/nchs/fastats/marriage-divorce.htm",
      "note": "Annual vital-statistics signal. The updater can refresh this page value.",
      "signal_role": "outcome",
      "domain": "generativity",
      "correlation_cluster": "family_formation",
      "evidence_tier": "A",
      "mapping_confidence": "high",
      "accountability_include": false,
      "effective_weight": 0.9524,
      "score": 35.0
    },
    {
      "id": "general_fertility_rate",
      "label": "General fertility rate",
      "group": "Generativity",
      "value": 53.8,
      "unit": "births per 1,000 women 15\u201344",
      "year": 2024,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 40,
      "high_anchor": 80,
      "weight": 1.1,
      "include_in_index": true,
      "refresh_mode": "auto_page",
      "source_name": "CDC/NCHS",
      "source_url": "https://www.cdc.gov/nchs/nvss/births.htm",
      "note": "Generativity signal. It should not be read as a judgment of individual childlessness.",
      "signal_role": "outcome",
      "domain": "generativity",
      "correlation_cluster": "family_formation",
      "evidence_tier": "A",
      "mapping_confidence": "high",
      "accountability_include": false,
      "effective_weight": 1.0476,
      "score": 34.5
    },
    {
      "id": "youth_porn_exposure_uk",
      "label": "Youth exposed to online pornography before 18",
      "group": "Synthetic substitution",
      "value": 70.0,
      "unit": "%",
      "year": 2025,
      "region": "UK",
      "direction": "lower_better",
      "low_anchor": 20,
      "high_anchor": 80,
      "weight": 1.0,
      "include_in_index": false,
      "refresh_mode": "snapshot",
      "source_name": "Children's Commissioner for England",
      "source_url": "https://www.childrenscommissioner.gov.uk/news-and-blogs/press-notice-children-see-violent-pornography-by-accident-via-social-media-and-as-young-as-six-new-research-from-the-childrens-commissioner-reveals/",
      "note": "Shown as international context but excluded from the US headline composite.",
      "signal_role": "context_only",
      "domain": "synthetic_substitution",
      "correlation_cluster": "porn_exposure",
      "evidence_tier": "B",
      "mapping_confidence": "low",
      "accountability_include": false,
      "effective_weight": 1.0,
      "score": 16.7
    },
    {
      "id": "anti_porn_restriction_support",
      "label": "Young men favoring harder access to online pornography",
      "group": "Countercurrent",
      "value": 60.0,
      "unit": "%",
      "year": 2025,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 30,
      "high_anchor": 75,
      "weight": 0.5,
      "include_in_index": false,
      "refresh_mode": "snapshot",
      "source_name": "Survey Center on American Life",
      "source_url": "https://www.americansurveycenter.org/newsletter/our-most-noteworthy-survey-findings-of-2025/",
      "note": "Attitude indicator shown as a possible cultural antibody, not an outcome metric.",
      "signal_role": "countercurrent",
      "domain": "synthetic_substitution",
      "correlation_cluster": "porn_exposure",
      "evidence_tier": "B",
      "mapping_confidence": "low",
      "accountability_include": false,
      "effective_weight": 0.5,
      "score": 66.7
    },
    {
      "id": "socializing_average_day",
      "label": "People socializing or communicating on an average day",
      "group": "Embodied connection",
      "value": 30.0,
      "unit": "%",
      "year": 2025,
      "region": "US",
      "direction": "higher_better",
      "low_anchor": 25,
      "high_anchor": 45,
      "weight": 1.3,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "U.S. Bureau of Labor Statistics, American Time Use Survey",
      "source_url": "https://www.bls.gov/news.release/atus.nr0.htm",
      "note": "Direct embodied-socialization outcome. BLS reports 30% in 2025 versus 38% in 2015. The 2025 release also carries a shutdown-related diary-gap and reweighting caveat; this outcome stays neutral in the accountability meter.",
      "signal_role": "outcome",
      "domain": "embodied_connection",
      "correlation_cluster": "social_withdrawal",
      "evidence_tier": "A",
      "mapping_confidence": "high",
      "accountability_include": false,
      "effective_weight": 0.9905,
      "score": 25.0
    },
    {
      "id": "unwanted_sexual_content_online_dating",
      "label": "Online daters receiving unwanted sexually explicit content",
      "group": "Relational reciprocity",
      "value": 38.0,
      "unit": "%",
      "year": 2022,
      "region": "US",
      "direction": "lower_better",
      "low_anchor": 10,
      "high_anchor": 50,
      "weight": 0.9,
      "include_in_index": true,
      "refresh_mode": "snapshot",
      "source_name": "Pew Research Center",
      "source_url": "https://www.pewresearch.org/internet/2023/02/02/from-looking-for-love-to-swiping-the-field-online-dating-in-the-u-s/",
      "note": "Direct adverse-experience signal among people who have used online dating. This is victim-experience prevalence, not perpetrator prevalence; one actor can affect multiple users. Pew also reports 30% experienced continued contact after saying they were not interested, so the two correlated harms are not double-counted here.",
      "signal_role": "impairment",
      "domain": "relational_reciprocity",
      "correlation_cluster": "dating_boundary_failure",
      "evidence_tier": "B",
      "mapping_confidence": "high",
      "accountability_include": true,
      "accountability_split": {
        "gooner": 1.0,
        "femoid": 0.0,
        "rationale": "Unsolicited sexual content is mapped to desire severed from reciprocal relationship. The bucket describes the behavior, not the sex of the actor."
      },
      "effective_weight": 0.9,
      "score": 30.0
    }
  ],
  "series": {
    "young_adult_partnered_pct": [
      {
        "year": 2015,
        "value": 33.46
      },
      {
        "year": 2016,
        "value": 32.95
      },
      {
        "year": 2017,
        "value": 33.05
      },
      {
        "year": 2018,
        "value": 33.51
      },
      {
        "year": 2019,
        "value": 33.54
      },
      {
        "year": 2021,
        "value": 35.46
      },
      {
        "year": 2022,
        "value": 36.03
      },
      {
        "year": 2023,
        "value": 35.91
      },
      {
        "year": 2024,
        "value": 35.31
      }
    ],
    "young_adult_living_alone_pct": [
      {
        "year": 2015,
        "value": 7.21
      },
      {
        "year": 2016,
        "value": 7.31
      },
      {
        "year": 2017,
        "value": 7.43
      },
      {
        "year": 2018,
        "value": 7.62
      },
      {
        "year": 2019,
        "value": 7.96
      },
      {
        "year": 2021,
        "value": 9.01
      },
      {
        "year": 2022,
        "value": 9.51
      },
      {
        "year": 2023,
        "value": 9.96
      },
      {
        "year": 2024,
        "value": 9.8
      }
    ],
    "us_total_fertility_rate": [
      {
        "year": 1960,
        "value": 3.654
      },
      {
        "year": 1961,
        "value": 3.62
      },
      {
        "year": 1962,
        "value": 3.461
      },
      {
        "year": 1963,
        "value": 3.319
      },
      {
        "year": 1964,
        "value": 3.19
      },
      {
        "year": 1965,
        "value": 2.913
      },
      {
        "year": 1966,
        "value": 2.721
      },
      {
        "year": 1967,
        "value": 2.558
      },
      {
        "year": 1968,
        "value": 2.464
      },
      {
        "year": 1969,
        "value": 2.456
      },
      {
        "year": 1970,
        "value": 2.48
      },
      {
        "year": 1971,
        "value": 2.266
      },
      {
        "year": 1972,
        "value": 2.01
      },
      {
        "year": 1973,
        "value": 1.879
      },
      {
        "year": 1974,
        "value": 1.835
      },
      {
        "year": 1975,
        "value": 1.774
      },
      {
        "year": 1976,
        "value": 1.738
      },
      {
        "year": 1977,
        "value": 1.79
      },
      {
        "year": 1978,
        "value": 1.76
      },
      {
        "year": 1979,
        "value": 1.808
      },
      {
        "year": 1980,
        "value": 1.839
      },
      {
        "year": 1981,
        "value": 1.812
      },
      {
        "year": 1982,
        "value": 1.827
      },
      {
        "year": 1983,
        "value": 1.799
      },
      {
        "year": 1984,
        "value": 1.806
      },
      {
        "year": 1985,
        "value": 1.844
      },
      {
        "year": 1986,
        "value": 1.837
      },
      {
        "year": 1987,
        "value": 1.872
      },
      {
        "year": 1988,
        "value": 1.934
      },
      {
        "year": 1989,
        "value": 2.014
      },
      {
        "year": 1990,
        "value": 2.081
      },
      {
        "year": 1991,
        "value": 2.062
      },
      {
        "year": 1992,
        "value": 2.046
      },
      {
        "year": 1993,
        "value": 2.019
      },
      {
        "year": 1994,
        "value": 2.002
      },
      {
        "year": 1995,
        "value": 1.978
      },
      {
        "year": 1996,
        "value": 1.976
      },
      {
        "year": 1997,
        "value": 1.971
      },
      {
        "year": 1998,
        "value": 1.999
      },
      {
        "year": 1999,
        "value": 2.007
      },
      {
        "year": 2000,
        "value": 2.056
      },
      {
        "year": 2001,
        "value": 2.03
      },
      {
        "year": 2002,
        "value": 2.021
      },
      {
        "year": 2003,
        "value": 2.047
      },
      {
        "year": 2004,
        "value": 2.051
      },
      {
        "year": 2005,
        "value": 2.057
      },
      {
        "year": 2006,
        "value": 2.108
      },
      {
        "year": 2007,
        "value": 2.12
      },
      {
        "year": 2008,
        "value": 2.072
      },
      {
        "year": 2009,
        "value": 2.002
      },
      {
        "year": 2010,
        "value": 1.931
      },
      {
        "year": 2011,
        "value": 1.895
      },
      {
        "year": 2012,
        "value": 1.881
      },
      {
        "year": 2013,
        "value": 1.857
      },
      {
        "year": 2014,
        "value": 1.863
      },
      {
        "year": 2015,
        "value": 1.843
      },
      {
        "year": 2016,
        "value": 1.821
      },
      {
        "year": 2017,
        "value": 1.766
      },
      {
        "year": 2018,
        "value": 1.73
      },
      {
        "year": 2019,
        "value": 1.706
      },
      {
        "year": 2020,
        "value": 1.641
      },
      {
        "year": 2021,
        "value": 1.664
      },
      {
        "year": 2022,
        "value": 1.657
      },
      {
        "year": 2023,
        "value": 1.617
      },
      {
        "year": 2024,
        "value": 1.627
      }
    ]
  },
  "version": "1.0.0",
  "methodology": {
    "architecture_version": "signal-architecture-v1.1",
    "signal_roles": {
      "outcome": "Observed state of embodied connection, relationship quality, family formation, or social life.",
      "orientation": "Stated desire or expectation that may precede behavior but is not itself an outcome.",
      "impairment": "Direct harm, loss of control, relationship interference, or adverse experience.",
      "exposure_proxy": "Population exposure or use that may create pressure but does not establish pathology.",
      "mechanism": "Evidence about a plausible behavioral process; usually not a national trend by itself.",
      "context_only": "Relevant context shown without headline weight.",
      "countercurrent": "Potential protective attitude or behavioral countertrend shown without headline weight."
    },
    "evidence_tiers": {
      "A": "Recurring nationally representative government or similarly rigorous national data.",
      "B": "High-quality nationally representative snapshot or slower-moving survey anchor.",
      "C": "Peer-reviewed experimental, longitudinal, or observational mechanism evidence.",
      "WATCHLIST": "Plausible and relevant, but not strong or repeatable enough to score."
    },
    "correlation_cluster_caps": {
      "embodied_partnership": 1.5,
      "marriage_orientation": 1.5,
      "ai_substitution": 1.5,
      "social_withdrawal": 1.6,
      "family_formation": 2.0,
      "dating_boundary_failure": 1.0,
      "porn_exposure": 1.0
    },
    "accountability_rule": "Only metrics explicitly marked accountability_include participate. Each archetype receives an independently normalized weighted severity score after signal-role, evidence-tier, and mapping-confidence modifiers. The public split compares those side severities rather than dividing one shared pressure denominator. Population outcomes remain neutral unless a defensible directional behavioral mapping exists. Comparisons are provisional until each side has at least two independent clusters and one impairment signal.",
    "accountability_role_modifiers": {
      "impairment": 1.0,
      "orientation": 0.6,
      "exposure_proxy": 0.4,
      "mechanism": 0.0,
      "outcome": 0.0,
      "context_only": 0.0,
      "countercurrent": 0.0
    },
    "accountability_evidence_modifiers": {
      "A": 1.0,
      "B": 0.85,
      "C": 0.65,
      "WATCHLIST": 0.0
    },
    "accountability_mapping_modifiers": {
      "high": 1.0,
      "moderate": 0.75,
      "low": 0.5
    },
    "accountability_breadth_requirements": {
      "min_independent_clusters_per_side": 2,
      "require_impairment_signal": true
    }
  },
  "research_pipeline": [
    {
      "id": "gss_relationship_quality",
      "status": "pending_weighted_extraction",
      "candidate_variables": [
        "HAPMAR",
        "HAPCOHAB"
      ],
      "signal_role": "outcome",
      "domain": "embodied_connection",
      "evidence_tier": "A",
      "source_name": "General Social Survey, 2024 Release 3",
      "source_url": "https://gss.norc.org/get-the-data.html",
      "reason": "Requires WTSSPS-weighted extraction and a documented rule for combining married and cohabiting respondents. Raw codebook counts are intentionally not used as national estimates."
    },
    {
      "id": "gss_porn_frequency",
      "status": "pending_weighted_extraction",
      "candidate_variables": [
        "XMOVIEY"
      ],
      "signal_role": "exposure_proxy",
      "domain": "compulsive_novelty",
      "evidence_tier": "A",
      "source_name": "General Social Survey, 2024 Release 3",
      "source_url": "https://gss.norc.org/get-the-data.html",
      "reason": "Candidate thresholds include weekly-or-more and a graded frequency score. Frequency will remain an exposure proxy, not a diagnosis of problematic use."
    },
    {
      "id": "gss_sexual_frequency",
      "status": "analysis_before_scoring",
      "candidate_variables": [
        "SEXFREQ"
      ],
      "signal_role": "outcome",
      "domain": "embodied_connection",
      "evidence_tier": "A",
      "source_name": "General Social Survey, 2024 Release 3",
      "source_url": "https://gss.norc.org/get-the-data.html",
      "reason": "Sexual inactivity is not automatically dysfunction. Analyze by age and relationship status before deciding whether any aggregate belongs in the headline index."
    }
  ],
  "research_watchlist": [
    {
      "id": "fantasy_media_displacement",
      "label": "Fantasy-romance and erotic-fiction displacement",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Sales or readership measure exposure, not impairment or displacement of real relationships."
    },
    {
      "id": "deceptive_self_presentation",
      "label": "Deceptive filters and strategic dating-profile presentation",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Relevant to trust and mate-market distortion, but no clean recurring national series currently supports headline weight."
    },
    {
      "id": "breadcrumbing_benching",
      "label": "Breadcrumbing, benching, and attention extraction",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Conceptually strong reciprocity failure; prevalence evidence is not yet nationally repeatable enough for scoring."
    },
    {
      "id": "dating_choice_overload",
      "label": "Catalogization and dating choice overload",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "National surveys and experiments support the mechanism, but no recurring impairment-sensitive national series currently earns score weight."
    },
    {
      "id": "relational_aggression",
      "label": "Relationship-specific relational aggression",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Real behavioral literature, but adult pair-bond relevance and sex attribution are too heterogeneous for a clean dashboard metric."
    },
    {
      "id": "coparental_gatekeeping",
      "label": "Coparental gatekeeping",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Family-cohesion relevance is high; causal interpretation and repeatable national measurement are not clean enough for scoring."
    },
    {
      "id": "financial_infidelity",
      "label": "Financial infidelity and secret relationship-relevant behavior",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "A clear reciprocity concern, but existing measurement is not yet suitable as a recurring national EHI series."
    },
    {
      "id": "parasocial_monetization",
      "label": "Paid parasocial and erotic attention markets",
      "evidence_tier": "WATCHLIST",
      "reason_not_scored": "Revenue and account counts do not establish personal impairment or displacement of embodied relationships."
    }
  ],
  "goon": {
    "mode": "live",
    "signal_kind": "stratified_timeseries",
    "method_version": "stratified-v2",
    "label": "The Gooning Index",
    "ticker": "GOON",
    "description": "One category-balanced daily digital-pressure signal derived from a private stratified basket and Tranco rank histories. Absolute popularity dominates; a smaller own-history trend term and conservative novelty/intensity/interaction/extremity weighting add resolution. The pressure line shows aggregate GOON movement; the muted ribbon visualizes the middle 50% of adjusted domain pressure. Higher is worse for Eros; individual domains and ranks are not published.",
    "source_name": "Tranco",
    "source_url": "https://tranco-list.eu/api_documentation",
    "last_updated": "2026-07-15T00:00:00Z",
    "basket_size": 21,
    "domains_reporting": 21,
    "categories_reporting": 4,
    "category_targets": {
      "mainstream_tube": {
        "label": "Mainstream tube/video",
        "share": 0.45
      },
      "illustrated_niche": {
        "label": "Illustrated fandom / niche",
        "share": 0.2
      },
      "hentai_animation": {
        "label": "Hentai / animation",
        "share": 0.15
      },
      "interactive": {
        "label": "Live / interactive",
        "share": 0.15
      }
    },
    "series": [
      {
        "timestamp": "2026-05-25T00:00:00Z",
        "open": 49.71,
        "high": 53.35,
        "low": 46.26,
        "close": 49.71,
        "value": 49.71,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-26T00:00:00Z",
        "open": 49.71,
        "high": 53.35,
        "low": 46.28,
        "close": 49.69,
        "value": 49.69,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-27T00:00:00Z",
        "open": 49.69,
        "high": 53.38,
        "low": 46.28,
        "close": 49.65,
        "value": 49.65,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-28T00:00:00Z",
        "open": 49.65,
        "high": 53.4,
        "low": 46.29,
        "close": 49.65,
        "value": 49.65,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-29T00:00:00Z",
        "open": 49.65,
        "high": 53.28,
        "low": 46.28,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-30T00:00:00Z",
        "open": 49.66,
        "high": 53.03,
        "low": 46.3,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-05-31T00:00:00Z",
        "open": 49.66,
        "high": 52.83,
        "low": 46.32,
        "close": 49.64,
        "value": 49.64,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-01T00:00:00Z",
        "open": 49.73,
        "high": 52.73,
        "low": 47.02,
        "close": 49.73,
        "value": 49.73,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-02T00:00:00Z",
        "open": 49.73,
        "high": 52.71,
        "low": 47.07,
        "close": 49.74,
        "value": 49.74,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-03T00:00:00Z",
        "open": 49.74,
        "high": 52.76,
        "low": 47.09,
        "close": 49.78,
        "value": 49.78,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-04T00:00:00Z",
        "open": 49.78,
        "high": 52.68,
        "low": 47.1,
        "close": 49.84,
        "value": 49.84,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-05T00:00:00Z",
        "open": 49.84,
        "high": 52.71,
        "low": 47.14,
        "close": 49.88,
        "value": 49.88,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-06T00:00:00Z",
        "open": 49.88,
        "high": 52.76,
        "low": 47.22,
        "close": 49.92,
        "value": 49.92,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-07T00:00:00Z",
        "open": 49.92,
        "high": 52.69,
        "low": 47.25,
        "close": 49.94,
        "value": 49.94,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-08T00:00:00Z",
        "open": 49.98,
        "high": 52.76,
        "low": 47.89,
        "close": 49.98,
        "value": 49.98,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-09T00:00:00Z",
        "open": 49.98,
        "high": 52.77,
        "low": 47.41,
        "close": 49.95,
        "value": 49.95,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-10T00:00:00Z",
        "open": 49.95,
        "high": 52.69,
        "low": 45.76,
        "close": 49.81,
        "value": 49.81,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-11T00:00:00Z",
        "open": 49.81,
        "high": 52.7,
        "low": 45.74,
        "close": 49.77,
        "value": 49.77,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-12T00:00:00Z",
        "open": 49.77,
        "high": 52.77,
        "low": 45.7,
        "close": 49.73,
        "value": 49.73,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-13T00:00:00Z",
        "open": 49.73,
        "high": 52.77,
        "low": 45.67,
        "close": 49.68,
        "value": 49.68,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-14T00:00:00Z",
        "open": 49.68,
        "high": 52.75,
        "low": 45.55,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-15T00:00:00Z",
        "open": 49.66,
        "high": 52.8,
        "low": 45.56,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-16T00:00:00Z",
        "open": 49.66,
        "high": 52.74,
        "low": 45.53,
        "close": 49.63,
        "value": 49.63,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-17T00:00:00Z",
        "open": 49.63,
        "high": 52.82,
        "low": 45.53,
        "close": 49.64,
        "value": 49.64,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-18T00:00:00Z",
        "open": 49.64,
        "high": 52.82,
        "low": 45.35,
        "close": 49.67,
        "value": 49.67,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-19T00:00:00Z",
        "open": 49.67,
        "high": 52.83,
        "low": 45.35,
        "close": 49.67,
        "value": 49.67,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-20T00:00:00Z",
        "open": 49.67,
        "high": 52.85,
        "low": 45.38,
        "close": 49.67,
        "value": 49.67,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-21T00:00:00Z",
        "open": 49.67,
        "high": 52.99,
        "low": 45.4,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-22T00:00:00Z",
        "open": 49.66,
        "high": 52.93,
        "low": 45.33,
        "close": 49.66,
        "value": 49.66,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-23T00:00:00Z",
        "open": 49.66,
        "high": 52.88,
        "low": 45.15,
        "close": 49.65,
        "value": 49.65,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-24T00:00:00Z",
        "open": 49.65,
        "high": 52.8,
        "low": 44.91,
        "close": 49.62,
        "value": 49.62,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-25T00:00:00Z",
        "open": 49.62,
        "high": 52.83,
        "low": 44.7,
        "close": 49.57,
        "value": 49.57,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-26T00:00:00Z",
        "open": 49.57,
        "high": 52.69,
        "low": 44.45,
        "close": 49.58,
        "value": 49.58,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-27T00:00:00Z",
        "open": 49.58,
        "high": 52.72,
        "low": 44.22,
        "close": 49.56,
        "value": 49.56,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-28T00:00:00Z",
        "open": 49.56,
        "high": 52.7,
        "low": 44.07,
        "close": 49.54,
        "value": 49.54,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-29T00:00:00Z",
        "open": 49.54,
        "high": 52.74,
        "low": 44.09,
        "close": 49.57,
        "value": 49.57,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-06-30T00:00:00Z",
        "open": 49.57,
        "high": 52.81,
        "low": 44.06,
        "close": 49.59,
        "value": 49.59,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-01T00:00:00Z",
        "open": 49.59,
        "high": 52.86,
        "low": 44.12,
        "close": 49.56,
        "value": 49.56,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-02T00:00:00Z",
        "open": 49.56,
        "high": 52.83,
        "low": 44.16,
        "close": 49.54,
        "value": 49.54,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-03T00:00:00Z",
        "open": 49.54,
        "high": 52.83,
        "low": 44.18,
        "close": 49.51,
        "value": 49.51,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-04T00:00:00Z",
        "open": 49.51,
        "high": 52.86,
        "low": 44.2,
        "close": 49.49,
        "value": 49.49,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-05T00:00:00Z",
        "open": 49.49,
        "high": 52.92,
        "low": 44.06,
        "close": 49.45,
        "value": 49.45,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-06T00:00:00Z",
        "open": 49.45,
        "high": 52.84,
        "low": 44.18,
        "close": 49.48,
        "value": 49.48,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-07T00:00:00Z",
        "open": 49.48,
        "high": 52.86,
        "low": 44.2,
        "close": 49.45,
        "value": 49.45,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-08T00:00:00Z",
        "open": 49.45,
        "high": 52.81,
        "low": 44.18,
        "close": 49.45,
        "value": 49.45,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-09T00:00:00Z",
        "open": 49.45,
        "high": 52.86,
        "low": 44.2,
        "close": 49.53,
        "value": 49.53,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-10T00:00:00Z",
        "open": 49.53,
        "high": 52.92,
        "low": 44.18,
        "close": 49.5,
        "value": 49.5,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-11T00:00:00Z",
        "open": 49.5,
        "high": 52.89,
        "low": 44.18,
        "close": 49.53,
        "value": 49.53,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-12T00:00:00Z",
        "open": 49.53,
        "high": 52.86,
        "low": 44.19,
        "close": 49.55,
        "value": 49.55,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-13T00:00:00Z",
        "open": 49.55,
        "high": 52.76,
        "low": 44.2,
        "close": 49.57,
        "value": 49.57,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-14T00:00:00Z",
        "open": 49.57,
        "high": 52.78,
        "low": 44.14,
        "close": 49.51,
        "value": 49.51,
        "coverage": 21,
        "category_coverage": 4
      },
      {
        "timestamp": "2026-07-15T00:00:00Z",
        "open": 49.51,
        "high": 52.84,
        "low": 44.04,
        "close": 49.56,
        "value": 49.56,
        "coverage": 21,
        "category_coverage": 4
      }
    ],
    "value": 49.6,
    "change_24h": 0.1
  },
  "refresh_errors": [
    "CDC marriage rate: HTTP Error 403: Forbidden",
    "CDC fertility rate: HTTP Error 403: Forbidden"
  ],
  "correlation_firewall": {
    "method_version": "proportional-cluster-cap-v1",
    "clusters": {
      "ai_substitution": {
        "raw_weight": 2.1,
        "cap": 1.5,
        "scale": 0.7143
      },
      "dating_boundary_failure": {
        "raw_weight": 0.9,
        "cap": 1.0,
        "scale": 1.0
      },
      "embodied_partnership": {
        "raw_weight": 1.5,
        "cap": 1.5,
        "scale": 1.0
      },
      "family_formation": {
        "raw_weight": 2.1,
        "cap": 2.0,
        "scale": 0.9524
      },
      "marriage_orientation": {
        "raw_weight": 2.2,
        "cap": 1.5,
        "scale": 0.6818
      },
      "social_withdrawal": {
        "raw_weight": 2.1,
        "cap": 1.6,
        "scale": 0.7619
      }
    }
  },
  "index": 32.4,
  "group_scores": {
    "Embodied connection": 40.7,
    "Synthetic substitution": 15.5,
    "Generativity": 34.7,
    "Relational reciprocity": 30.0
  },
  "accountability_meter": {
    "gooner": 58.4,
    "femoid": 41.6,
    "gooner_severity": 72.2,
    "femoid_severity": 51.4,
    "gooner_capacity": 1.2518,
    "femoid_capacity": 0.1565,
    "raw_directional_pressure": 221.52,
    "adjusted_directional_pressure": 98.44,
    "total_ehi_pressure": 608.58,
    "coverage_pct": 36.4,
    "adjusted_coverage_pct": 16.2,
    "comparison_status": "provisional",
    "status_note": "PROVISIONAL \u00b7 evidence basket underfilled (FEMOID: 1 independent cluster, no impairment signal).",
    "evidence_breadth": {
      "gooner": {
        "independent_clusters": 3,
        "clusters": [
          "ai_substitution",
          "dating_boundary_failure",
          "marriage_orientation"
        ],
        "has_impairment_signal": true,
        "sufficient": true
      },
      "femoid": {
        "independent_clusters": 1,
        "clusters": [
          "marriage_orientation"
        ],
        "has_impairment_signal": false,
        "sufficient": false
      }
    },
    "method_version": "side-normalized-severity-v1",
    "note": "Disclaimer: some bitches be goonin, and some dudes be shallow AF.",
    "coverage_note": "Only behavior-attributable signals vote here; EHI outcomes stay neutral.",
    "contributors": [
      {
        "metric_id": "unwanted_sexual_content_online_dating",
        "label": "Online daters receiving unwanted sexually explicit content",
        "score": 30.0,
        "severity_pct": 70.0,
        "effective_weight": 0.9,
        "accountability_weight": 0.765,
        "role_modifier": 1.0,
        "evidence_modifier": 0.85,
        "mapping_modifier": 1.0,
        "gooner_pressure": 53.55,
        "femoid_pressure": 0.0,
        "signal_role": "impairment",
        "evidence_tier": "B",
        "mapping_confidence": "high",
        "correlation_cluster": "dating_boundary_failure",
        "rationale": "Unsolicited sexual content is mapped to desire severed from reciprocal relationship. The bucket describes the behavior, not the sex of the actor."
      },
      {
        "metric_id": "marriage_expectation_12th",
        "label": "12th graders expecting to marry someday",
        "score": 48.6,
        "severity_pct": 51.4,
        "effective_weight": 0.6818,
        "accountability_weight": 0.2608,
        "role_modifier": 0.6,
        "evidence_modifier": 0.85,
        "mapping_modifier": 0.75,
        "gooner_pressure": 5.36,
        "femoid_pressure": 8.04,
        "signal_role": "orientation",
        "evidence_tier": "B",
        "mapping_confidence": "moderate",
        "correlation_cluster": "marriage_orientation",
        "rationale": "Orientation signal with a reported sex gap: 2023 negative pressure is split from 26% of boys versus 39% of girls not saying they expect to marry. This is a directional proxy, not a blame allocation."
      },
      {
        "metric_id": "ai_companion_monthly",
        "label": "Teens using AI companions at least monthly",
        "score": 13.3,
        "severity_pct": 86.7,
        "effective_weight": 0.7857,
        "accountability_weight": 0.2004,
        "role_modifier": 0.4,
        "evidence_modifier": 0.85,
        "mapping_modifier": 0.75,
        "gooner_pressure": 17.37,
        "femoid_pressure": 0.0,
        "signal_role": "exposure_proxy",
        "evidence_tier": "B",
        "mapping_confidence": "moderate",
        "correlation_cluster": "ai_substitution",
        "rationale": "Synthetic relational substitution is mapped to the GOONER behavioral archetype regardless of user sex."
      },
      {
        "metric_id": "ai_equal_satisfaction",
        "label": "Teens rating AI companion talk as equally or more satisfying than real friends",
        "score": 22.5,
        "severity_pct": 77.5,
        "effective_weight": 0.7143,
        "accountability_weight": 0.1821,
        "role_modifier": 0.4,
        "evidence_modifier": 0.85,
        "mapping_modifier": 0.75,
        "gooner_pressure": 14.12,
        "femoid_pressure": 0.0,
        "signal_role": "exposure_proxy",
        "evidence_tier": "B",
        "mapping_confidence": "moderate",
        "correlation_cluster": "ai_substitution",
        "rationale": "Synthetic relational substitution is mapped to the GOONER behavioral archetype regardless of user sex."
      }
    ]
  },
  "advice": {
    "engine_note": "Actions are selected from current index signals; evidence links support the behavioral rationale, not the metaphysical interpretation.",
    "men": [
      {
        "priority": 84.7,
        "title": "LEAVE THE CAVE.",
        "action": "Put two recurring, in-person social commitments on your calendar. Screens do not count.",
        "why": "46% of teens report being online almost constantly; 52% use AI companions at least monthly, and 31% rate those conversations as equally or more satisfying than talk with real friends.",
        "evidence_note": "Large meta-analyses link stronger social relationships with substantially better survival and health outcomes. The practical move is boring and powerful: create recurring embodied contact.",
        "sources": [
          {
            "label": "Meta-analysis: social relationships & mortality",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2910600/"
          },
          {
            "label": "Index source: teen AI companions",
            "url": "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions"
          }
        ]
      },
      {
        "priority": 84.5,
        "title": "STOP GOONING.",
        "action": "If porn is replacing sex, courtship, sleep, work, or your ability to want an ordinary woman, kill the loop.",
        "why": "Synthetic substitution scores 15.5/100. The countercurrent metric also finds 60% of young men favor harder access to online porn.",
        "evidence_note": "The clean claim is not \u201cporn automatically causes ED.\u201d A meta-analysis found pornography use associated with lower interpersonal satisfaction, with significant sex-stratified results for men; problematic use is also studied separately from ordinary use.",
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
      }
    ],
    "women": [
      {
        "priority": 66.5,
        "title": "STOP SHOPPING. START CHOOSING.",
        "action": "Cap the swipe session. Give one plausible man a real conversation or date before reopening the catalogue.",
        "why": "Embodied connection scores 40.7/100, while 69% of unmarried young adults still say they want marriage. Desire for union is surviving better than actual connection.",
        "evidence_note": "Online-dating experiments found that repeated profile evaluation can create a rejection mind-set; in one consequential study, women\u2019s match probability fell as the task progressed.",
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
        "priority": 60.5,
        "title": "DATE CHARACTER, NOT DANGER.",
        "action": "Charisma is not character. Watch how he handles frustration, boundaries, responsibility, and boring Tuesdays.",
        "why": "Embodied connection scores 40.7/100 and generativity 34.7/100. The index is weak where durable pair-bonding and life-building should show up.",
        "evidence_note": "Couple research links Dark Triad traits with relationship satisfaction outcomes, while longitudinal work finds perceived partner responsiveness\u2014feeling understood, valued, and cared for\u2014predicts later eudaimonic well-being.",
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
  },
  "ehi_history": [
    {
      "timestamp": "2015-07-01T00:00:00Z",
      "value": 50.8,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 33.46,
        "us_total_fertility_rate": 1.843,
        "marriage_rate": 6.9,
        "almost_constant_online": 24.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2016-07-01T00:00:00Z",
      "value": 46.6,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 32.95,
        "us_total_fertility_rate": 1.821,
        "marriage_rate": 7.0,
        "almost_constant_online": 31.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2017-07-01T00:00:00Z",
      "value": 41.8,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 33.05,
        "us_total_fertility_rate": 1.766,
        "marriage_rate": 6.9,
        "almost_constant_online": 38.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2018-07-01T00:00:00Z",
      "value": 37.0,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 33.51,
        "us_total_fertility_rate": 1.73,
        "marriage_rate": 6.5,
        "almost_constant_online": 45.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2019-07-01T00:00:00Z",
      "value": 34.8,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 33.54,
        "us_total_fertility_rate": 1.706,
        "marriage_rate": 6.1,
        "almost_constant_online": 45.25
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2020-07-01T00:00:00Z",
      "value": 30.9,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 34.5,
        "us_total_fertility_rate": 1.641,
        "marriage_rate": 5.1,
        "almost_constant_online": 45.5
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2021-07-01T00:00:00Z",
      "value": 36.4,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 35.46,
        "us_total_fertility_rate": 1.664,
        "marriage_rate": 6.0,
        "almost_constant_online": 45.75
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2022-07-01T00:00:00Z",
      "value": 37.9,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 36.03,
        "us_total_fertility_rate": 1.657,
        "marriage_rate": 6.2,
        "almost_constant_online": 46.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2023-07-01T00:00:00Z",
      "value": 36.3,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 35.91,
        "us_total_fertility_rate": 1.617,
        "marriage_rate": 6.1,
        "almost_constant_online": 46.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2024-07-01T00:00:00Z",
      "value": 35.5,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 35.31,
        "us_total_fertility_rate": 1.627,
        "marriage_rate": 6.1,
        "almost_constant_online": 46.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2025-07-01T00:00:00Z",
      "value": 38.2,
      "kind": "backcast",
      "coverage": 1.0,
      "components": [
        "young_adult_partnered_pct",
        "us_total_fertility_rate",
        "marriage_rate",
        "almost_constant_online"
      ],
      "component_values": {
        "young_adult_partnered_pct": 35.31,
        "us_total_fertility_rate": 1.627,
        "marriage_rate": 6.1,
        "almost_constant_online": 40.0
      },
      "method_version": "ehi-backcast-v1"
    },
    {
      "timestamp": "2026-07-05T23:11:20.721283+00:00",
      "value": 33.5,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v1"
    },
    {
      "timestamp": "2026-07-06T23:39:37.124237+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-07T17:01:13.483455+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-08T16:07:00.412941+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-09T17:09:04.482740+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-10T16:36:48.769368+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-11T11:35:14.785255+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-12T11:47:40.872857+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-13T17:01:23.981762+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-14T12:51:45.352694+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-15T12:58:35.187844+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    },
    {
      "timestamp": "2026-07-16T13:08:08.914297+00:00",
      "value": 32.4,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v2"
    }
  ],
  "ehi_history_meta": {
    "mode": "backcast_plus_observed",
    "method_version": "ehi-backcast-v1",
    "note": "Annual reconstructed points use a fixed four-signal core: young-adult partnering, total fertility, national marriage rate, and teen almost-constant internet use. Current observed snapshots use the full headline EHI basket. Backcast rows publish coverage and components and should not be read as historical observations of metrics that did not yet exist. Current observed snapshots use the current correlation firewall.",
    "sources": [
      {
        "label": "U.S. Census Bureau ACS living-arrangements series",
        "url": "https://api.census.gov/data.html"
      },
      {
        "label": "World Bank total fertility rate",
        "url": "https://api.worldbank.org/"
      },
      {
        "label": "CDC/NCHS national marriage and divorce rates",
        "url": "https://www.cdc.gov/nchs/fastats/marriage-divorce.htm"
      },
      {
        "label": "Pew Research Center teen internet-use survey waves",
        "url": "https://www.pewresearch.org/internet/"
      }
    ]
  }
};
