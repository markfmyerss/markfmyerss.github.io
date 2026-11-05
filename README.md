# NFL Favorites Sorter — AFC + NFC North & East

Rank your favorites from all sixteen AFC teams and the eight NFC North/East teams, including the Cowboys, Giants, Eagles and Commanders.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- 24 teams across six divisions, with remembered AFC/NFC selections.
- Official active-roster snapshots and headshot sources for all 1,266 players.
- Team-colored cards, pairwise sorting, undo, keyboard picks and copyable rankings.
- Independent browser-local progress for every team and position filter.
- All twenty previous teams’ metadata, players, portraits and save keys remain unchanged.

## GitHub-only development

The application is buildless; GitHub Pages serves the root of main. Source preparation, roster retrieval, browser tools, test downloads and screenshots stay on GitHub’s runners. The workflow has read-only repository access. scripts/expand-nfc-east.cjs prepares missing East data without refreshing earlier snapshots or pushing commits. Reviewed generated source is committed through repository tools.

Checks cover 240 sorting combinations, every headshot URL, all 24 teams in browser flows, NFC mobile PNG exports, and the full desktop/mobile image-export suites.

See [DATA-SOURCES.md](DATA-SOURCES.md) for official sources, the November 5, 2026 snapshot scope, position mapping, palettes and image-rights limitations. The roster is not a live transaction feed.

## Downloadable result cards

Desktop offers nine image sizes, PNG/JPG/WebP, All / Top 10 / Top 25, individual pages and a ZIP for the full ranking.

Phones and touch devices have a simpler interface: only 1:1, 3:4, 4:5 and 9:16; automatic PNG; and All / Top 10 / Top 25. File-format and ZIP controls are hidden and disabled. Long rankings keep Previous/Next navigation, with each page saved separately.

The mobile preview is a real PNG image with iOS image callouts enabled. Save image passes a ready PNG file to the native share sheet when supported; otherwise it directs the user to touch and hold the image for Save Image / Save to Photos. Cancelling sharing leaves the preview intact. The exact native menu is supplied by the device and browser.

exports.js generates images in the visitor’s browser without uploading rankings or adding production dependencies. CORS-restricted or unavailable portraits fall back to jerseys. Development files, browser installations, screenshots and test downloads remain on GitHub.

export-check.cjs checks all 27 desktop size/encoding combinations, image completeness, real downloads, ZIP CRCs and responsive controls. mobile-export-check.cjs checks the simplified flow using iPhone emulation in Chromium and WebKit, PNG data, native-share invocation, press-and-hold fallback, cancellation, pagination and viewport changes. The actual iOS Photos share sheet requires a physical-device check and is not automated.
