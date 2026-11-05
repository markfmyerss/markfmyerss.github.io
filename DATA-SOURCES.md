# Roster sources and headshots

Official active-roster tables verified November 5, 2026:

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

These 632 players are a dated snapshot of the published **Active** tables. Practice squad, reserve/injured, suspended and other separately listed groups are excluded. Counts reflect the source tables and may differ from 53; Jacksonville’s table lists 51. Later transactions are not automatically reflected. Each player retains an official profile URL in data.js.

## Headshots

Every player has an individual official team/NFL image source in HEADSHOTS. 621 come from official team roster pages. 11 missing or generic thumbnails use individual NFL.com profile portraits:

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

All 632 URLs returned image content in GitHub checks. Images load directly from official servers; no image binaries are bundled. The lazy placeholder transformation is removed, matching the team sites’ image loaders. Jersey cards remain the fallback if a remote image fails.

Vega Ioane is matched directly to his Ravens portrait by stable player ID. Nate Thomas matches NFL.com’s Nathan Thomas profile by verified team, number and college. Existing AFC North and East roster records, headshot records and save keys are preserved. Newer divisions’ IDs use official profile slugs.

Images remain owned by their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. URLs, availability and pictured uniforms may change. No endorsement or affiliation with the NFL or its teams is implied.

## Positions and colors

Filters group HB/FB with RB; T/G/C and combined line positions with OL; DT/DE/NT with DL; EDGE/ILB/OLB with LB; CB/S with DB; K/P/LS with ST. Cards retain the official roster position. Travis Hunter retains WR/CB and appears once in both WR and DB filters and once in the full Jaguars roster. Existing snapshots retain their recorded groups.

Team palettes use Baltimore purple/gold, Cincinnati orange/black, Pittsburgh black/gold, Cleveland brown/orange, Buffalo blue/red, Miami aqua/orange, New England navy/red, New York green/white, Houston navy/red, Indianapolis blue/gray, Jacksonville teal/gold, and Tennessee navy/light blue. Brighter UI highlights support readable text. Values are recorded in TEAM_INFO, without implying team approval or a licensed style guide.

## Development and validation

Source preparation, roster retrieval, image checks, browser testing and screenshots run on GitHub. The workflow has read-only repository access and cannot commit or push. The reviewed generated snapshot is committed through GitHub repository tools. No site files or development dependencies are downloaded to the user’s Mac.

The division picker shows four teams at a time and remembers the last team per division. Rankings remain separate for every team and position filter. Progress stays in the visitor’s browser. Checks cover 120 team/filter combinations, all 632 images, save isolation, migration, undo, dual positions, and browser layouts at 320, 390, 768 and 1440 pixels.
