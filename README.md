# NFL Favorites Sorter — 28 teams

Rank favorites across all AFC teams and NFC North, East and South, now including the Falcons, Panthers, Saints and Buccaneers.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- 28 teams, seven divisions and 1,475 official portrait sources.
- Remembered conference/division choices and separate team/position rankings.
- Team-colored cards, pairwise sorting, undo, keyboard picks and image exports.
- Existing teams, saved-ranking keys and mobile PNG saving remain intact.
- Return-specialist support includes Barion Brown in WR and ST.

## GitHub-only development

The app is buildless and GitHub Pages serves main. Roster preparation, dependencies, tests, screenshots and test downloads stay on GitHub. The workflow has read-only repository access. scripts/expand-nfc-south.cjs prepares missing South snapshots without refreshing previous teams or pushing commits.

Checks cover 280 sorting combinations, every headshot, browser flows for every team, and desktop/mobile export suites. Source scope, official links, November 5, 2026 snapshot date and image rights are in [DATA-SOURCES.md](DATA-SOURCES.md).

## Downloadable result cards

Desktop offers nine image sizes, PNG/JPG/WebP, All / Top 10 / Top 25, individual pages and a ZIP for the full ranking.

Phones and touch devices have a simpler interface: only 1:1, 3:4, 4:5 and 9:16; automatic PNG; and All / Top 10 / Top 25. File-format and ZIP controls are hidden and disabled. Long rankings keep Previous/Next navigation, with each page saved separately.

The mobile preview is a real PNG image with iOS image callouts enabled. Save image passes a ready PNG file to the native share sheet when supported; otherwise it directs the user to touch and hold the image for Save Image / Save to Photos. Cancelling sharing leaves the preview intact. The exact native menu is supplied by the device and browser.

exports.js generates images in the visitor’s browser without uploading rankings or adding production dependencies. CORS-restricted or unavailable portraits fall back to jerseys. Development files, browser installations, screenshots and test downloads remain on GitHub.

export-check.cjs checks all 27 desktop size/encoding combinations, image completeness, real downloads, ZIP CRCs and responsive controls. mobile-export-check.cjs checks the simplified flow using iPhone emulation in Chromium and WebKit, PNG data, native-share invocation, press-and-hold fallback, cancellation, pagination and viewport changes. The actual iOS Photos share sheet requires a physical-device check and is not automated.
