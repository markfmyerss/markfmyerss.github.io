# Fan Favorites — NFL + NBA

Pick your favorite players in pairs, then share your personal ranking.

Live: https://markfmyerss.github.io/

- NFL: all 32 teams, with the existing November 5, 2026 active-roster snapshots.
- NBA: Eastern Conference, Atlantic Division — Celtics, Nets, Knicks, 76ers and Raptors; 86 roster players verified November 6, 2026.
- Sport, conference, division, team and position selection; separate saved rankings for every team/filter.
- Light, Dim and Lights Out appearances; team-primary favorite buttons, headshots, undo and keyboard picks.
- Featured top three and complete rankings saved in a single image at every export size.
- Creator credit links to https://x.com/markfm18.

## Saved progress

Existing NFL keys are preserved, including `nfl-sorter-v3:CODE:POSITION`, legacy Ravens migration and remembered NFL selections. NBA uses `nba-sorter-v1:CODE:POSITION` and its own selection keys, so Philadelphia's NFL and NBA teams cannot overwrite each other. Rankings stay in the visitor's browser.

NBA filters use the NBA's G / F / C classifications. Hybrid players appear once in each relevant filter and once in the full roster.

## Sharing

Desktop offers nine image sizes, PNG/JPG/WebP and All / Top 10 / Top 25. Mobile keeps four sizes (1:1, 3:4, 4:5, 9:16), automatic PNG and the same ranges. Every selected ranking fits in one image. No pagination or ZIP is needed.

Mobile saving uses a ready PNG for native sharing where supported, with a real image for press-and-hold saving. The device controls its native Photos menus.

Root and legacy links include Open Graph and X large-image metadata in their initial HTML, pointing at the static NFL + NBA sharing PNG. Preview caches are controlled by the receiving platform.

## Sources and development

[DATA-SOURCES.md](DATA-SOURCES.md) records roster sources, snapshot dates, official image sources, palette references and rights limitations. Rosters are snapshots, not live transaction feeds. Two NBA profiles currently return a generic official placeholder and use jersey cards: Dillon Mitchell and Jaden Akins.

All preparation, browser dependencies, screenshots and test downloads run on GitHub. NBA snapshot preparation and preview rendering use read-only workflows and produce reviewable artifacts; neither workflow pushes changes. No source or development dependencies are downloaded to the owner's Mac.

Checks cover existing NFL functionality plus NBA sport switching, all 20 NBA team/filter rankings, save isolation, appearance persistence, responsive cards, official logos, headshots/fallbacks and all image-export sizes.
