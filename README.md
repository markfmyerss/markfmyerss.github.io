# NFL Favorites Sorter — The complete AFC

Rank your favorite players from all 16 AFC teams. This ranks personal preference, not statistics or playing ability.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- Four divisions: AFC North, East, South and West; four teams per division.
- Phone-friendly division buttons and team-colored player cards.
- Separate browser-local rankings for each team and position filter.
- Pairwise sorting, up to 100 undo steps, keyboard arrows, final rankings and copy fallback.
- Official team/NFL headshots for all 844 active-roster players, with jersey fallbacks.
- Dual-position support, including Travis Hunter in WR and DB filters.
- Existing rankings and Ravens migration remain supported.
- If browser storage is blocked or full, a warning explains that picks last for the visit.

## GitHub-only development

The app requires no build. GitHub Pages serves the root of main. Keep index.html, styles.css, data.js and app.js together.

Source preparation, data ingestion, validation and screenshots run on GitHub’s runners. The workflow has read-only repository access. scripts/expand-afc-west.cjs prepares missing West data without refreshing earlier teams or pushing commits; the reviewed snapshot is committed through GitHub repository tools.

GitHub runs node tests.cjs (160 sorting combinations and state checks), node headshots-check.cjs (every image URL), and browser-check.cjs (all sixteen teams and four viewport sizes). Browser dependencies and screenshot artifacts remain on GitHub rather than the user’s Mac.

See [DATA-SOURCES.md](DATA-SOURCES.md) for official sources, the November 5, 2026 snapshot scope, position mapping, palettes and image rights limitations. Rosters are dated snapshots, not live data.
