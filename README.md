# CampusHub

CampusHub is a static campus-life dashboard with an assignment planner, an illustrative map, events, study resources, weather, and preferences. It uses HTML, CSS, Bootstrap 5 and JavaScript modules; no build step or server-side application is needed.


## Features and configuration

- Add, complete and delete assignments; they persist in this browser's localStorage and appear on the dashboard.
- Filter campus locations and browse upcoming example events. Replace the illustrative map and example location and event data in `assets/campus-map.svg` and `js/data.js` with your campus information.
- Filter curated study resources and search Open Library by title.
- The weather card uses Open-Meteo and currently defaults to New York City. Set the campus latitude and longitude in `js/dashboard.js` before publishing for a specific campus.
- Set a display name and light or dark theme in Settings. Reset affects preferences only, not assignments.

API requests show loading, empty or error messages as appropriate. Browser storage is local to the device and can be cleared by the browser.

## Checks

JavaScript syntax can be checked with `node --check` on each file in `js/`. Verify all six pages at desktop and mobile sizes, keyboard navigation, adding/completing/deleting a task after reload, preferences after reload, filters, API success and failure, and empty results before release.


## Future work

Replace sample data and map artwork with real campus content and imagery; configure campus weather coordinates; add more robust browser and accessibility tests, and consider a campus-maintained events feed.
