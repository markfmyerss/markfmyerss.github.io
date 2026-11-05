# NFL Favorites Sorter — AFC + NFC North

Rank personal favorites from all sixteen AFC teams plus the Chicago Bears, Detroit Lions, Green Bay Packers and Minnesota Vikings. This ranks preference, not statistics or playing ability.

Live: https://markfmyerss.github.io/nfl-favorites-sorter/

- AFC/NFC conference navigation with remembered team selections.
- Four AFC divisions and the NFC North, with four teams per division.
- Team-colored player cards and official headshot sources for all 1,056 active-roster players.
- Separate browser-local rankings for each team and position filter.
- Pairwise sorting, undo, keyboard arrows, completed rankings and image exports.
- Existing AFC data, save keys, Ravens migration and dual-position support remain intact.

## GitHub-only development

No application build is needed. GitHub Pages serves the root of main. Source preparation, data ingestion, checks, browser dependencies and screenshots stay on GitHub’s runners. The workflow has read-only repository access. scripts/expand-nfc-north.cjs retrieves missing NFC North snapshots without refreshing existing teams or pushing commits; reviewed source is committed through repository tools.

GitHub validates 200 sorting combinations, every portrait URL, conference state isolation, all twenty teams in browser flows, desktop exports, and mobile PNG saving in Chromium/WebKit. Source and image limitations are in [DATA-SOURCES.md](DATA-SOURCES.md). Rosters are dated November 5, 2026 snapshots, not a live feed.

## Downloadable result cards

Desktop offers nine image sizes, PNG/JPG/WebP, All / Top 10 / Top 25, individual pages and a ZIP for the full ranking.

Phones and touch devices have a simpler interface: only 1:1, 3:4, 4:5 and 9:16; automatic PNG; and All / Top 10 / Top 25. File-format and ZIP controls are hidden and disabled. Long rankings keep Previous/Next navigation, with each page saved separately.

The mobile preview is a real PNG image with iOS image callouts enabled. Save image passes a ready PNG file to the native share sheet when supported; otherwise it directs the user to touch and hold the image for Save Image / Save to Photos. Cancelling sharing leaves the preview intact. The exact native menu is supplied by the device and browser.

exports.js generates images in the visitor’s browser without uploading rankings or adding production dependencies. CORS-restricted or unavailable portraits fall back to jerseys. Development files, browser installations, screenshots and test downloads remain on GitHub.

export-check.cjs checks all 27 desktop size/encoding combinations, image completeness, real downloads, ZIP CRCs and responsive controls. mobile-export-check.cjs checks the simplified flow using iPhone emulation in Chromium and WebKit, PNG data, native-share invocation, press-and-hold fallback, cancellation, pagination and viewport changes. The actual iOS Photos share sheet requires a physical-device check and is not automated.
