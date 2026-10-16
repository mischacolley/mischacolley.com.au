/**
 * Writes today's date into src/content/last-updated.json for any tracked page
 * that is staged, then stages the JSON alongside it. Run from
 * .githooks/pre-commit.
 *
 * Commit time, not build time, because Vercel builds from a shallow clone
 * (`git clone --depth=10`) and so cannot see when a rarely-touched page last
 * changed. See src/lib/lastUpdated.ts for the reading side.
 *
 * Only the JSON is auto-staged — never the page itself — so a partially
 * staged page keeps its unstaged hunks out of the commit.
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";

/** Page file → key in last-updated.json. Add a page by adding a line. */
const TRACKED = {
  "src/app/now/page.tsx": "now",
};

const STAMP_FILE = "src/content/last-updated.json";

/**
 * My timezone, not the machine's: a late-night commit in Byron should stamp
 * the date I'd call today, which UTC would still call yesterday.
 */
const TIME_ZONE = "Australia/Sydney";

function today() {
  // en-CA formats as YYYY-MM-DD, which is the shape we store.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

const staged = new Set(
  git("diff", "--cached", "--name-only", "--diff-filter=ACMR")
    .split("\n")
    .filter(Boolean),
);

const touched = Object.entries(TRACKED).filter(([file]) => staged.has(file));
if (touched.length === 0) process.exit(0);

const stamps = fs.existsSync(STAMP_FILE)
  ? JSON.parse(fs.readFileSync(STAMP_FILE, "utf8"))
  : {};

const date = today();
let changed = false;
for (const [, key] of touched) {
  if (stamps[key] === date) continue; // already stamped today — no empty diff
  stamps[key] = date;
  changed = true;
}

if (!changed) process.exit(0);

fs.writeFileSync(STAMP_FILE, `${JSON.stringify(stamps, null, 2)}\n`);
git("add", STAMP_FILE);

console.log(
  `stamped ${touched.map(([, key]) => key).join(", ")} as last updated ${date}`,
);
