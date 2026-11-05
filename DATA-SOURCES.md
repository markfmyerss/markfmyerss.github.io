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

All 211 active-roster players have individual headshot URLs from official team/NFL servers, linked in HEADSHOTS in data.js with a source page for every player. Photos are linked remotely; no image binaries are bundled or downloaded to the development Mac. Lookup uses stable player IDs so existing saved rankings receive headshots automatically.

The four official roster pages supply 204 portraits. Seven Browns roster entries use a shared generic silhouette; those are replaced with individual NFL.com profile portraits for Derek Barnett, Mekhi Blackmon, Noah Igbinoghene, Elgton Jenkins, Jaleel McLaughlin, Toriano Pride Jr., and Sam Williams (sam-williams-4, the Mississippi defensive end). The source page for each override is recorded alongside its image. The roster pages' lazy placeholder transformation is removed, as in their own image loader.

Vega Ioane is matched directly to the Ravens portrait on his official roster row, avoiding the earlier ESPN given-name mismatch. The historical Olaivavega Ioane alias remains for compatibility.

Jersey-number cards remain the fallback for failed or missing photos. Images remain owned by their respective rights holders. Public availability is not a license grant; no independent display or redistribution license has been established. Remote URLs, availability and uniforms may change.

No endorsement or affiliation with the NFL or any team is implied.
