# League-wide position rankings

Resumed November 7, 2026. Implements By team / By position tabs within each sport. NFL supports QB/RB/WR/TE/OL/DL/LB/DB/ST; NBA supports G/F/C. Pools include every matching player from the sport's published team snapshots, with hybrid memberships deduplicated within each group.

Validation has passed for all 12 position pools, independent mode/sport/team saves, compact undo and progress, v1 and v2 sharing, historical league rosters, weekly rollover, mobile layouts and image exports. The largest current pool contains 324 players. Its full image was checked at 3240×3240, with all names and photos present. Existing team and weekly workflows remain covered by the regression suite.

Initial league snapshot files are emitted by scripts/export-position-archives.cjs and included with publication. scripts/roster-tools.cjs adds future league snapshots to the normal Tuesday refresh. The weekly schedule remains Tuesday 08:00 America/New_York.

All source retrieval, code changes, dependencies, tests, screenshots and publishing stay on GitHub. Do not download the site or development dependencies to the owner's Mac.
