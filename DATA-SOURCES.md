# Data sources and image policy

Active rosters retrieved and verified on November 5, 2026 from each team's official roster table:

| Team | Players | Source |
| --- | ---: | --- |
| Baltimore Ravens | 53 | https://www.baltimoreravens.com/team/players-roster/ |
| Cincinnati Bengals | 52 | https://www.bengals.com/team/players-roster/ |
| Pittsburgh Steelers | 54 | https://www.steelers.com/team/players-roster/ |
| Cleveland Browns | 52 | https://www.clevelandbrowns.com/team/players-roster/ |

These are dated snapshots of the published **Active** tables, not a live feed or an assertion about game-day eligibility. Practice squad, reserve/injured, suspended and other separately listed groups are excluded. Published counts may differ from 53. Transactions after verification are not automatically reflected. Each player retains an official profile URL in data.js.

Position filters group HB/FB with RB; T/G/C and combined line positions with OL; DT/DE/NT with DL; ILB/OLB with LB; CB/S with DB; K/P/LS with ST; RB/WR with RB. Cards retain the original roster position. All previous Ravens IDs, names and numbers are preserved for save compatibility. New teams use snapshot IDs; refreshes must preserve existing IDs by player identity rather than by row order.

## Colors

Team brand palettes: Baltimore purple #241773, black, gold #9E7C0C; Cincinnati orange #FB4F14 and black; Pittsburgh black #101820 and gold #FFB612; Cleveland brown #311D00 and orange #FF3C00. Brighter UI highlights are used where necessary for readable text. These conventional digital values are cross-referenced against [Team Color Codes](https://teamcolorcodes.com/nfl-team-color-codes/); exact colors can differ across uniforms and brand editions. They are not a claim of team approval or an official licensed style guide.

## Images

The public build uses original CSS jersey-number illustrations. No NFL/team logos or copied player photographs are shipped, downloaded at runtime, or redistributed. Roster publication and a publicly accessible image URL do not establish permission to display a photograph.

The prior ESPN lookup fixed Vega Ioane by matching `Olaivavega Ioane`. That alias remains in app.js. Unlicensed ESPN fetching is disabled. To add portraits, first obtain public web display permission (including any remote-hosting or redistribution restrictions), record the source URL, player identity, license, attribution, permitted uses and expiration here, then add the approved name/URL to `permittedHeadshots`. Use full normalized names and review duplicate names before adding records. Broken or absent images fall back to the jersey card. No permitted portrait records have been supplied for this release.

No endorsement or affiliation with the NFL, ESPN or any team is implied.
