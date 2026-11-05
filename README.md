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

## Downloadable result cards

Finished rankings include a preview and explicit image downloads. Nine size presets cover 1:1, 3:4, 4:5, 9:16, 16:9, 4:3, 3:2, 2:3 and 1200×630 link cards. PNG, JPG and WebP are available, with all players, top 10 or top 25. Long rankings paginate without dropping players; download the current page or one ZIP of every page.

exports.js uses native canvas and ZIP generation, without production dependencies or a server upload. Photos use anonymous CORS loading and fall back to jersey numbers when unavailable, keeping images downloadable. Browsers without a requested encoder can fall back to PNG, with the truthful file extension shown. Nothing downloads until the visitor presses a download button.

export-check.cjs verifies real downloaded bytes, all 27 size/encoding variants, player order and completeness, pagination, top ranges, ZIP CRCs, blocked photos, stale-result cancellation and responsive controls. All test downloads and screenshots stay on GitHub’s runner. A visitor’s intentional result download is distinct from the GitHub-only development workflow.
