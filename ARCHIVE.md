# Archive and Redesign Notes

The current production site was archived before starting the clean-slate redesign.

Production still deploys from:

```bash
main
```

Archive branch:

```bash
archive/current-site-2026-06-26
```

Archive tag:

```bash
current-site-2026-06-26
```

Redesign work is happening on:

```bash
redesign/v2-clean-slate
```

Do not merge `redesign/v2-clean-slate` into `main` until the redesign is intentionally ready to replace production.

## Recovery Examples

Checkout the archive branch:

```bash
git checkout archive/current-site-2026-06-26
```

Checkout the archive tag:

```bash
git checkout current-site-2026-06-26
```

Compare the redesign branch against the archive:

```bash
git diff current-site-2026-06-26..redesign/v2-clean-slate
```

Restore production from the archive if needed:

```bash
git checkout main
git pull --ff-only origin main
git restore --source current-site-2026-06-26 --worktree --staged .
git commit -m "Restore archived production site"
git push origin main
```

Only run the restore commands when you intentionally want `main` to return to the archived production state.
