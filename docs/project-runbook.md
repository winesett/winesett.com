# Adding and maintaining Winesett projects

Winesett → Winesett Labs → product. Use **From Winesett Labs** on products.
Start with `labs.winesett.com/<slug>/`. Use `<slug>.winesett.com` when a project needs its own site, application, or deployment schedule. Domain registration is unnecessary for a new subdomain.

## Add a product page

In the sibling `labs.winesett.com` repository:

```sh
git pull --ff-only
# Create a branch for the actual project name.
git switch -c codex/new-product
npm ci
npm run new-product -- my-product "My Product"
npm run verify
npm test
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

The command creates the page, registers it in `studio-pages.json`, and updates the sitemap. It does not publish. Edit the description and development status, add a link in the appropriate homepage grid category, and review desktop/mobile layouts. The shared styles are `public/labs.css`; the starter is `templates/product.html`. Keep native app code in its own repository. Add actual store, support, privacy, and download links only when their content is ready.

Review the diff, merge to `main`, and push once. Cloudflare runs `npm run deploy` (verification followed by Wrangler). Wait for the GitHub Workers Builds check, then open the public URL. Record the release in the registry. Local previews avoid consuming hosted preview build allowances.

## Add an independent subdomain

1. Reserve a short lowercase slug in [domain-registry.md](domain-registry.md), with status `planned`, an owning repository, and a unique hosting project. Inspect the exact hostname in Cloudflare DNS and existing project domains first. Resolve any existing owner before assigning it elsewhere; do not edit unrelated records or add a wildcard.
2. Create the web repository using the hostname as its name, with a `public/` output directory, `.gitignore`, lockfile, README, and AGENTS.md. Reuse the Labs product HTML, `labs.css`, and favicon as a starting point, updating canonical URLs and making the Labs home links absolute. Start with an asset-only site; avoid adding a server, database, analytics subscription, or CMS without a demonstrated need and a free operating plan.
3. For a new static site, use the existing Labs Worker configuration as a reference. Give the Worker a unique name such as `my-product-winesett-com`, keep `assets.directory` as `./public`, and set one exact custom domain: `{ "pattern": "my-product.winesett.com", "custom_domain": true }`. Keep `workers_dev`, `preview_urls`, and observability off unless needed. Add a real 404 page. Do not copy the Labs routes, audited artifacts, Android associations, or credentials into the new project.
4. Pin Wrangler with a lockfile. Add project-appropriate verification and make `npm run deploy` run it before `wrangler deploy`. Connect the repository to Cloudflare Workers Builds: production `main`, repository root `/`, no build command for plain HTML, deploy `npm run deploy`, preview builds off. Use authorized existing account access; keep tokens in Cloudflare, never Git. Cloudflare's custom-domain configuration manages the DNS association and certificate for the exact hostname. Follow the current [custom-domain instructions](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) if the UI has changed.
5. Verify the account is still on Free before the first deployment. Push a reviewed commit, confirm the GitHub build check succeeds, and check HTTPS, home, assets, 404, mobile layout, and the link back to Labs. Mark the registry entry live with the date and actual deployment settings; link it from Labs.
6. If moving an existing product, keep its old URL working with a specific permanent redirect after the new destination works. Update canonical URLs, sitemap, grid links, and the registry. Check redirects for loops. Do not move an audited demo or its app associations as part of a simple landing-page move.

## Normal maintenance and rollback

Use the repository named in the registry. Check `git status` before pulling; preserve unrelated changes. Use `codex/` branches for work, local preview for review, then merge and push only the intended change. Production is the deployed Git commit, not an open local preview.

For a bad release, revert the offending commit on a branch, run its checks, then merge/push the revert to `main`. If an urgent dashboard rollback is used, also revert Git before the next push so the broken version does not return. Recheck the public URL and record the result.

Keep hosting and builds **free**. If a free allowance is exhausted, pause and wait or reduce work; do not enable billing, paid plans, add-ons, or automatic paid overages. Existing domain renewals are separate from this hosting policy. Review assets near 20 MiB and repositories near 500 MB before they become a deployment problem; optimize or remove unnecessary output first. Any storage alternative must also respect the free-only rule.

## References

- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Static assets](https://developers.cloudflare.com/workers/static-assets/)
- [Brand decisions](winesett-brand-and-hosting-plan.md)
