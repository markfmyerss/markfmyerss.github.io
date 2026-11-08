# Proposed 25% defensive snap baseline

Research only. No live player pools changed.

Minimum approved by the user: **25% defensive snap share**, for DL, LB, and DB. Special-teams snaps do not count toward this percentage. Games-played denominator is the recommended injury-aware interpretation; season-long comparison is retained for review. No absolute total-snap floor has been approved or applied.

Collected 2026-11-08T02:45:08.384Z. Dataset covers 122 games and weeks 1, 2, 3, 4, 5, 6, 7, 8, 9. Current site rosters and injury-reserve defenders from all 32 official team roster pages were reviewed.

## Verified qualifiers

| Position | Current site pool | Current-pool qualifiers | Additional injured qualifiers | Games-played total | Season-share comparison |
|---|---:|---:|---:|---:|---:|
| DL | 221 | 171 | 21 | **192** | 160 |
| LB | 250 | 157 | 8 | **165** | 150 |
| DB | 324 | 215 | 11 | **226** | 206 |

These are verified qualifying counts, not a claim that every roster identity has been resolved. 93 player records have no unambiguous matching snap identity and remain flagged for review. They are not silently assigned zero snaps. Many injury-reserve players may have no 2026 appearances, but that is not inferred solely from a missing record. Unknown players must be resolved or explicitly held out before deployment.

## Percentage definitions

- Played-game share is total defensive snaps divided by team defensive opportunities in every game with a recorded appearance, across clubs if traded; zero-defensive-snap special-team appearances remain in the denominator.
- Season share uses defensive snaps with current club divided by all that club defensive opportunities in the dataset; traded players may differ.
- Team game opportunities are inferred from per-player snaps and rounded percentages. Bounds are preserved; uncertain 25% decisions are not counted.
- No absolute snap minimum is approved; floor comparisons are research only. Unmatched players are unresolved, not assumed zero.
- Includes current site DL/LB/DB players plus injury-reserve defenders from 32 official team pages. No live filter has changed.

Each team-game denominator was uniquely determined from its player snap counts and rounded percentages; no 25% boundary decisions are ambiguous in this collection. Known name differences are explicitly mapped (for example Pat Surtain II / Patrick Surtain II and Dax Hill / Daxton Hill). Similar first/last names alone are not accepted as identity matches.

## Optional total-snap floors: comparison only

| Position | No extra minimum | At least 50 defensive snaps | At least 100 | At least 150 |
|---|---:|---:|---:|---:|
| DL | 192 | 183 | 170 | 147 |
| LB | 165 | 162 | 153 | 143 |
| DB | 226 | 224 | 214 | 194 |

No floor has been applied. An extra floor can remove established injured players; inspect the lowSampleQualifiers lists in results.json before choosing one.

## Sources and attribution

- [nflverse 2026 snap-count release](https://github.com/nflverse/nflverse-data/releases/download/snap_counts/snap_counts_2026.csv) — sourced from Pro Football Reference, distributed under [CC BY 4.0](https://github.com/nflverse/nflverse-data/blob/main/LICENSE.md).
- [Field definitions](https://nflreadr.nflverse.com/articles/dictionary_snap_counts.html).
- Per-team official roster URLs are preserved in [results.json](results.json).
- [Successful GitHub collection run](https://github.com/markfmyerss/markfmyerss.github.io/actions/runs/42439831461) includes the original CSV and report in a research artifact, with 30-day retention.

Source SHA-256: `5d0aa14f4cfdc7b4d206b60f6543c4844afc87ce10df2dda36cad8c8786a9267`.
