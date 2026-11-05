# NFL Favorites Sorter — AFC North, East & South

Rank your favorite players from twelve NFL teams, with official roster snapshots and headshots. This ranks personal preference, not statistics or playing ability.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- Three division buttons, four teams per division, remembered team selection.
- Separate browser-local rankings for every team and position filter.
- Pairwise sorting, up to 100 undo steps, keyboard arrows, final rankings and copy fallback.
- Official team/NFL headshots for all 632 players; jersey cards if an image fails.
- Travis Hunter appears in both WR and DB filters, once in the full roster.
- Existing Ravens migration and all North/East saves remain supported.
- If browser storage is blocked or full, the app warns and continues for the visit.

## Development and deployment

No application build is required. GitHub Pages serves the root of main. Keep index.html, styles.css, data.js and app.js together.

All development source, data ingestion and validation stay on GitHub. The workflow has read-only repository access. scripts/expand-afc-south.cjs prepares missing South data on the runner without refreshing existing snapshots or pushing commits. The reviewed snapshot is then committed using repository tools.

GitHub runs node tests.cjs (120 sorting combinations and state checks), node headshots-check.cjs (every remote image), and browser-check.cjs (all teams and four viewport sizes). Browser dependencies and screenshot artifacts exist on GitHub’s runners, not the user’s Mac.

See [DATA-SOURCES.md](DATA-SOURCES.md) for the November 5, 2026 snapshot scope, official sources, position mapping and image rights limitations. Rosters are dated snapshots, not a live feed.
