# Static website
The production build now generates static HTML from `site/` into `dist/`. Existing React code is preserved for reference; it is no longer the production website. Run `npm run test:site` and `npm run dev`. Set SITE_URL to the final public HTTPS origin before deployment. Do not publish until contact details, logo, claims, visual QA and hosting eligibility are verified. Cloudflare Pages: build command `npm run build`, output `dist`. A custom domain is optional. Preview deployment must not be indexed.

Preview safety: Vercel preview, non-main Cloudflare Pages branches, or SITE_PREVIEW=1 produce noindex HTML, a disallow-all robots file and a Cloudflare X-Robots-Tag header. Production validation must run without those preview variables.
