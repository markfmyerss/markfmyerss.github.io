# NFL Favorites Sorter — sources and image policy

Available: all AFC teams and NFC North, East and South. Official active-roster snapshots verified November 5, 2026:

| Division | Team | Active players | Source |
| --- | --- | ---: | --- |
| AFC North | Baltimore Ravens | 53 | https://www.baltimoreravens.com/team/players-roster/ |
| AFC North | Cincinnati Bengals | 52 | https://www.bengals.com/team/players-roster/ |
| AFC North | Pittsburgh Steelers | 54 | https://www.steelers.com/team/players-roster/ |
| AFC North | Cleveland Browns | 52 | https://www.clevelandbrowns.com/team/players-roster/ |
| AFC East | Buffalo Bills | 53 | https://www.buffalobills.com/team/players-roster/ |
| AFC East | Miami Dolphins | 53 | https://www.miamidolphins.com/team/players-roster/ |
| AFC East | New England Patriots | 52 | https://www.patriots.com/team/players-roster/ |
| AFC East | New York Jets | 53 | https://www.newyorkjets.com/team/players-roster/ |
| AFC South | Houston Texans | 53 | https://www.houstontexans.com/team/players-roster/ |
| AFC South | Indianapolis Colts | 53 | https://www.colts.com/team/players-roster/ |
| AFC South | Jacksonville Jaguars | 51 | https://www.jaguars.com/team/players-roster/ |
| AFC South | Tennessee Titans | 53 | https://www.tennesseetitans.com/team/players-roster/ |
| AFC West | Denver Broncos | 53 | https://www.denverbroncos.com/team/players-roster/ |
| AFC West | Kansas City Chiefs | 53 | https://www.chiefs.com/team/players-roster/ |
| AFC West | Las Vegas Raiders | 53 | https://www.raiders.com/team/players-roster/ |
| AFC West | Los Angeles Chargers | 53 | https://www.chargers.com/team/players-roster/ |
| NFC North | Chicago Bears | 52 | https://www.chicagobears.com/team/players-roster/ |
| NFC North | Detroit Lions | 54 | https://www.detroitlions.com/team/players-roster/ |
| NFC North | Green Bay Packers | 53 | https://www.packers.com/team/players-roster/ |
| NFC North | Minnesota Vikings | 53 | https://www.vikings.com/team/players-roster/ |
| NFC East | Dallas Cowboys | 53 | https://www.dallascowboys.com/team/players-roster/ |
| NFC East | New York Giants | 52 | https://www.giants.com/team/players-roster/ |
| NFC East | Philadelphia Eagles | 53 | https://www.philadelphiaeagles.com/team/players-roster/ |
| NFC East | Washington Commanders | 52 | https://www.commanders.com/team/players-roster/ |
| NFC South | Atlanta Falcons | 50 | https://www.atlantafalcons.com/team/players-roster/ |
| NFC South | Carolina Panthers | 53 | https://www.panthers.com/team/players-roster/ |
| NFC South | New Orleans Saints | 53 | https://www.neworleanssaints.com/team/players-roster/ |
| NFC South | Tampa Bay Buccaneers | 53 | https://www.buccaneers.com/team/players-roster/ |

The 1,475 players reflect the published **Active** tables. Counts can differ from 53; Atlanta lists 50. Practice squad, reserve/injured, suspended and separately listed groups are excluded. This is a dated snapshot, not live transaction tracking. Every player retains an official profile URL.

## Headshots

Every player has an official team/NFL portrait source in HEADSHOTS. 1457 come from roster pages; 18 missing or generic thumbnails use individual NFL profiles:

- Derek Barnett: https://www.nfl.com/players/derek-barnett/
- Mekhi Blackmon: https://www.nfl.com/players/mekhi-blackmon/
- Noah Igbinoghene: https://www.nfl.com/players/noah-igbinoghene/
- Elgton Jenkins: https://www.nfl.com/players/elgton-jenkins/
- Jaleel McLaughlin: https://www.nfl.com/players/jaleel-mclaughlin/
- Toriano Pride Jr.: https://www.nfl.com/players/toriano-pride-jr/
- Sam Williams: https://www.nfl.com/players/sam-williams-4/
- Greg Dortch: https://www.nfl.com/players/greg-dortch/
- Emari Demercado: https://www.nfl.com/players/emari-demercado/
- Marvin Harrison Jr.: https://www.nfl.com/players/marvin-harrison-jr/
- Nate Thomas: https://www.nfl.com/players/nathan-thomas/
- Joshua Ezeudu: https://www.nfl.com/players/joshua-ezeudu/
- Ben VanSumeren: https://www.nfl.com/players/ben-vansumeren/
- Arnold Ebiketie: https://www.nfl.com/players/arnold-ebiketie/
- Jonathan Greenard: https://www.nfl.com/players/jonathan-greenard/
- Kenny Moore II: https://www.nfl.com/players/kenny-moore/
- Stefon Diggs: https://www.nfl.com/players/stefon-diggs/
- Lucas Patrick: https://www.nfl.com/players/lucas-patrick/

All 1,475 image URLs passed GitHub checks. Photos remain on official servers; no image binaries are bundled. Jersey numbers are the fallback. Previously verified name mappings and all twenty-four existing teams’ records, images, metadata and save keys are unchanged.

Images belong to their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. Remote availability, URLs and uniforms may change. No affiliation with the NFL or teams is implied.

## Positions, navigation and colors

AFC/NFC navigation remembers team selections and preserves separate team/position rankings in the visitor’s browser. Each available division contains four teams.

Position groups retain official labels on cards. HB/FB map to RB; line positions to OL; DT/DE/NT to DL; EDGE/ILB/OLB to LB; CB/S to DB; K/P/LS/RS/KR/PR to ST. Combined roles can appear in multiple filters: Barion Brown’s WR/RS listing appears in WR and ST, once in the full Saints roster. Travis Hunter remains in WR and DB.

New South palettes use Atlanta red/black (#A71930/#000000), Carolina blue/black (#0085CA/#101820), New Orleans black/gold (#101820/#D3BC8D), and Tampa Bay red/orange (#D50A0A/#FF7900). TEAM_INFO records readable UI highlights. Existing palettes are unchanged. Values do not imply a licensed style guide or team approval.

## GitHub-only work and validation

Source preparation, roster retrieval, tests, browser dependencies, screenshots and test downloads remain on GitHub. The workflow has read-only repository access and cannot commit or push. Reviewed generated source is committed through repository tools; no site files or development dependencies are downloaded to the user’s Mac.

Checks cover 280 team/filter combinations, 1,475 portraits, every team’s browser flow, saved-state isolation, migration, undo, multi-position players, mobile PNG exports for all NFC teams, and four viewport sizes. Desktop image and Chromium/WebKit mobile save tests remain covered.

## User-created images

Desktop retains nine sizes, PNG/JPG/WebP and ZIP exports. Mobile retains four sizes (1:1, 3:4, 4:5, 9:16), automatic PNG, All/Top 10/Top 25 and individual page saving, with no file-format selector or ZIP.

Cards are generated in the browser without uploading rankings. Mobile uses native file sharing or a press-and-hold PNG preview; the actual iPhone Photos menu requires a physical-device check. CORS-restricted or missing photos use jerseys. Source-image rights are unchanged.
