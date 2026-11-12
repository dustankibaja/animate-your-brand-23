# Cloudflare Pages launch runbook

Status: owner reports Cloudflare account created. GitHub authorization, project setup, assigned public hostname and deployment verification pending. No purchase, production merge or Vercel changes.

## Preview first, using a dedicated Cloudflare release branch
1. Open Cloudflare dashboard > Workers & Pages > Create application > Pages > Connect to Git (not Workers or Direct Upload). Authorize only dustankibaja/animate-your-brand-23 if possible.
2. Project name kb-softwares (availability not guaranteed). Set production branch to release/kb-website. This isolates Cloudflare from Vercel's existing main branch. The draft PR remains open; do not merge main merely to deploy a preview.
3. Framework preset None, root directory repository root, build command node scripts/build-site.mjs, output dist. Environment variables: NODE_VERSION=22, SKIP_DEPENDENCY_INSTALL=1, SITE_PRODUCTION_BRANCH=release/kb-website, SITE_PREVIEW=1. Set SITE_URL to the exact assigned public HTTPS Pages hostname once known. With SITE_PREVIEW=1 all pages are noindex and robots disallow crawling. A preview can be public to people without being intended for indexing; enable access protection if needed.
4. Deploy the release branch and send the actual Pages URL. Check public access and preview noindex. Do not submit it for indexing yet.
5. Final launch gate: actual official logo, approved real project visuals and attribution, contact delivery, visual and accessibility review, current CI, owner approval. Update release branch to the reviewed commit. Set SITE_URL to the actual Pages production origin, SITE_PREVIEW=0; deploy again. The build refuses an indexable Cloudflare production deployment if SITE_URL is missing. Other branches remain noindex.
6. Run node scripts/check-public-site.mjs https://<actual-project>.pages.dev after launch; verify robots/sitemap/canonical, anonymous status, 404, structured data and crawler behavior. Review Cloudflare AI crawler settings; allow OAI-SearchBot. Submit Google Search Console and Bing sitemap only after passing public checks. No ranking guarantee.

Official docs: https://developers.cloudflare.com/pages/configuration/git-integration/ ; https://developers.cloudflare.com/pages/configuration/build-configuration/ ; https://developers.cloudflare.com/pages/configuration/branch-build-controls/
