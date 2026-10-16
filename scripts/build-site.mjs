import { execFileSync } from 'node:child_process';
import { copyFile, lstat, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

// Only version-controlled website files are eligible. Ignored client source and
// local previews must never enter the deployment, even when present on disk.
const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0').filter(Boolean);
const files = tracked.filter((file) =>
  ['index.html', 'microsoft.html', 'og-image.png', '404.html', '_headers', '_redirects', 'robots.txt', 'sitemap.xml'].includes(file)
  || file.startsWith('assets/') || file.startsWith('kindlemesh/'))
  .filter((file) => !file.split('/').some((part) => part.startsWith('.')));
for (const file of ['index.html', 'microsoft.html', 'assets/microsoft-case-study.bin']) {
  if (!files.includes(file)) throw new Error(`Missing required tracked website file: ${file}`);
}
for (const file of files) {
  const stat = await lstat(file);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Not a regular file: ${file}`);
  if (stat.size > 25 * 1024 * 1024) throw new Error(`Website asset exceeds 25 MiB: ${file}`);
}
const output = resolve('dist');
await rm(output, { recursive: true, force: true });
await mkdir(output);
for (const file of files) {
  const target = resolve(output, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(file, target);
}
console.log(`Prepared ${files.length} tracked website files in dist/. No docs, local drafts, or Git history included.`);
