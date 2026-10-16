# Winesett website maintenance

Read `docs/domain-registry.md` for ownership and `docs/project-runbook.md` for changes.

- Winesett is the parent brand; Winesett Labs is the studio; products are **From Winesett Labs**.
- This repository owns the portfolio and the cross-project domain registry. The studio lives in sibling `labs.winesett.com` / GitHub `winesett/labs.winesett.com`. Do not recreate a `labs/` deployment here.
- Production is the existing Cloudflare Pages project **winesett**, auto-deployed from `main`. `wrangler.jsonc` declares that Pages project and `dist/` output. Run `node scripts/build-site.mjs`; do not deploy this as a Worker.
- Keep hosting and builds free. Do not enable paid plans, add-ons, or paid overages without Cody's explicit decision. Pause if a free limit is reached.
- Use `codex/` branches, preserve unrelated changes, and inspect the staged diff before pushing. Check the Git deployment result and public URLs after a release.
- The build script copies only tracked, allowlisted website files to `dist/`. Stage intentional new website assets before building locally. Add new top-level routes to the allowlist when needed. Never publish raw case-study sources, credentials, or signing keys. Preserve the protected Microsoft page, encrypted artifact, and existing KindleMesh routes/artifacts.
- New ideas normally start as a path in Labs. Each independent hostname needs one owning repository and hosting project in the registry. Do not alter unrelated DNS, email records, or existing domain bindings.
- Run `node scripts/build-site.mjs` and `git diff --check`. Check links and responsive rendering for changed pages. Preserve byte-for-byte copies of protected case-study and device distribution assets.
- If subagents are requested, use `luna_max_fast` unless Cody specifies otherwise.
