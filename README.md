# NFL Favorites Sorter — AFC North & East

Compare your favorite active-roster players from the Baltimore Ravens, Cincinnati Bengals, Pittsburgh Steelers Cleveland Browns, Buffalo Bills, Miami Dolphins, New England Patriots and New York Jets. This ranks personal preference, not statistics or playing ability.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- Division picker with four teams per division and remembered selections.
- Responsive team picker and team-colored player cards.
- Separate browser-local rankings for every team and position filter, restored when switching or reloading.
- Pairwise merge sorting, up to 100 undo steps, keyboard arrows, final rankings and copy/export fallback.
- Existing `nfl-sorter-ravens-v2` rankings are copied into the new save format without deleting the original.
- If browser storage is blocked or full, the app shows a warning and keeps working for the visit.

## Run and deploy

No build or dependencies. Serve this directory with any static server. GitHub Pages serves the root of `main`; changes to that branch trigger the existing Pages deployment.

`index.html`, `styles.css`, `data.js`, and `app.js` form the application. Keep these files together. `tests.cjs` exercises sorting, save isolation, migration, undo, malformed storage and portrait coverage and fallback with a minimal DOM fixture; run with `node tests.cjs` (Node 18+). Browser QA results and remaining limits are reported separately.

See [DATA-SOURCES.md](DATA-SOURCES.md) for verification date, active-roster scope, position mapping, palettes and image permissions. Rosters are dated snapshots, not live data. All eight teams’ players have official team/NFL headshot sources, with jersey illustrations as load-error fallbacks.

AFC East data is ingested on GitHub’s runner by `scripts/expand-afc-east.cjs` once. Existing team snapshots are retained. Browser QA, screenshots and image checks run on GitHub; no local development download is required.
