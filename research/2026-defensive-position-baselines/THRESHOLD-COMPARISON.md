# Defensive threshold comparison

Research only. No live filters, approved thresholds, or named exceptions were changed.

This is a like-for-like comparison of the saved 2026 regular-season snap snapshot (2026-11-08T02:48:45.834Z) and six-position assignments (2026-11-08T02:51:49.589Z). It includes qualified injured players. Share is weighted defensive snaps divided by team defensive opportunities in games with a recorded player appearance; special-teams-only appearances remain in the denominator. No absolute total-snap floor was added.

## Tested counts

| Position | Existing 25% pool | Alternative 1 | Alternative 2 | Alternative 3 | Extra comparison |
|---|---:|---|---|---|---|
| IDL | 133 | 40% → **93** | 50% → **57** | 60% → **33** | — |
| DE | 59 | 35% → **51** | 40% → **42** | 50% → **34** | — |
| ILB | 87 | 40% → **79** | 50% → **69** | 60% → **62** | 70% → **57** |
| EDGE | 78 | 35% → **63** | 40% → **61** | 50% → **47** | — |
| CB | 127 | 50% → **97** | 60% → **86** | 65% → **76** | 70% → **73** |
| S | 99 | 50% → **77** | 60% → **69** | 70% → **59** | — |

## Suggested balance, pending user choice

| Position | Suggested minimum | Pool before exceptions | Removed from 25% pool |
|---|---:|---:|---:|
| IDL | 50% | **57** | 76 |
| DE | 25% | **59** | 0 |
| ILB | 60% | **62** | 25 |
| EDGE | 40% | **61** | 17 |
| CB | 65% | **76** | 51 |
| S | 60% | **69** | 30 |

Total: **384**, down from **583** (199 fewer; approximately 34% fewer players). This is a player-count reduction, not a measured completion-time estimate. Named exceptions would increase these totals.

Suggested reasoning:

- IDL: 50% reaches 57; 40% still leaves 93, while 60% cuts to 33. The 50% line narrowly removes Ed Oliver and Christian Barmore, so review them for exceptions.
- DE: retain 25% because 59 is already manageable. At 40%, Jadeveon Clowney is removed; at 50%, Calais Campbell is also removed.
- ILB: 60% yields 62. Moving to 70% removes only five more and starts cutting Trenton Simpson (61.07%).
- EDGE: 40% yields 61. At 50%, Cameron Jordan, Will McDonald IV, and Dorance Armstrong also fall out. Jonathan Greenard and Kyle Van Noy are already excluded at 35% and need exception review.
- CB: 65% yields 76, versus 86 at 60%. Moving to 70% only removes three more, including Avonte Maddox. Several recognizable corners need exception review at 65%.
- S: 60% yields 69, but removes Harrison Smith and Brian Branch. A 70% line yields 59 while also removing Malik Hooker, Tyler Nubin, Tony Jefferson, and Kamren Kinchens.

## Notable exclusions at the suggested cutoffs

Recognition is an editorial judgment; these examples are not automatically approved exceptions.

### IDL — 50%

| Player | Team | Defensive share | Status |
|---|---|---:|---|
| B.J. Hill | Cincinnati Bengals | 44.94% | Current site pool |
| Ed Oliver | Buffalo Bills | 49.82% | Current site pool |
| Christian Barmore | New England Patriots | 49.54% | Current site pool |
| DaQuan Jones | New England Patriots | 29.98% | Current site pool |
| D.J. Jones | Denver Broncos | 43.30% | Current site pool |
| Dalvin Tomlinson | Los Angeles Chargers | 47.62% | Current site pool |
| A'Shawn Robinson | Tampa Bay Buccaneers | 45.40% | Current site pool |
| Jarran Reed | Seattle Seahawks | 47.02% | Current site pool |
| Javon Hargrave | Green Bay Packers | 45.90% | Reserve/Injured |
| Poona Ford | Los Angeles Rams | 39.28% | Reserve/Injured |

### DE — 25%

No additional exclusions: proposed threshold remains 25%.

### ILB — 60%

| Player | Team | Defensive share | Status |
|---|---|---:|---|
| Willie Gay Jr. | Miami Dolphins | 49.87% | Current site pool |
| Isaiah McDuffie | Green Bay Packers | 46.35% | Current site pool |
| Dee Winters | Dallas Cowboys | 59.85% | Current site pool |
| Baron Browning | Arizona Cardinals | 48.12% | Current site pool |
| Zaven Collins | Arizona Cardinals | 46.73% | Current site pool |
| Devin White | Detroit Lions | 28.27% | Reserve/Injured |
| Leo Chenal | Washington Commanders | 47.46% | Reserve/Injured |

### EDGE — 40%

| Player | Team | Defensive share | Status |
|---|---|---:|---|
| Kyle Van Noy | Minnesota Vikings | 32.48% | Current site pool |
| Jonathan Greenard | Philadelphia Eagles | 32.51% | Current site pool |
| Anfernee Jennings | New Orleans Saints | 26.39% | Current site pool |
| Tyree Wilson | New Orleans Saints | 26.76% | Current site pool |

### CB — 65%

| Player | Team | Defensive share | Status |
|---|---|---:|---|
| Chidobe Awuzie | Baltimore Ravens | 29.07% | Current site pool |
| Jahdae Barron | Denver Broncos | 47.94% | Current site pool |
| Donte Jackson | Los Angeles Chargers | 42.80% | Current site pool |
| Kyler Gordon | Chicago Bears | 50.58% | Current site pool |
| Joey Porter Jr. | Dallas Cowboys | 53.43% | Current site pool |
| Paulson Adebo | New York Giants | 59.66% | Current site pool |
| Kenny Moore II | Philadelphia Eagles | 45.73% | Current site pool |
| Rasul Douglas | Washington Commanders | 64.15% | Current site pool |
| Mike Sainristil | Washington Commanders | 38.88% | Current site pool |
| L'Jarius Sneed | Kansas City Chiefs | 62.93% | Reserve/Injured |

### S — 60%

| Player | Team | Defensive share | Status |
|---|---|---:|---|
| DeShon Elliott | Pittsburgh Steelers | 33.86% | Current site pool |
| Damar Hamlin | Buffalo Bills | 41.39% | Current site pool |
| Andre Cisco | New York Jets | 35.78% | Current site pool |
| Brian Branch | Detroit Lions | 56.67% | Current site pool |
| Harrison Smith | Minnesota Vikings | 53.97% | Current site pool |
| Ar'Darius Washington | New York Giants | 36.53% | Current site pool |

## Full results and validation

- [Full structured comparison](threshold-comparison.json): every tested threshold, every retained player, and every excluded player.
- [Player-by-player decision CSV](threshold-comparison.csv): each threshold and its retained/excluded decisions.
- 58 analysis checks passed: baseline totals, monotonic threshold counts, complete partitions, and comparison against integer snap/opportunity arithmetic at every cutoff.
- Display percentages are rounded; inclusion uses the underlying ratio.
- This reuses the same saved 2026 snap and role snapshot for a like-for-like comparison; it is not a fresh season-data refresh.
- The original unmatched snap identities remain unresolved and are not included in counts.
- No new named defensive exceptions have been approved or applied.
- Displayed percentages are rounded; qualification uses the underlying exact ratio.

Snap-count source: nflverse / Pro Football Reference, [CC BY 4.0](https://github.com/nflverse/nflverse-data/blob/main/LICENSE.md). [Field definitions](https://nflreadr.nflverse.com/articles/dictionary_snap_counts.html). ESPN role sources remain linked in [six-groups.json](six-groups.json).
