# Publishing this site to GitHub Pages

The approved website package is prepared for the existing `auraofintelligence/Redlands_discovers_Luke_Hayes` repository and GitHub Pages. `publication/github-settings.json` holds the prepared description, topics and website URL.

1. Use the existing public repository named `Redlands_discovers_Luke_Hayes` under `auraofintelligence`.
2. Put the contents of this package at the root of its `main` branch. Preserve `references/` and `assets/` folders and the PDF at the root. Include `.nojekyll`.
3. In repository Settings → Pages, select Deploy from a branch, `main`, `/ (root)`, then save.
4. In the repository About settings, use the description, website address and topics in `publication/github-settings.json`.
5. Open the generated Pages address after deployment and check the opening, HBOT page, P4A page, PDF and source downloads. The expected project address is recorded in the settings file and in canonical metadata.

The repository uses the custom Strange But True Public Source Licence. Preserve `LICENCE.md` exactly and leave other licence templates unselected.

If a different repository name or hosting address is used, change canonical metadata, social image URLs, `robots.txt`, `sitemap.xml` and `llms.txt` together.

The site requires no build step, database, API key or environment variable. Search engines decide when to index a newly published site.
