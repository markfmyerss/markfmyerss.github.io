# AFC roster sources and headshots

All 16 AFC teams are available. Official active-roster snapshots verified November 5, 2026:

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

The 844 players reflect the published **Active** tables. Practice squad, reserve/injured, suspended and other separately listed groups are excluded. Counts reflect source tables and may differ from 53. This is a dated snapshot, not a live feed; later transactions are not automatically reflected. Each player retains an official profile URL in data.js.

## Headshots

Every player has an individual official team/NFL image source recorded in HEADSHOTS. 831 come from official roster pages. 13 missing or generic thumbnails use individual NFL.com profile portraits:

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

All 844 URLs returned image content in GitHub checks. Images load from official servers; no image binaries are bundled. The lazy placeholder transformation is removed, matching the team sites’ image loaders. Jersey cards remain the fallback for failed images.

Vega Ioane is matched by stable ID directly to his Ravens portrait. Nate Thomas matches NFL.com’s Nathan Thomas profile by team, number and college. All twelve pre-existing teams’ roster records, headshot mappings and save keys are preserved. Newer divisions’ IDs use official profile slugs.

Images remain owned by their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. URLs, availability and pictured uniforms may change. No endorsement or affiliation with the NFL or its teams is implied.

## Position filters

Filters group HB/FB with RB; T/G/C and combined line positions with OL; DT/DE/NT with DL; EDGE/ILB/OLB with LB; CB/S with DB; K/P/LS with ST. Cards retain official roster positions. Travis Hunter appears once in WR, once in DB and once in the full Jaguars roster. Earlier snapshots retain their recorded groups.

## Colors

TEAM_INFO records each team’s palette and brighter readable UI highlights. AFC West uses Denver orange/navy (#FB4F14/#002244), Kansas City red/gold (#E31837/#FFB81C), Las Vegas black/silver (#000000/#A5ACAF), and Los Angeles powder blue/gold (#0080C6/#FFC20E). Existing team palettes are preserved. These digital values do not imply team approval or a licensed style guide.

## Development and checks

Source preparation, roster retrieval, image checks, browser testing and screenshots run on GitHub. The workflow has read-only repository access and cannot commit or push. The reviewed generated snapshot is committed through repository tools. No site files or development dependencies are downloaded to the user’s Mac.

The picker presents four divisions and four teams per division, using a two-by-two division layout on phones. It remembers each division’s last team and restores separate team/position rankings from the visitor’s browser.

Checks cover 160 team/filter combinations, all 844 images, migration, state isolation, undo, dual positions, all sixteen teams in a real browser, and layouts at 320, 390, 768 and 1440 pixels.
