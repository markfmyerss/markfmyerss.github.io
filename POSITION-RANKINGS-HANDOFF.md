# Paused: league-wide position rankings

User explicitly requested pausing and saving the work for tomorrow. Do not resume development until requested. This branch is a work in progress and has not been deployed or tested. The live site remains on the prior tested release, with Tuesday roster updates unchanged.

## Confirmed scope
Add a By team / By position tab inside each sport. By position ranks favorites across every current team in that sport, rather than one team's existing position filter.
- NFL: QB, RB, WR, TE, OL, DL, LB, DB, ST.
- NBA: G, F, C; hybrid players can appear in each relevant pool, once per pool.
- Preserve all team rankings, creator credits, headshots, existing appearances and current weekly-update behavior.
- Separate progress for each sport/league-wide position.
- Keep sharing and image downloads, including four mobile ratios, PNG, All / Top 10 / Top 25, no mobile ZIP.

## Work saved
- app.js: synthetic league contexts in ALL_TEAM_INFO only (SPORTS team lists remain actual 32/30 clubs), tabs and position tiles, per-player club colors and labels, compact index-based save and undo records, independent keys, v2 two-byte permutation links for pools above 255 players, historical league snapshots, mode preferences and roster rollover.
- exports.js: larger single-image layouts for large pools, limited output dimensions, club labels, bounded thumbnail loading/bitmap resizing, league icons, expanded result fingerprint and preserved mobile controls.
- index.html/styles.css: new mode navigation and responsive position grid, contextual descriptions.
- scripts/roster-tools.cjs: per-position v2 league archives, including each player's club in the stamp, alongside unchanged team archives.
- weekly/current roster checks and weekly workflow: integrate league snapshots and new checks.
- New position unit/browser tests cover all 12 pools, large-pool links, compact progress, undo, isolation, responsive cards, image ratios, and historical links.
- scripts/export-position-archives.cjs emits initial league archives as chunked JSON in GitHub job logs, avoiding Mac downloads.
- assets/league-nfl.svg and assets/league-nba.svg are original sport icons, not official league logos.

## Resume checklist
1. Inspect the current main head and this branch before resuming; keep any intervening changes.
2. Run syntax checks and the new position-rankings-check.cjs and position-rankings-browser-check.cjs on GitHub. None have run yet. The pause commit uses [skip ci] intentionally.
3. Fix any implementation/test issues. In particular review all integration points in app.js, compact saves/undo, v1 compatibility, v2 league archive validation, synthetic contexts and mode switching.
4. Review dense export layout/typography, thumbnail memory handling and actual footer sizing. Ensure all names and club labels fit, correct ratios, one image, and four mobile choices.
5. Run existing NFL/NBA, weekly snapshot, sharing, appearance and export checks. New archive totals include 12 league pools; team-only counts must remain 32/30.
6. Update README/DATA-SOURCES for the new feature and any actual limitations; these docs have not yet been changed for position mode.
7. Capture emitted league snapshot JSON from the GitHub job logs and commit initial league archives/index with the release. Do not change current roster dates merely to add this feature.
8. Publish only after passing checks, then verify the live site and existing headshot fixes.

## Environment and authorization
- Repository: markfmyerss/markfmyerss.github.io
- Live: https://markfmyerss.github.io/
- Work started from main commit f70fbab48b13e8a451e0a2b3aa2ccd47398194f8.
- User prohibits downloading source, assets or development dependencies to the Mac. All implementation, source retrieval, tests, screenshots and image handling must stay on GitHub. GitHub connectors and in-memory orchestration have been used exclusively.
- User previously authorized GitHub implementation and deployment, but has now explicitly paused. Do not deploy this work while paused.
- Existing production weekly workflow runs Tuesdays at 08:00 America/New_York. Its first real automatic run verified and published all 62 teams. Keep it intact.
