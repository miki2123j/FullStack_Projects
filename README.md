# FullStack_Projects

**Overview**

- **Description:** A collection of small front-end projects and interactive demos built with plain HTML, CSS, and JavaScript. Each project is self-contained in its own folder and can be run directly in a browser or served with a simple static server.

**Project List**

- **CookieConsent:** `CookieConsent/` — A demo showing a cookie consent banner and handling user choice.
- **InstagramClone:** `InstagramClone/` — A visual clone / UI mock of an Instagram-like feed and layout.
- **MemePicker:** `MemePicker/` — A small app for browsing or picking memes.
- **NFTsite:** `NFTsite/` — Static landing page example for an NFT collection.
- **PasswordGenerator:** `PasswordGenerator/` — Generates secure random passwords with adjustable options.
- **Skynet:** `Skynet/` — Interactive front-end demo (JS/CSS) — see folder for details.
- **UnitConverter:** `UnitConverter/` — Converts between common units (length, weight, etc.).

**How to Open / Run Locally**

- Quick (double-click): Open any project's `index.html` directly in your browser (works for most simple demos).
- Recommended (static server): Run a local static server from the repository root so all features (fetches, relative routing) work reliably.

	- Using Python 3 (built-in):

		```bash
		python3 -m http.server 8000
		```

	- Using Node (http-server):

		```bash
		npx http-server . -p 8000 -c-1
		```

	Then open `http://localhost:8000/<ProjectFolder>/` (for example `http://localhost:8000/MemePicker/`).

**Notes & Tips**

- Each project is intentionally small and focused on front-end skills (HTML/CSS/vanilla JS).
- Look inside each folder for `index.html`, `index.css`, `index.js`, and an `images/` directory when present.
- If a demo uses external resources (APIs or CDN assets), ensure you are online or update resource links for offline use.

**Contributing**

- Feel free to open issues, add improvements, or expand individual projects. Keep changes scoped to a single project per pull request for clarity.

**Contact**

- Repo owner: `miki2123j` — https://github.com/miki2123j

**License**

- No license specified. Add a `LICENSE` file if you want to make the projects open-source under a specific license.

