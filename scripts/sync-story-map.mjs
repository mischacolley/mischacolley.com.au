/**
 * Mirrors docs/story-map.md out to the sibling repos.
 *
 *   node scripts/sync-story-map.mjs          report drift, change nothing
 *   node scripts/sync-story-map.mjs --write  copy where it is safe to
 *
 * Blind `cp` is how this went wrong twice. The first time, another session
 * had edited opencampus/docs/story-map.md and a copy from here overwrote it.
 * The guard added after that only compared each sibling against its own HEAD,
 * which catches *uncommitted* edits — so the second time, that same session
 * had committed its notes, the file matched its HEAD, and the guard waved it
 * through. Both were recoverable from git, but only because someone noticed.
 *
 * So drift is measured against what this script last wrote, recorded in
 * docs/.story-map-sync.json, rather than against anything git can tell us. If
 * a sibling's file is not byte-for-byte what we left there, something changed
 * it — committed, uncommitted, or by hand — and we stop.
 *
 * When it reports drift: read that repo's version, merge what is theirs into
 * docs/story-map.md here, then run again. Never the other way round.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const SIBLINGS = [
  "fractionalbynature",
  "hellomaker",
  "opencampus",
  "kindred-website",
];

const here = process.cwd();
const root = path.resolve(here, "..");
const source = path.join(here, "docs/story-map.md");
const manifestPath = path.join(here, "docs/.story-map-sync.json");
const write = process.argv.includes("--write");

const digest = (text) =>
  crypto.createHash("sha256").update(text).digest("hex").slice(0, 16);

const canonical = fs.readFileSync(source, "utf8");
const canonicalHash = digest(canonical);

const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  : {};

let blocked = 0;
let changed = false;

for (const name of SIBLINGS) {
  const target = path.join(root, name, "docs/story-map.md");
  const label = name.padEnd(20);

  if (!fs.existsSync(target)) {
    console.log(`  ${label} no copy, skipping`);
    continue;
  }

  const theirs = fs.readFileSync(target, "utf8");
  const theirHash = digest(theirs);

  if (theirHash === canonicalHash) {
    // Already identical. Record it, in case this is the first run.
    if (manifest[name] !== canonicalHash) {
      manifest[name] = canonicalHash;
      changed = true;
    }
    console.log(`  ${label} already in step`);
    continue;
  }

  const lastWrote = manifest[name];

  if (lastWrote === undefined) {
    blocked += 1;
    console.log(
      `  ${label} UNKNOWN — never synced by this script, so it cannot tell\n` +
        `  ${" ".repeat(20)} whose version is newer. Diff it by hand once, then rerun.`,
    );
    continue;
  }

  if (theirHash !== lastWrote) {
    blocked += 1;
    console.log(`  ${label} DRIFTED — changed since we last wrote it`);
    continue;
  }

  if (write) {
    fs.writeFileSync(target, canonical);
    manifest[name] = canonicalHash;
    changed = true;
    console.log(`  ${label} updated`);
  } else {
    console.log(`  ${label} would update`);
  }
}

if (write && changed) {
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

if (blocked) {
  console.log(
    `\n  ${blocked} repo(s) skipped. Read their version, merge what is theirs\n` +
      `  into docs/story-map.md here, then run again.`,
  );
}
