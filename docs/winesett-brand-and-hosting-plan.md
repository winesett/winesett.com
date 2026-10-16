# Winesett brand and hosting plan

Winesett is the parent brand. Winesett Labs is its creative studio and home for experiments and products, including Fold War. The brand relationship is Winesett → Winesett Labs → Fold War. Individual products can develop their own names and visual character while retaining their studio attribution.

## Brand and address structure

| Level | Name and address | Purpose |
| --- | --- | --- |
| Parent brand | Winesett · `winesett.com` | The central identity and connection between projects. The current personal portfolio stays in place until its evolution is designed. |
| Creative studio | Winesett Labs · `labs.winesett.com` | An open-ended collection of experiments and emerging products. |
| First product | Fold War, from Winesett Labs · `labs.winesett.com/fold-war/` | The initial product landing page, later including release, support, and privacy information. |
| Independent product | Product name · `<product>.winesett.com` | An optional permanent home when a product needs separate navigation, hosting, or release management. |

Use “From Winesett Labs” on Fold War and other products created by the studio. Use “An experiment from Winesett Labs” for experiments. Winesett remains the parent brand; a dedicated product subdomain does not change the studio attribution. Carry the parent typography, grid, and yellow marker details through studio pages. Product experiences may have their own art direction; Fold War can retain its navy, cream, and orange palette.

New ideas start as paths under Labs. Give an idea a subdomain when it has a distinct audience, substantial site, independent application, or separate deployment needs. Use short lowercase names, with hyphens only when needed. If a product moves, redirect its old landing URL and keep support links working.

## Housekeeping sequence

Keep hosting and deployment on free tiers. Do not enable paid plans, billable add-ons, or automatic paid overages without Cody’s explicit approval. If a free allowance is exhausted, pause the affected operation rather than upgrade.

The housekeeping foundation is in place:

1. **Source of truth:** portfolio in `winesett/winesett.com`; studio in `winesett/labs.winesett.com`. The duplicate local studio preview has been retired.
2. **Automatic deployment:** existing Labs Worker connected to `main`, running `npm run deploy` before publication. The portfolio retains its existing Pages connection.
3. **Review and rollback:** local previews, repository checks, reviewed changes to `main`, and Git revert/redeploy are documented in the [project runbook](project-runbook.md).
4. **Ownership:** the [domain registry](domain-registry.md) records actual hosting projects, bound hostnames, important paths, and verification dates. Both repositories have AGENTS.md guidance.
5. **Reusable starter:** Labs has `npm run new-product -- slug "Name"`, a shared HTML template and stylesheet, a validated studio-page registry, and automatic sitemap updates. Audited demo provenance remains separate.

## Adding a subdomain

Choose the name and owning repository, reuse the static starter where it fits, connect Git deployment, and bind the exact hostname to its hosting project. Verify HTTPS, homepage, assets, 404 behavior, and return links to Winesett. Add the result to the domain registry and Labs grid. Reuse the existing hosting when a new path is sufficient; create a separate deployment when the product needs independence.

Keep static sites simple. Add a CMS, backend, or shared package only when repeated work demonstrates a need. Review storage when a single asset approaches 20 MiB or the Git repository approaches 500 MB; these are housekeeping thresholds, not platform limits. Put large media or downloads in appropriate object storage when needed.

## Current release status

Verified October 16, 2026: the studio and Fold War landing page are live from Labs commit `01af12c`. Cloudflare Workers Builds is connected to `winesett/labs.winesett.com`, deploying `main` with `npm run deploy`; the first Git-triggered build passed. All eight experiment routes are preserved and their collection is at `/experiments/`. HTTPS responses for the homepage, product page, collection, one existing experiment, stylesheet, and 404 matched the deployed source.

Cloudflare remains on the $0 Free plan. Production builds are enabled, preview builds are disabled, and the existing custom domain binding is unchanged. The canonical local Labs checkout is synchronized with production.

New subdomains remain optional; Fold War currently uses its direct product path. Use the runbook and registry for the next project.
