# NFL Favorites Sorter — roster sources and headshots

Available: all 16 AFC teams and the four NFC North teams. Official active-roster snapshots verified November 5, 2026:

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

These 1,056 players reflect the published **Active** tables. Practice squad, reserve/injured, suspended and other separately listed groups are excluded. Counts can differ from 53: Chicago lists 52 and Detroit 54. Later transactions are not automatically reflected. Each player retains an official profile URL in data.js.

## Headshots

Every player has an individual official team/NFL image source in HEADSHOTS. 1043 come from official roster pages. 13 missing or generic thumbnails use individual NFL.com profile portraits:

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

All 1,056 image URLs passed GitHub checks. Images load from official servers; no image binaries are bundled. Lazy placeholder transformations are removed, matching the team sites’ image loaders. Jersey cards remain the fallback for unavailable images.

All sixteen existing AFC teams’ metadata, roster records, portrait mappings and save keys are preserved. Vega Ioane retains his direct Ravens portrait mapping. New team IDs use official profile slugs. Nate Thomas retains the verified Nathan Thomas NFL profile match.

Images belong to their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. URLs, availability and pictured uniforms may change. No affiliation with the NFL or its teams is implied.

## Navigation and saved rankings

AFC and NFC buttons show the available divisions in that conference. AFC has North, East, South and West; NFC currently has North. Four teams appear per division. Each conference and division remembers its last selected team. Existing rankings remain separate for each team and position filter, stored in the visitor’s browser.

## Positions and palettes

Filters group HB/FB with RB; T/G/C and combined line positions with OL; DT/DE/NT with DL; EDGE/ILB/OLB with LB; CB/S with DB; K/P/LS with ST. Cards retain official position labels. Travis Hunter remains in both WR and DB filters, appearing once in the full Jaguars roster.

New palettes: Chicago navy/orange (#0B162A/#C83803), Detroit blue/silver (#0076B6/#B0B7BC), Green Bay green/gold (#203731/#FFB612), Minnesota purple/gold (#4F2683/#FFC62F). TEAM_INFO records palette values and brighter readable UI highlights. Existing palettes are unchanged. These values do not imply team approval or a licensed style guide.

## GitHub-only development and checks

Roster retrieval, source preparation, image checks, browser testing and screenshots run on GitHub. The workflow has read-only repository access and cannot commit or push. Reviewed generated source is committed through repository tools. No site files or development dependencies are downloaded to the user’s Mac.

Checks cover 200 team/filter combinations, all 1,056 portraits, migration, conference/division/team isolation, reloads, undo, dual positions, all twenty teams in a browser, and 320/390/768/1440-pixel layouts. Every NFC North team also passes a mobile PNG export check. Desktop exports and iPhone-emulated Chromium/WebKit saving checks remain covered.

## User-created result images

Desktop retains nine image sizes, PNG/JPG/WebP and ZIP exports. Mobile retains only 1:1, 3:4, 4:5 and 9:16; automatic PNG; All/Top 10/Top 25; and individual page saving, with no format selector or ZIP.

Images are generated in the visitor’s browser without uploading rankings. Mobile shows a real PNG for native sharing or press-and-hold saving. The actual iPhone Photos menu requires a physical-device check. Unavailable or CORS-restricted portraits fall back to jerseys. Source-image rights still belong to their original owners.
