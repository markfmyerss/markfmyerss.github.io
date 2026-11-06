# NFL Favorites Sorter — All 32 NFL teams

Rank your personal favorites across both conferences and all eight divisions.

Live: https://markfmyerss.github.io/

- 32 teams and 1,685 official portrait sources.
- Remembered conference/division selections and independent team/position rankings.
- Team-colored cards, pairwise sorting, undo, keyboard picks and image exports.
- Existing rankings, roster IDs, image mappings and mobile PNG behavior are preserved.
- Return and dual-position players appear in their applicable filters.

The NFC South went live before NFC West work began, as requested.

## GitHub-only development

The app is buildless and GitHub Pages serves the root of main. Roster retrieval, browser dependencies, checks, screenshots and test downloads remain on GitHub. The workflow has read-only repository access; scripts/expand-nfc-west.cjs prepares missing West data without refreshing previous teams or pushing commits. Reviewed generated source is committed through repository tools.

Checks cover 320 sorting combinations, every portrait, all 32 teams in browser flows, desktop exports and mobile PNG saving in Chromium/WebKit. Source tables, November 5, 2026 snapshot scope, position grouping, palettes and image-rights limitations are documented in [DATA-SOURCES.md](DATA-SOURCES.md). Rosters are not a live transaction feed.

## Downloadable result cards

Desktop offers nine image sizes, PNG/JPG/WebP, All / Top 10 / Top 25, individual pages and a ZIP for the full ranking.

Phones and touch devices have a simpler interface: only 1:1, 3:4, 4:5 and 9:16; automatic PNG; and All / Top 10 / Top 25. File-format and ZIP controls are hidden and disabled. Long rankings keep Previous/Next navigation, with each page saved separately.

The mobile preview is a real PNG image with iOS image callouts enabled. Save image passes a ready PNG file to the native share sheet when supported; otherwise it directs the user to touch and hold the image for Save Image / Save to Photos. Cancelling sharing leaves the preview intact. The exact native menu is supplied by the device and browser.

exports.js generates images in the visitor’s browser without uploading rankings or adding production dependencies. CORS-restricted or unavailable portraits fall back to jerseys. Development files, browser installations, screenshots and test downloads remain on GitHub.

export-check.cjs checks all 27 desktop size/encoding combinations, image completeness, real downloads, ZIP CRCs and responsive controls. mobile-export-check.cjs checks the simplified flow using iPhone emulation in Chromium and WebKit, PNG data, native-share invocation, press-and-hold fallback, cancellation, pagination and viewport changes. The actual iOS Photos share sheet requires a physical-device check and is not automated.
