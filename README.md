# NFL Favorites Sorter — AFC North

Compare your favorite active-roster players from the Baltimore Ravens, Cincinnati Bengals, Pittsburgh Steelers and Cleveland Browns. This ranks personal preference, not statistics or playing ability.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- Responsive team picker and team-colored player cards.
- Separate browser-local rankings for every team and position filter, restored when switching or reloading.
- Pairwise merge sorting, up to 100 undo steps, keyboard arrows, final rankings and copy/export fallback.
- Existing `nfl-sorter-ravens-v2` rankings are copied into the new save format without deleting the original.
- If browser storage is blocked or full, the app shows a warning and keeps working for the visit.

## Run and deploy

No build or dependencies. Serve this directory with any static server. GitHub Pages serves the root of `main`; changes to that branch trigger the existing Pages deployment.

`index.html`, `styles.css`, `data.js`, and `app.js` form the application. Keep these files together. `tests.cjs` exercises sorting, save isolation, migration, undo, malformed storage and portrait fallback with a minimal DOM fixture; run with `node tests.cjs` (Node 18+). Browser QA results and remaining limits are reported separately.

See [DATA-SOURCES.md](DATA-SOURCES.md) for verification date, active-roster scope, position mapping, palettes and image permissions. Rosters are dated snapshots, not live data. Jersey illustrations are the default until licensed headshots are documented.
