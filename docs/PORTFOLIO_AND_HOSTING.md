# Portfolio evidence and launch decisions — 2026-11-12

## Public-facing candidates
- Albastini: public repository README confirms official product website, SSR stack, bilingual content, QA handoff; founder web/design role. Draft case study added. Screenshot in Library (screenshot-desktop.png) recovered, but do not reuse third-party brand assets without approval; verify current live site and use fresh approved screenshots.
- GariLink: repository documents Flutter rental-first architecture and QA, but hosted migration certification is explicitly limited. Draft case study added, no production claim.
- Football Intelligence: public README documents research-only pipeline and explicit commercial data/validation gates. Draft case study added, no accuracy or profitability claim.
- Winger: founder/CTO marketplace and engineering work; co-owned product, not KB client. Hold public case study pending cofounder approval and security/public-repository review; repository has environment files and a documented dev auth bypass, so do not promote source publicly until reviewed.
- WiFiGate: private client voucher system, potential flagship B2B case study. Never expose private source, real voucher codes, client records or credentials. Use a sanitized demo and obtain client permission.
- HQ Logistics and Tanzania Energies: repository names recovered; validate actual project scope, ownership, URLs and delivery before publication.

## Hosting
Select Cloudflare Pages Free for static marketing website (no functions, card data, or paid services). Official docs: https://developers.cloudflare.com/pages/platform/limits/ and https://developers.cloudflare.com/pages/functions/pricing/ . Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/ . Confirm account terms during setup. Netlify Free is fallback with 300 monthly credits/hard cap. Vercel Hobby is non-commercial only. Do not use GitHub Pages for commercial business website.
Use Git integration, repo dustankibaja/animate-your-brand-23, production branch main only after QA and merge; build node scripts/build-site.mjs; output dist; SITE_URL final assigned https://<project>.pages.dev origin. Preview branches noindex. No purchase. Verify deployed URL, HTTP status, canonical, sitemap, bot access and enquiry. Do not change Vercel or production before approval.
