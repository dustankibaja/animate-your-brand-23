# Cloudflare Pages launch runbook

Status: account creation and GitHub authorization pending; no live Cloudflare deployment or purchase. Production stays unchanged until approval.

1. Create a free Cloudflare account and verify email. In Workers & Pages, create a **Pages** project using Git integration (not Workers or Direct Upload).
2. Authorize only dustankibaja/animate-your-brand-23 if possible. Project name kb-softwares (availability not guaranteed). Production branch main; preview branch feature/global-ai-visibility.
3. Framework preset None, root directory repository root, build command node scripts/build-site.mjs, output dist. Set NODE_VERSION=22 and SKIP_DEPENDENCY_INSTALL=1 (the static generator uses only Node standard library). Set SITE_URL to the exact assigned public HTTPS Pages hostname. Do not use a preview URL as the canonical.
4. IMPORTANT: main still contains the original React site. Do not deploy it as the finished website. Either wait for reviewed merge before creating production or disable production builds while previewing the feature branch. For the preview, SITE_PREVIEW=1 and verify noindex. Cloudflare may offer authenticated previews; keep unfinished site out of public search.
5. After brand assets, project permissions and contact delivery are verified, review CI and screenshots, merge with owner approval, deploy main and inspect public HTTP/HTTPS, sitemap, robots, canonicals, noindex headers, 404 behavior, links and contact links. Set SITE_URL to the actual Pages hostname before final production deployment.
6. Verify Google Search Console URL-prefix property and Bing Webmaster Tools, submit sitemap, test ChatGPT Search discovery. No ranking guarantee.

Official docs: https://developers.cloudflare.com/pages/configuration/git-integration/ and https://developers.cloudflare.com/pages/configuration/build-configuration/
