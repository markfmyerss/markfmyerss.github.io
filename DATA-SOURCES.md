# NFL Favorites Sorter — roster sources and headshots

Available: all sixteen AFC teams plus NFC North and East. Official active-roster snapshots verified November 5, 2026:

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

These 1,266 players reflect the published **Active** tables. Practice squad, reserve/injured, suspended and separately listed groups are excluded. Counts can differ from 53; the Giants and Commanders each list 52. This is a dated snapshot, not automatic transaction tracking. Every player retains an official profile URL in data.js.

## Headshots

Each player has an official team/NFL portrait URL and source page recorded in HEADSHOTS. 1248 portraits come from official roster pages. 18 missing or generic thumbnails use individual NFL.com portraits:

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

All 1,266 URLs returned image content in GitHub checks. Images remain remotely hosted; binaries are not bundled. Lazy placeholders are removed as in the teams’ own image loaders. Failed images use jersey cards.

All twenty existing teams’ metadata, player records, image mappings and save keys are unchanged. Existing Vega Ioane and Nate Thomas mappings are preserved. Kenny Moore II is matched to NFL.com’s kenny-moore profile, verified as the active Eagles cornerback from Valdosta State. New player IDs use official profile slugs.

Images remain the property of their rights holders. Public availability does not grant a license; no independent display or redistribution license has been established. URLs, availability and uniforms in photographs may change. No NFL or team affiliation is implied.

## Navigation and positions

AFC/NFC buttons show available divisions: all four AFC divisions plus NFC North and East. Each division has four teams. Remembered conference/division selections and independent team/position saves remain in the visitor’s browser.

Filters group HB/FB with RB; T/G/C with OL; DT/DE/NT with DL; EDGE/ILB/OLB with LB; CB/S with DB; K/P/LS with ST. Cards retain the official position label. Travis Hunter remains in WR and DB, once in the full Jaguars roster.

## Team palettes

TEAM_INFO contains each palette and brighter UI highlights for readability. New palettes use Dallas blue/silver (#003594/#869397), New York blue/red (#0B2265/#A71930), Philadelphia midnight green/silver (#004C54/#A5ACAF), and Washington burgundy/gold (#5A1414/#FFB612). Existing palettes are unchanged. These values are not a claim of team approval or a licensed style guide.

## GitHub-only development and validation

Source preparation, roster retrieval, tests, browser dependencies, screenshots and test downloads remain on GitHub. The workflow has read-only repository access and cannot commit or push. Generated source is reviewed before being committed using repository tools; no site files or development dependencies are downloaded to the user’s Mac.

Validation covers 240 team/filter combinations, all 1,266 portraits, twenty-four team browser flows, conference/division save isolation, reloads, migration, undo, dual positions and four viewport sizes. All eight NFC teams also pass mobile PNG export checks. Desktop’s 27 image variants and mobile Chromium/WebKit saving checks remain covered.

## User-created result images

Desktop keeps nine sizes, PNG/JPG/WebP and ZIP exports. Mobile keeps only 1:1, 3:4, 4:5 and 9:16, automatic PNG, All/Top 10/Top 25 and individual page saving, with no file format or ZIP control.

Exported images are generated in the visitor’s browser without uploading rankings. PNG previews support native file sharing or press-and-hold saving. The actual iPhone Photos menu still requires a physical-device check. Unavailable or CORS-restricted portraits use jersey numbers. Generating a card does not grant additional rights to source photos.
