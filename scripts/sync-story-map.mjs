/**
 * Mirrors docs/story-map.md out to the sibling repos.
 *
 * Blind `cp` is how this went wrong once already: another session had edited
 * opencampus/docs/story-map.md, a copy from here overwrote it, and the only
 * record of that work was the commit it had already made. So this refuses to
 * overwrite a copy that has drifted, rather than deciding for you.
 *
 *   node scripts/sync-story-map.mjs          report drift, change nothing
 *   node scripts/sync-story-map.mjs --write  copy, skipping anything drifted
 *
 * A skipped repo means someone edited it there. Read their version, merge
 * what is theirs into this one by hand, then run it again.
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SIBLINGS = [
  "fractionalbynature",
  "hellomaker",
  "opencampus",
  "kindred-website",
];

const here = process.cwd();
const root = path.resolve(here, "..");
const source = path.join(here, "docs/story-map.md");
const write = process.argv.includes("--write");

const canonical = fs.readFileSync(source, "utf8");

/** The copy as last committed there — what a clean mirror should look like. */
function committed(repo) {
  try {
    return execFileSync("git", ["-C", repo, "show", "HEAD:docs/story-map.md"], {
      encoding: "utf8",
    });
  } catch {
    return null;
  }
}

let blocked = 0;

for (const name of SIBLINGS) {
  const repo = path.join(root, name);
  const target = path.join(repo, "docs/story-map.md");

  if (!fs.existsSync(target)) {
    console.log(`  ${name.padEnd(20)} no copy, skipping`);
    continue;
  }

  const onDisk = fs.readFileSync(target, "utf8");
  if (onDisk === canonical) {
    console.log(`  ${name.padEnd(20)} already in step`);
    continue;
  }

  // Uncommitted local edits there, or a commit this copy has not seen.
  const head = committed(repo);
  const theirEdit = onDisk !== head;

  if (theirEdit) {
    blocked += 1;
    console.log(
      `  ${name.padEnd(20)} DRIFTED — uncommitted edits there, not overwriting`,
    );
    continue;
  }

  if (write) {
    fs.writeFileSync(target, canonical);
    console.log(`  ${name.padEnd(20)} updated`);
  } else {
    console.log(`  ${name.padEnd(20)} would update`);
  }
}

if (blocked) {
  console.log(
    `\n  ${blocked} repo(s) skipped. Merge their version into ` +
      `docs/story-map.md here, then run again.`,
  );
}
