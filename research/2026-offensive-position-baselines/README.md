# Proposed 2026 offensive position eligibility

Research only. The live site is unchanged.

Collected 2026-11-08T02:29:59.064Z (November 7, 2026, US Eastern). Current roster source: main commit `7e6b40a56c8ac6addd7d5fcbf6457534fcaf028f`.

## Counts within the site's current roster pools

| Position | Proposed minimum | Current pool | Qualifies | Excluded |
|---|---|---:|---:|---:|
| QB | 50 passing attempts | 86 | 35 | 51 |
| RB | 25 rushing attempts OR 10 receptions | 118 | 63 | 55 |
| WR | 10 receptions | 178 | 84 | 94 |
| TE | 10 receptions | 121 | 47 | 74 |

RB breakdown: 24 qualify through rushing alone, 36 through both criteria, and 3 through receiving alone. The receiving-only additions are Ty Johnson (15 receptions; rushing below the collected range), Tyjae Spears (18 rushes, 15 receptions), and Emmett Johnson (20 rushes, 14 receptions).

## Nearby alternatives

| Position | Alternative | Qualifiers |
|---|---|---:|
| QB | 50 passing attempts | 35 |
| QB | 75 passing attempts | 32 |
| QB | 100 passing attempts | 31 |
| RB | 25 rushes OR 10 receptions | 63 |
| RB | 40 rushes OR 10 receptions | 52 |
| RB | 50 rushes OR 10 receptions | 51 |
| WR | 10 receptions | 84 |
| WR | 15 receptions | 68 |
| WR | 20 receptions | 53 |
| TE | 10 receptions | 47 |
| TE | 15 receptions | 36 |
| TE | 20 receptions | 24 |

## Before choosing a live rule

- The 50-attempt threshold produces the requested 35–40 range within the current QB roster pool.
- J.J. McCarthy (49 attempts) and Drew Lock (48) fall just short. Case Keenum (53) and Marcus Mariota (51) qualify.
- A strict minimum can exclude recognizable players: A.J. Brown has 9 receptions in the collected table.
- Some players meet the statistics minimum but are already absent from the site's active-only roster. For example, the passing table includes Jalen Hurts (154), Tyler Huntley (110), and Lamar Jackson (97). The proposed minimum does not solve that existing roster-scope issue; decide separately whether qualified reserve/injured players should be included.
- No change has been made to defense, offensive line, special teams, NBA, or any live ranking.

## Collection and matching limits

- This is a research snapshot; no live eligibility filters have been deployed.
- Current active-roster pool only. Stat-qualified players outside this pool are listed separately; their roster status is not inferred.
- Tables collected in descending order until below each eligibility threshold. Null means not in the collected range, never a confirmed zero. Exact low totals may be incomplete.
- Names matched by punctuation/case-insensitive names with a suffix-normalized fallback. No ambiguous matches were accepted. Qualifying outside-roster identities require review before widening the scope.
- Counts are tied to 2026 regular-season totals at collection time and current roster snapshot; they will change during the season.

All source pages were checked for unique player identities and descending totals. Collection reached 5 passing attempts (50 records / 2 pages), 18 rushing attempts (100 records / 4 pages), and 9 receptions (200 records / 8 pages), covering all proposed qualifying thresholds. Stale duplicate source responses were rejected; alternate official NFL.com routes were used as needed.

CSV blank statistic cells correspond to JSON null values. They mean below the collected range, not zero. Their exact values are unnecessary for these thresholds. Names at the final collected statistic may be partially represented if a tie crosses a page boundary; this does not affect qualifying counts.

## Files

- [Player-by-player CSV](players.csv): all 502 players in the current four position pools, including excluded players.
- [Structured results and source URLs](results.json): source rows, matching details, thresholds, alternatives, and qualifying names outside the site's current offensive roster.
- [Successful GitHub collection run](https://github.com/markfmyerss/markfmyerss.github.io/actions/runs/42438778524): raw source HTML and reports are available in the research artifact (30-day retention). The CSV and JSON committed here persist on this branch.

## Sources

- [NFL.com passing](https://www.nfl.com/stats/player-stats/category/passing/2026/REG/all/passingattempts/desc)
- [NFL.com rushing](https://www.nfl.com/stats/player-stats/category/rushing/2026/REG/all/rushingattempts/desc)
- [NFL.com receiving](https://www.nfl.com/stats/player-stats/category/receiving/2026/REG/all/receivingreceptions/desc)

## Qualifying player lists

### QB

| Player | Current site team | Passing attempts | Rush attempts | Receptions |
|---|---|---:|---:|---:|
| Michael Penix Jr. | Atlanta Falcons | 168 | — | — |
| Jacoby Brissett | Baltimore Ravens | 305 | 29 | — |
| Josh Allen | Buffalo Bills | 205 | 55 | — |
| Bryce Young | Carolina Panthers | 269 | — | — |
| Caleb Williams | Chicago Bears | 158 | 26 | — |
| Case Keenum | Chicago Bears | 53 | — | — |
| Tyson Bagent | Chicago Bears | 64 | — | — |
| Joe Burrow | Cincinnati Bengals | 267 | 20 | — |
| Deshaun Watson | Cleveland Browns | 249 | 51 | — |
| Dak Prescott | Dallas Cowboys | 302 | 23 | — |
| Bo Nix | Denver Broncos | 250 | 32 | — |
| Jared Goff | Detroit Lions | 248 | — | — |
| Jordan Love | Green Bay Packers | 312 | — | — |
| C.J. Stroud | Houston Texans | 247 | 18 | — |
| Daniel Jones | Indianapolis Colts | 268 | 25 | — |
| Trevor Lawrence | Jacksonville Jaguars | 224 | 21 | — |
| Patrick Mahomes | Kansas City Chiefs | 232 | 21 | — |
| Kirk Cousins | Las Vegas Raiders | 283 | 20 | — |
| Justin Herbert | Los Angeles Chargers | 212 | 33 | — |
| Matthew Stafford | Los Angeles Rams | 303 | — | — |
| Malik Willis | Miami Dolphins | 183 | 36 | — |
| Kyler Murray | Minnesota Vikings | 154 | 29 | — |
| Drake Maye | New England Patriots | 234 | 46 | — |
| Tyler Shough | New Orleans Saints | 273 | 24 | — |
| Jameis Winston | New York Giants | 158 | — | — |
| Geno Smith | New York Jets | 239 | 23 | — |
| Tanner McKee | Philadelphia Eagles | 114 | — | — |
| Aaron Rodgers | Pittsburgh Steelers | 288 | — | — |
| Brock Purdy | San Francisco 49ers | 211 | 32 | — |
| Sam Darnold | Seattle Seahawks | 211 | — | — |
| Baker Mayfield | Tampa Bay Buccaneers | 110 | — | — |
| Jalon Daniels | Tampa Bay Buccaneers | 98 | 22 | — |
| Cam Ward | Tennessee Titans | 248 | 26 | — |
| Jayden Daniels | Washington Commanders | 145 | 27 | — |
| Marcus Mariota | Washington Commanders | 51 | — | — |

### RB

| Player | Current site team | Passing attempts | Rush attempts | Receptions |
|---|---|---:|---:|---:|
| Bam Knight | Arizona Cardinals | — | 28 | — |
| Tyler Allgeier | Arizona Cardinals | — | 72 | 21 |
| Bijan Robinson | Atlanta Falcons | — | 150 | 25 |
| Brian Robinson Jr. | Atlanta Falcons | — | 53 | — |
| Derrick Henry | Baltimore Ravens | — | 175 | 12 |
| Justice Hill | Baltimore Ravens | — | 33 | 20 |
| James Cook III | Buffalo Bills | — | 138 | 12 |
| Ty Johnson | Buffalo Bills | — | — | 15 |
| Chuba Hubbard | Carolina Panthers | — | 118 | 22 |
| D'Andre Swift | Chicago Bears | — | 143 | 24 |
| Kyle Monangai | Chicago Bears | — | 60 | — |
| Roschon Johnson | Chicago Bears | — | 29 | 9 |
| Chase Brown | Cincinnati Bengals | — | 94 | 36 |
| Samaje Perine | Cincinnati Bengals | — | 35 | — |
| Quinshon Judkins | Cleveland Browns | — | 101 | 21 |
| Javonte Williams | Dallas Cowboys | — | 134 | 20 |
| Tyler Goodson | Dallas Cowboys | — | 28 | — |
| J.K. Dobbins | Denver Broncos | — | 94 | — |
| Jonah Coleman | Denver Broncos | — | 30 | 9 |
| Jahmyr Gibbs | Detroit Lions | — | 157 | 34 |
| Sione Vaki | Detroit Lions | — | 27 | — |
| Josh Jacobs | Green Bay Packers | — | 32 | 11 |
| Kaleb Johnson | Green Bay Packers | — | 28 | — |
| MarShawn Lloyd | Green Bay Packers | — | 57 | 13 |
| David Montgomery | Houston Texans | — | 52 | — |
| Woody Marks | Houston Texans | — | 77 | 14 |
| Jonathan Taylor | Indianapolis Colts | — | 148 | 21 |
| Seth McGowan | Indianapolis Colts | — | 37 | — |
| Bhayshul Tuten | Jacksonville Jaguars | — | 122 | 15 |
| Chris Rodriguez Jr. | Jacksonville Jaguars | — | 55 | — |
| Emmett Johnson | Kansas City Chiefs | — | 20 | 14 |
| Kenneth Walker | Kansas City Chiefs | — | 141 | 22 |
| Ashton Jeanty | Las Vegas Raiders | — | 108 | 37 |
| Mike Washington Jr. | Las Vegas Raiders | — | 65 | — |
| Keaton Mitchell | Los Angeles Chargers | — | 39 | 15 |
| Kimani Vidal | Los Angeles Chargers | — | 29 | — |
| Omarion Hampton | Los Angeles Chargers | — | 89 | 11 |
| Blake Corum | Los Angeles Rams | — | 75 | 10 |
| Kyren Williams | Los Angeles Rams | — | 112 | 33 |
| Ollie Gordon II | Miami Dolphins | — | 91 | — |
| Aaron Jones Sr. | Minnesota Vikings | — | 110 | 15 |
| Jordan Mason | Minnesota Vikings | — | 38 | — |
| Corey Kiner | New England Patriots | — | 42 | — |
| Rhamondre Stevenson | New England Patriots | — | 96 | 23 |
| TreVeyon Henderson | New England Patriots | — | 52 | — |
| Alvin Kamara | New Orleans Saints | — | 41 | 22 |
| Kendre Miller | New Orleans Saints | — | 57 | 9 |
| Cam Skattebo | New York Giants | — | 98 | 11 |
| Braelon Allen | New York Jets | — | 112 | 17 |
| Breece Hall | New York Jets | — | 51 | 10 |
| Saquon Barkley | Philadelphia Eagles | — | 56 | — |
| Jaylen Warren | Pittsburgh Steelers | — | 119 | 25 |
| Rico Dowdle | Pittsburgh Steelers | — | 46 | 13 |
| Christian McCaffrey | San Francisco 49ers | — | 84 | 34 |
| Kaelon Black | San Francisco 49ers | — | 57 | — |
| Emanuel Wilson | Seattle Seahawks | — | 111 | — |
| George Holani | Seattle Seahawks | — | 37 | 12 |
| Jadarian Price | Seattle Seahawks | — | 38 | — |
| Bucky Irving | Tampa Bay Buccaneers | — | 147 | 18 |
| Kenny Gainwell | Tampa Bay Buccaneers | — | 58 | 12 |
| Tony Pollard | Tennessee Titans | — | 133 | 14 |
| Tyjae Spears | Tennessee Titans | — | 18 | 15 |
| Rachaad White | Washington Commanders | — | 47 | 16 |

### WR

| Player | Current site team | Passing attempts | Rush attempts | Receptions |
|---|---|---:|---:|---:|
| Michael Wilson | Arizona Cardinals | — | — | 45 |
| Drake London | Atlanta Falcons | — | — | 39 |
| Jahan Dotson | Atlanta Falcons | — | — | 14 |
| Zachariah Branch | Atlanta Falcons | — | — | 10 |
| Rashod Bateman | Baltimore Ravens | — | — | 20 |
| Zay Flowers | Baltimore Ravens | — | — | 43 |
| DJ Moore | Buffalo Bills | — | — | 16 |
| Keon Coleman | Buffalo Bills | — | — | 20 |
| Khalil Shakir | Buffalo Bills | — | — | 27 |
| Jalen Coker | Carolina Panthers | — | — | 27 |
| John Metchie III | Carolina Panthers | — | — | 12 |
| Tetairoa McMillan | Carolina Panthers | — | — | 42 |
| Kalif Raymond | Chicago Bears | — | — | 28 |
| Luther Burden III | Chicago Bears | — | — | 42 |
| Rome Odunze | Chicago Bears | — | — | 28 |
| Dohnte Meyers | Cincinnati Bengals | — | — | 16 |
| Ja'Marr Chase | Cincinnati Bengals | — | — | 43 |
| Tee Higgins | Cincinnati Bengals | — | — | 43 |
| Denzel Boston | Cleveland Browns | — | — | 26 |
| Jerry Jeudy | Cleveland Browns | — | — | 16 |
| KC Concepcion Jr. | Cleveland Browns | — | — | 33 |
| CeeDee Lamb | Dallas Cowboys | — | — | 60 |
| George Pickens | Dallas Cowboys | — | — | 39 |
| Ryan Flournoy | Dallas Cowboys | — | — | 30 |
| Courtland Sutton | Denver Broncos | — | — | 20 |
| Jaylen Waddle | Denver Broncos | — | — | 29 |
| Amon-Ra St. Brown | Detroit Lions | — | — | 53 |
| Isaac TeSlaa | Detroit Lions | — | — | 10 |
| Jameson Williams | Detroit Lions | — | — | 27 |
| Christian Watson | Green Bay Packers | — | — | 42 |
| Matthew Golden | Green Bay Packers | — | — | 43 |
| Kayshon Boutte | Houston Texans | — | — | 15 |
| Nico Collins | Houston Texans | — | — | 24 |
| Xavier Hutchinson | Houston Texans | — | — | 21 |
| Josh Downs | Indianapolis Colts | — | — | 30 |
| Keenan Allen | Indianapolis Colts | — | — | 36 |
| Laquon Treadwell | Indianapolis Colts | — | — | 16 |
| Brian Thomas Jr. | Jacksonville Jaguars | — | — | 10 |
| Jakobi Meyers | Jacksonville Jaguars | — | — | 26 |
| Parker Washington | Jacksonville Jaguars | — | — | 29 |
| Rashee Rice | Kansas City Chiefs | — | — | 20 |
| Xavier Worthy | Kansas City Chiefs | — | — | 27 |
| Jalen Nailor | Las Vegas Raiders | — | — | 12 |
| Tre Tucker | Las Vegas Raiders | — | — | 29 |
| Ladd McConkey | Los Angeles Chargers | — | — | 17 |
| Quentin Johnston | Los Angeles Chargers | — | — | 12 |
| Tre' Harris | Los Angeles Chargers | — | — | 18 |
| Puka Nacua | Los Angeles Rams | — | — | 56 |
| Caleb Douglas | Miami Dolphins | — | — | 13 |
| Chris Bell | Miami Dolphins | — | — | 12 |
| Malik Washington | Miami Dolphins | — | — | 31 |
| Jordan Addison | Minnesota Vikings | — | — | 16 |
| Justin Jefferson | Minnesota Vikings | — | — | 28 |
| DeMario Douglas | New England Patriots | — | — | 26 |
| Efton Chism III | New England Patriots | — | — | 15 |
| Chris Olave | New Orleans Saints | — | — | 49 |
| Devaughn Vele | New Orleans Saints | — | — | 33 |
| Malachi Fields | New York Giants | — | — | 16 |
| Malik Nabers | New York Giants | — | — | 48 |
| Adonai Mitchell | New York Jets | — | — | 16 |
| Garrett Wilson | New York Jets | — | — | 43 |
| Isaiah Williams | New York Jets | — | — | 12 |
| Omar Cooper Jr. | New York Jets | — | — | 12 |
| Darius Cooper | Philadelphia Eagles | — | — | 11 |
| DeVonta Smith | Philadelphia Eagles | — | — | 26 |
| Dontayvion Wicks | Philadelphia Eagles | — | — | 19 |
| Makai Lemon | Philadelphia Eagles | — | — | 31 |
| DK Metcalf | Pittsburgh Steelers | — | — | 33 |
| Germie Bernard | Pittsburgh Steelers | — | — | 32 |
| Deebo Samuel Sr. | San Francisco 49ers | — | — | 16 |
| Mike Evans | San Francisco 49ers | — | — | 27 |
| Cooper Kupp | Seattle Seahawks | — | — | 19 |
| Jaxon Smith-Njigba | Seattle Seahawks | — | — | 64 |
| Rashid Shaheed | Seattle Seahawks | — | — | 16 |
| Chris Godwin Jr. | Tampa Bay Buccaneers | — | — | 27 |
| Emeka Egbuka | Tampa Bay Buccaneers | — | — | 28 |
| Ted Hurst III | Tampa Bay Buccaneers | — | — | 11 |
| Carnell Tate | Tennessee Titans | — | — | 34 |
| Chimere Dike | Tennessee Titans | — | — | 11 |
| Elic Ayomanor | Tennessee Titans | — | — | 13 |
| Wan'Dale Robinson | Tennessee Titans | — | — | 35 |
| Antonio Williams | Washington Commanders | — | — | 23 |
| Stefon Diggs | Washington Commanders | — | — | 27 |
| Treylon Burks | Washington Commanders | — | — | 12 |

### TE

| Player | Current site team | Passing attempts | Rush attempts | Receptions |
|---|---|---:|---:|---:|
| Elijah Higgins | Arizona Cardinals | — | — | 16 |
| Trey McBride | Arizona Cardinals | — | — | 66 |
| Kyle Pitts Sr. | Atlanta Falcons | — | — | 22 |
| Josh Cuevas | Baltimore Ravens | — | — | 10 |
| Mark Andrews | Baltimore Ravens | — | — | 31 |
| Dalton Kincaid | Buffalo Bills | — | — | 27 |
| Darren Waller | Carolina Panthers | — | — | 15 |
| Mitchell Evans | Carolina Panthers | — | — | 10 |
| Tommy Tremble | Carolina Panthers | — | — | 17 |
| Colston Loveland | Chicago Bears | — | — | 33 |
| Mike Gesicki | Cincinnati Bengals | — | — | 17 |
| Harold Fannin Jr. | Cleveland Browns | — | — | 35 |
| Brevyn Spann-Ford | Dallas Cowboys | — | — | 13 |
| Jake Ferguson | Dallas Cowboys | — | — | 17 |
| Evan Engram | Denver Broncos | — | — | 13 |
| Sam LaPorta | Detroit Lions | — | — | 31 |
| Tucker Kraft | Green Bay Packers | — | — | 35 |
| Dalton Schultz | Houston Texans | — | — | 33 |
| Foster Moreau | Houston Texans | — | — | 11 |
| Tyler Warren | Indianapolis Colts | — | — | 34 |
| Brenton Strange | Jacksonville Jaguars | — | — | 30 |
| Noah Gray | Kansas City Chiefs | — | — | 14 |
| Travis Kelce | Kansas City Chiefs | — | — | 29 |
| Brock Bowers | Las Vegas Raiders | — | — | 41 |
| Michael Mayer | Las Vegas Raiders | — | — | 36 |
| Charlie Kolar | Los Angeles Chargers | — | — | 10 |
| Oronde Gadsden | Los Angeles Chargers | — | — | 17 |
| Colby Parkinson | Los Angeles Rams | — | — | 14 |
| Davis Allen | Los Angeles Rams | — | — | 12 |
| Tyler Higbee | Los Angeles Rams | — | — | 27 |
| Greg Dulcich | Miami Dolphins | — | — | 22 |
| T.J. Hockenson | Minnesota Vikings | — | — | 31 |
| Eli Raridon | New England Patriots | — | — | 13 |
| Hunter Henry | New England Patriots | — | — | 29 |
| Juwan Johnson | New Orleans Saints | — | — | 26 |
| Noah Fant | New Orleans Saints | — | — | 11 |
| Isaiah Likely | New York Giants | — | — | 41 |
| Kenyon Sadiq | New York Jets | — | — | 17 |
| Mason Taylor | New York Jets | — | — | 17 |
| Dallas Goedert | Philadelphia Eagles | — | — | 26 |
| Darnell Washington | Pittsburgh Steelers | — | — | 19 |
| Pat Freiermuth | Pittsburgh Steelers | — | — | 25 |
| George Kittle | San Francisco 49ers | — | — | 34 |
| AJ Barner | Seattle Seahawks | — | — | 21 |
| Cade Otton | Tampa Bay Buccaneers | — | — | 19 |
| Gunnar Helm | Tennessee Titans | — | — | 17 |
| Chig Okonkwo | Washington Commanders | — | — | 17 |
