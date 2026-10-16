# Winesett domain registry

This is the canonical inventory for Winesett brand websites. Owner: Cody Winesett.
Update this file in the same change that adds, moves, or retires a web project.
Record planned entries before provisioning; mark them live only after HTTPS and deployment checks.
Do not store credentials here. Paths below assume sibling GitHub checkouts.

## Hosting owners

| ID | Purpose | Source repository / local checkout | Hosting project | Production deployment | Cost policy |
| --- | --- | --- | --- | --- | --- |
| portfolio | Winesett parent identity and personal portfolio | [winesett/winesett.com](https://github.com/winesett/winesett.com) / `winesett.com/` | Cloudflare **Pages**, project **`winesett`** | GitHub `main`; build `node scripts/build-site.mjs`; output `dist/` | Free hosting; no paid upgrades or overages |
| labs | Winesett Labs studio, product landing pages, experiment distribution | [winesett/labs.winesett.com](https://github.com/winesett/labs.winesett.com) / `labs.winesett.com/` | Cloudflare **Worker**, **`labs-winesett-com`**, static assets only | Workers Builds, GitHub `main`, root `/`, no build command, deploy `npm run deploy`, assets `public/`; preview builds off | Workers Free; no paid upgrades or overages |

The portfolio's `wrangler.jsonc` identifies Pages project `winesett` and output `dist/`. `scripts/build-site.mjs` copies only tracked website files, excluding docs, Git history, ignored client sources, and local drafts. The previous root-output Worker-shaped config and unsupported `.pagesignore` have been retired.

## Hostnames

| Hostname | Owner | Purpose | Confirmed state | Verified |
| --- | --- | --- | --- | --- |
| `winesett.com` | portfolio | Primary brand and portfolio | Active, SSL enabled | 2026-10-16 |
| `www.winesett.com` | portfolio | Existing alternate address | Active, SSL enabled | 2026-10-16 |
| `codywinesett.com` | portfolio | Existing personal domain | Active, SSL enabled | 2026-10-16 |
| `www.codywinesett.com` | portfolio | Existing personal domain | Active, SSL enabled | 2026-10-16 |
| `winesettdesign.com` | portfolio | Existing design domain | Active, SSL enabled | 2026-10-16 |
| `www.winesettdesign.com` | portfolio | Existing design domain | Active, SSL enabled | 2026-10-16 |
| `proxyxr.com` | portfolio | Existing domain binding | Active, SSL enabled | 2026-10-16 |
| `www.proxyxr.com` | portfolio | Existing domain binding | Active, SSL enabled | 2026-10-16 |
| `labs.winesett.com` | labs | Creative studio | Live, HTTPS and Git deployment verified | 2026-10-16 |

Portfolio binding states were read from Cloudflare Pages → winesett → Custom domains. This records bindings, not an assumption that alternate domains redirect. Unrelated account projects and the full DNS inventory are outside this web inventory. Shared studio support mail is documented below.

## Product and existing path ownership

| URL/path | Owner | Role / status |
| --- | --- | --- |
| `labs.winesett.com/fold-war/` | labs | Fold War, **From Winesett Labs**. Landing page, `/support/`, and `/privacy/` owned here; app in development. `/foldwar` aliases redirect to `/fold-war/`. No separate product domain. |
| `labs.winesett.com/experiments/` | labs | Earlier experiment collection; eight audited demo routes remain at their original paths. `public/labs.json` is their route inventory. |
| `winesett.com/microsoft` | portfolio | Existing protected case-study route; preserve encrypted artifact and access behavior. |
| `winesett.com/kindlemesh/` | portfolio | Existing device images and signed software artifacts; preserve paths and bytes. |

Labs `studio-pages.json` owns the exact studio/product page list; it is separate from the audited demo registry. This table records cross-project ownership, not a second editable list of every demo.

## Shared studio support email

`support@winesett.com` forwards to `codywinesett@gmail.com` using Cloudflare Email Routing. Configured 2026-10-16: domain routing **Enabled**, exact support rule **Active**, destination previously verified. No catch-all rule is enabled. Cloudflare added its MX and SPF/DKIM records without reporting conflicting mail records.

This is free incoming forwarding, not a paid mailbox. Replies sent normally from Gmail display the Gmail address. No Google Workspace, paid outbound email, or paid Workers plan was enabled. Existing domain registration renewals are separate from hosting and forwarding.

Manage this in Cloudflare → Email Service → Email Routing → winesett.com. Keep the destination accurate and verify a real incoming message before relying on it for app launch; the saved rule and DNS state do not prove mailbox receipt. Fold War uses this shared support address; future Labs products can identify their product in the message subject.

## New entry checklist

Record hostname/path, purpose, owner repository, checkout, hosting project/type, production branch and command, cost policy, status (`planned`, `live`, `redirected`, or `retired`), and verification date. One hostname has one hosting owner. Use [the project runbook](project-runbook.md) to provision it.
