# Roster sources and headshots

Official active-roster tables retrieved and verified November 5, 2026:

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

These 422 players are a dated snapshot of the published **Active** tables. Practice squad, reserve/injured, suspended and other separately listed groups are excluded. Published counts may differ from 53. Later transactions are not automatically reflected. Each player retains an official profile URL in data.js.

## Headshots

Every player has an individual official team/NFL image source in HEADSHOTS. 414 come from the official roster pages. 8 roster entries with missing or generic thumbnails use individual NFL.com profile portraits instead:

- Derek Barnett: https://www.nfl.com/players/derek-barnett/
- Mekhi Blackmon: https://www.nfl.com/players/mekhi-blackmon/
- Noah Igbinoghene: https://www.nfl.com/players/noah-igbinoghene/
- Elgton Jenkins: https://www.nfl.com/players/elgton-jenkins/
- Jaleel McLaughlin: https://www.nfl.com/players/jaleel-mclaughlin/
- Toriano Pride Jr.: https://www.nfl.com/players/toriano-pride-jr/
- Sam Williams: https://www.nfl.com/players/sam-williams-4/
- Greg Dortch: https://www.nfl.com/players/greg-dortch/

All 422 URLs returned image content in GitHub checks. Images load directly from official servers; no image binaries are bundled. The lazy placeholder transformation is removed, matching the team sites’ image loaders. Jersey cards remain the fallback if a remote image fails.

Vega Ioane is matched directly to his Ravens portrait by stable player ID. Existing AFC North player records, headshot records and save keys are preserved. AFC East IDs use official profile slugs. Lookup by ID lets old saved rankings receive portraits without resetting picks.

Images remain owned by their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. URLs, availability and pictured uniforms may change. No endorsement or affiliation with the NFL or its teams is implied.

## Positions and colors

Filters group HB/FB with RB; T/G/C and combined line positions with OL; DT/DE/NT with DL; EDGE/ILB/OLB with LB; CB/S with DB; K/P/LS with ST; RB/WR with RB. Cards retain the official roster position.

Team brand palettes use Baltimore purple/gold, Cincinnati orange/black, Pittsburgh black/gold, Cleveland brown/orange, Buffalo royal blue/red, Miami aqua/orange, New England navy/red, and New York green/white. Brighter UI highlights support readable text. Digital palette values are recorded in TEAM_INFO; they are not a claim of team approval or a licensed style guide.

## Development and validation

Source preparation, roster retrieval, image checks, browser testing and screenshots run on GitHub. The workflow has read-only repository access and cannot commit or push. The reviewed generated snapshot is committed through GitHub repository tools. No site files or development dependencies are downloaded to the user’s Mac.

The division picker shows four teams at a time, remembers the last team in each division, and restores the selected division from the saved team. Rankings remain separate for each team and position filter. Progress is stored in the visitor’s browser.
