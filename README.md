# winesett.com

Portfolio site for Cody Winesett, a product design leader focused on AI-assisted design workflows, design systems, enterprise UX, website migration tooling, and production quality gates.

## Why I built it

This site is the public portfolio and positioning layer for my work across product design leadership, AI-assisted production workflows, and large-scale digital experience delivery.

## What it does

- Presents a concise product design leadership profile.
- Highlights selected work across Microsoft.com, FedEx fdx, and TrueBlue.
- Connects to portfolio, LinkedIn, and GitHub destinations.
- Keeps the current site as a small static HTML/CSS deployment.
- Supports Cloudflare Pages deployment through `wrangler.jsonc`.

## Maintenance

- [Domain registry](docs/domain-registry.md): website addresses, repository owners, and hosting settings.
- [Project runbook](docs/project-runbook.md): add a product, set up a subdomain, deploy, and roll back.
- [Brand and hosting decisions](docs/winesett-brand-and-hosting-plan.md): Winesett → Winesett Labs → products.
- Studio source: [winesett/labs.winesett.com](https://github.com/winesett/labs.winesett.com), in the sibling checkout.

The live portfolio uses Cloudflare Pages project **winesett**, connected to GitHub `main`. The build command is `node scripts/build-site.mjs`, with output `dist/`. The script packages only tracked website files; stage intentional new assets before a local build. Hosting and builds stay free. This repository also contains existing protected case-study and KindleMesh distribution routes; preserve them during housekeeping.

## Screenshots

Screenshots coming soon.

## Notes

This repository is part of a broader working lab around AI-assisted design workflows, design systems, website migration tooling, and production quality gates. It should stay plain, readable, and easy to audit.

Portfolio: https://winesett.com<br>
LinkedIn: https://linkedin.com/in/codywinesett
