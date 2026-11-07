# Fan Favorites — NFL + NBA

Pick your favorite players in pairs, then share your personal ranking.

Live: https://markfmyerss.github.io/

- NFL: all 32 teams, with weekly verified active-roster snapshots.
- NBA: all 30 teams, with weekly verified roster snapshots across both conferences and all six divisions.
- Sport, conference, division, team and position selection; separate saved rankings for every team/filter.
- Light, Dim and Lights Out appearances; team-primary favorite buttons, headshots, undo and keyboard picks.
- Featured top three and complete rankings saved in a single image at every export size.
- Creator credit links to https://x.com/markfm18.

## Saved progress

Existing NFL keys are preserved, including `nfl-sorter-v3:CODE:POSITION`, legacy Ravens migration and remembered NFL selections. NBA uses `nba-sorter-v1:CODE:POSITION` and its own selection keys, so Philadelphia's NFL and NBA teams cannot overwrite each other. Rankings stay in the visitor's browser.

NBA filters use the NBA's G / F / C classifications. Hybrid players appear once in each relevant filter and once in the full roster.

## Sharing

Completed rankings can be shared as compact links. Recipients see a clearly labeled shared ranking without replacing their own saved picks, and can choose to rank those players themselves. Native sharing is used where available, with clipboard and manual-copy fallbacks. Links encode the selected sport, team, filter and player order in the URL fragment; no ranking database or upload is required. Shared links load an archived roster when the current roster has changed, preserving the original names and order. Image sharing remains available for lasting copies.

Roster verification dates appear directly below the team/position controls, using each team's published snapshot date rather than suggesting live roster updates.

Desktop offers nine image sizes, PNG/JPG/WebP and All / Top 10 / Top 25. Mobile keeps four sizes (1:1, 3:4, 4:5, 9:16), automatic PNG and the same ranges. Every selected ranking fits in one image. No pagination or ZIP is needed.

Mobile saving uses a ready PNG for native sharing where supported, with a real image for press-and-hold saving. The device controls its native Photos menus.

Root and legacy links include Open Graph and X large-image metadata in their initial HTML, pointing at the static NFL + NBA sharing PNG. Preview caches are controlled by the receiving platform.

## Sources and development

[DATA-SOURCES.md](DATA-SOURCES.md) records roster sources, snapshot dates, official image sources, palette references and rights limitations. Rosters are snapshots, not live transaction feeds. All 524 NBA players have hosted portraits. Verified ESPN team headshots replace the NBA placeholders for Dillon Mitchell, Jaden Akins and Henri Veesaar; source URLs and hashes are recorded in `assets/nba/headshots/espn-overrides.json`. Image rights remain with their respective owners.

All preparation, browser dependencies, screenshots and test downloads run on GitHub. NBA snapshot preparation and preview rendering use read-only workflows and produce reviewable artifacts; neither workflow pushes changes. No source or development dependencies are downloaded to the owner's Mac.

Checks cover existing NFL functionality plus NBA sport switching, all 120 NBA team/filter rankings, save isolation, appearance persistence, responsive cards, official logos, headshots/fallbacks and all image-export sizes.

Central adds the Bulls, Cavaliers, Pistons, Pacers and Bucks. Its additive data file preserves the published Atlantic snapshot and all existing save keys.

Southeast adds the Hawks, Hornets, Heat, Magic and Wizards through another additive data file, preserving NFL, Atlantic and Central source files and existing progress.

Northwest adds the Nuggets, Timberwolves, Thunder, Trail Blazers and Jazz. ESPN is the default secondary image source whenever NBA.com has no usable portrait, with team roster identity checks before use. Existing NFL and Eastern Conference snapshots and ranking keys are preserved.

Pacific adds the Warriors, Clippers, Lakers, Suns and Kings with 89 portraits and separate progress per team. Southwest completes the NBA with the Mavericks, Rockets, Grizzlies, Pelicans and Spurs, adding 88 portraits.

## Tuesday roster updates

The `Weekly roster refresh` GitHub workflow runs Tuesdays at **8:00 a.m. America/New_York**, including daylight-saving changes. GitHub may queue scheduled runs, so publication can finish later. A manual run defaults to a dry run.

Official NFL active tables and NBA structured team rosters are validated before publication. New NBA portraits use NBA.com first and ESPN's matching team roster second. Current valid portraits and the existing Vega Ioane fix are retained. A source or portrait failure keeps that team's previous roster and verification date; cross-team identity conflicts retain the affected league's previous snapshot. No source, image files or dependencies are downloaded to the owner's Mac.

`weekly-rosters.js` supplies the latest approved rosters after the original baseline data files. `assets/roster-refresh-status.json` records the latest check, team results and retained sources. Original files and counts in DATA-SOURCES describe historical baselines.

The refresh archives the previous and new roster versions together before publishing. Old shared links resolve through `assets/roster-snapshots/index.json`. New NBA image assets have immutable content-based filenames so historical links can keep their photos.

Saved rankings stay in the visitor's browser. An earlier roster remains sortable, and **Start with latest roster** saves the old ranking under **Previous rankings** before starting a fresh one. A failed archive write leaves the current ranking untouched.

The workflow stages changes on a GitHub runner, validates archives, identities and portraits, runs browser checks, and only then commits the candidate. Non-forced publishing rejects a candidate if main changed during validation. GitHub's Pages API explicitly rebuilds the bot commit and the workflow checks the live verification record. It needs no personal token or always-on computer.
