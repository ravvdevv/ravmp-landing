# RavMP Landing Page

The official website for **RavMP**, a launcher for Grand Theft Auto: San Andreas multiplayer.

- Website: https://ravmp.site/
- Community: https://discord.gg/2t3RzB5vR5
- GitHub profile: https://github.com/ravvdevv

## What this repository contains

This repository contains the static website and release-download routing for RavMP. It is separate from the Windows and Android launcher application source code.

- Responsive landing page with feature, download, requirements, FAQ, and release-history sections
- Download links for Windows releases and Android APKs
- Android update metadata in `version.json`
- Legacy Android APK redirects and security/cache headers in `vercel.json`
- Search-engine metadata, `robots.txt`, `sitemap.xml`, and `llms.txt`

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Main page markup and SEO metadata |
| `css/styles.css` | Website styles |
| `js/app.js` | Page content, navigation, ticker, downloads, and release display |
| `icon.png` | Site and app icon used by the page |
| `version.json` | Android updater's version and ABI-specific download URLs |
| `vercel.json` | Hosting configuration, redirects, and response headers |
| `404.html` | Not-found page |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Crawler and site-discovery files |
| `CONTRIBUTING.md` | Commit message conventions and contribution setup |

## Run locally

This is a static site and does not require a package manager or build step.

1. Clone the repository.
2. Open the folder in your terminal.
3. Start any local static HTTP server. For example, with Python installed:

   ```bash
   python -m http.server 8000
   ```

4. Visit http://localhost:8000.

Opening `index.html` directly may work for basic viewing, but using a local HTTP server is closer to the deployed environment and avoids browser restrictions around local files.

## Updating releases

### Windows downloads

The current Windows version and download links are configured in `js/app.js`. The site expects release assets to follow the naming pattern used by the GitHub releases, for example:

- `RavMP_<version>_x64-setup.exe`
- `RavMP_<version>_x64_en-US.msi`

Check the actual release assets before changing a version or publishing links.

### Android updater metadata

When publishing a new Android release:

1. Publish the intended APKs as GitHub Release assets with the expected ABI-specific filenames.
2. Update `version.json` with the matching `versionCode`, `versionName`, release URLs, and release notes.
3. Keep `downloadUrlArm64` and `downloadUrlArmv7` pointed at the corresponding APK assets.
4. Check that the website's Android version and download links in `js/app.js` agree with the release.
5. Verify the published JSON and both APK URLs after deployment.

The version metadata and release assets must agree. A version number that gets ahead of the actual APKs can cause update checks to offer a release that does not match the downloaded package.

### Legacy download redirects

`vercel.json` redirects the legacy paths under `/bin/` to the latest matching Android APK on GitHub Releases. Keep the redirect destination filenames aligned with the published assets.

## Deployment

The repository includes `vercel.json` and is structured for static hosting on Vercel. Connect the repository to a Vercel project and deploy the root directory; no framework build command is required for the current static site.

After deployment, verify the homepage, `/version.json`, the download links, and the legacy APK redirects. A successful deployment alone does not prove that every external release asset is correct.

## Contributing

- Keep changes focused and preserve the existing visual design unless a UI change is intentional and reviewed.
- Test layout and download links before publishing changes.
- Use Conventional Commits. See [CONTRIBUTING.md](CONTRIBUTING.md) for the accepted format and local Git hook setup.

## Disclaimer

Grand Theft Auto: San Andreas is a game by its respective rights holders. RavMP is a third-party launcher project and is not an official Rockstar Games product.
