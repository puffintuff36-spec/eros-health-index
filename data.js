window.EROS_DATA = {
  "generated_at": "2026-07-05T23:00:08.641138+00:00",
  "title": "Eros Health Index",
  "subtitle": "A transparent prototype for tracking embodied connection, synthetic substitution, and generativity.",
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
      "score": 66.7
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
  "goon": {
    "mode": "demo",
    "label": "The Gooning Index",
    "ticker": "GOON",
    "description": "Demo movement only. Add a private stratified goon_basket.txt for observed category-balanced daily pressure.",
    "source_name": "Tranco (demo until basket is configured)",
    "source_url": "https://tranco-list.eu/",
    "last_updated": null,
    "series": [
      {
        "timestamp": "2026-06-06T00:00:00+00:00",
        "open": 58.0,
        "high": 61.0,
        "low": 55.3,
        "close": 58.0,
        "value": 58.0
      },
      {
        "timestamp": "2026-06-07T00:00:00+00:00",
        "open": 58.0,
        "high": 62.7,
        "low": 54.98,
        "close": 59.35,
        "value": 59.35
      },
      {
        "timestamp": "2026-06-08T00:00:00+00:00",
        "open": 59.35,
        "high": 64.07,
        "low": 56.08,
        "close": 60.44,
        "value": 60.44
      },
      {
        "timestamp": "2026-06-09T00:00:00+00:00",
        "open": 60.44,
        "high": 64.88,
        "low": 57.04,
        "close": 61.1,
        "value": 61.1
      },
      {
        "timestamp": "2026-06-10T00:00:00+00:00",
        "open": 61.1,
        "high": 65.04,
        "low": 57.7,
        "close": 61.27,
        "value": 61.27
      },
      {
        "timestamp": "2026-06-11T00:00:00+00:00",
        "open": 61.27,
        "high": 64.88,
        "low": 57.76,
        "close": 61.01,
        "value": 61.01
      },
      {
        "timestamp": "2026-06-12T00:00:00+00:00",
        "open": 61.01,
        "high": 64.33,
        "low": 57.5,
        "close": 60.49,
        "value": 60.49
      },
      {
        "timestamp": "2026-06-13T00:00:00+00:00",
        "open": 60.49,
        "high": 63.46,
        "low": 57.26,
        "close": 59.94,
        "value": 59.94
      },
      {
        "timestamp": "2026-06-14T00:00:00+00:00",
        "open": 59.94,
        "high": 62.56,
        "low": 57.15,
        "close": 59.5,
        "value": 59.5
      },
      {
        "timestamp": "2026-06-15T00:00:00+00:00",
        "open": 59.5,
        "high": 61.85,
        "low": 57.17,
        "close": 59.28,
        "value": 59.28
      },
      {
        "timestamp": "2026-06-16T00:00:00+00:00",
        "open": 59.28,
        "high": 61.49,
        "low": 57.25,
        "close": 59.24,
        "value": 59.24
      },
      {
        "timestamp": "2026-06-17T00:00:00+00:00",
        "open": 59.24,
        "high": 61.48,
        "low": 57.23,
        "close": 59.25,
        "value": 59.25
      },
      {
        "timestamp": "2026-06-18T00:00:00+00:00",
        "open": 59.25,
        "high": 61.66,
        "low": 56.98,
        "close": 59.15,
        "value": 59.15
      },
      {
        "timestamp": "2026-06-19T00:00:00+00:00",
        "open": 59.15,
        "high": 61.85,
        "low": 56.35,
        "close": 58.79,
        "value": 58.79
      },
      {
        "timestamp": "2026-06-20T00:00:00+00:00",
        "open": 58.79,
        "high": 61.85,
        "low": 55.36,
        "close": 58.12,
        "value": 58.12
      },
      {
        "timestamp": "2026-06-21T00:00:00+00:00",
        "open": 58.12,
        "high": 61.52,
        "low": 54.13,
        "close": 57.2,
        "value": 57.2
      },
      {
        "timestamp": "2026-06-22T00:00:00+00:00",
        "open": 57.2,
        "high": 60.87,
        "low": 52.91,
        "close": 56.21,
        "value": 56.21
      },
      {
        "timestamp": "2026-06-23T00:00:00+00:00",
        "open": 56.21,
        "high": 60.0,
        "low": 51.96,
        "close": 55.37,
        "value": 55.37
      },
      {
        "timestamp": "2026-06-24T00:00:00+00:00",
        "open": 55.37,
        "high": 59.13,
        "low": 51.54,
        "close": 54.92,
        "value": 54.92
      },
      {
        "timestamp": "2026-06-25T00:00:00+00:00",
        "open": 54.92,
        "high": 58.56,
        "low": 51.71,
        "close": 54.99,
        "value": 54.99
      },
      {
        "timestamp": "2026-06-26T00:00:00+00:00",
        "open": 54.99,
        "high": 58.87,
        "low": 52.06,
        "close": 55.61,
        "value": 55.61
      },
      {
        "timestamp": "2026-06-27T00:00:00+00:00",
        "open": 55.61,
        "high": 59.55,
        "low": 53.0,
        "close": 56.65,
        "value": 56.65
      },
      {
        "timestamp": "2026-06-28T00:00:00+00:00",
        "open": 56.65,
        "high": 60.46,
        "low": 54.34,
        "close": 57.89,
        "value": 57.89
      },
      {
        "timestamp": "2026-06-29T00:00:00+00:00",
        "open": 57.89,
        "high": 61.41,
        "low": 55.81,
        "close": 59.09,
        "value": 59.09
      },
      {
        "timestamp": "2026-06-30T00:00:00+00:00",
        "open": 59.09,
        "high": 62.23,
        "low": 57.11,
        "close": 60.03,
        "value": 60.03
      },
      {
        "timestamp": "2026-07-01T00:00:00+00:00",
        "open": 60.03,
        "high": 62.84,
        "low": 58.0,
        "close": 60.59,
        "value": 60.59
      },
      {
        "timestamp": "2026-07-02T00:00:00+00:00",
        "open": 60.59,
        "high": 63.24,
        "low": 58.38,
        "close": 60.78,
        "value": 60.78
      },
      {
        "timestamp": "2026-07-03T00:00:00+00:00",
        "open": 60.78,
        "high": 63.55,
        "low": 58.24,
        "close": 60.73,
        "value": 60.73
      },
      {
        "timestamp": "2026-07-04T00:00:00+00:00",
        "open": 60.73,
        "high": 63.86,
        "low": 57.79,
        "close": 60.61,
        "value": 60.61
      },
      {
        "timestamp": "2026-07-05T00:00:00+00:00",
        "open": 60.61,
        "high": 64.07,
        "low": 57.46,
        "close": 60.57,
        "value": 60.57
      }
    ],
    "value": 60.6,
    "change_24h": -0.0
  },
  "refresh_errors": [],
  "index": 33.5,
  "group_scores": {
    "Embodied connection": 47.0,
    "Synthetic substitution": 15.6,
    "Generativity": 34.7
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
        "priority": 84.4,
        "title": "STOP GOONING.",
        "action": "If porn is replacing sex, courtship, sleep, work, or your ability to want an ordinary woman, kill the loop.",
        "why": "Synthetic substitution scores 15.6/100. The countercurrent metric also finds 60% of young men favor harder access to online porn.",
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
        "priority": 61.8,
        "title": "STOP SHOPPING. START CHOOSING.",
        "action": "Cap the swipe session. Give one plausible man a real conversation or date before reopening the catalogue.",
        "why": "Embodied connection scores 47.0/100, while 69% of unmarried young adults still say they want marriage. Desire for union is surviving better than actual connection.",
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
        "priority": 55.5,
        "title": "DATE CHARACTER, NOT DANGER.",
        "action": "Charisma is not character. Watch how he handles frustration, boundaries, responsibility, and boring Tuesdays.",
        "why": "Embodied connection scores 47.0/100 and generativity 34.7/100. The index is weak where durable pair-bonding and life-building should show up.",
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
      "timestamp": "2026-07-05T23:00:08.641138+00:00",
      "value": 33.5,
      "kind": "observed",
      "coverage": 1.0,
      "method_version": "headline-ehi-v1"
    }
  ],
  "ehi_history_meta": {
    "mode": "backcast_plus_observed",
    "method_version": "ehi-backcast-v1",
    "note": "Annual reconstructed points use a fixed four-signal core: young-adult partnering, total fertility, national marriage rate, and teen almost-constant internet use. Current observed snapshots use the full headline EHI basket. Backcast rows publish coverage and components and should not be read as historical observations of metrics that did not yet exist.",
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
