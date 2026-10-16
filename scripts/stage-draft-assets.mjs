/**
 * Stages the post images that draft pages need, and removes them otherwise.
 *
 * `public/` is copied into the export verbatim, which no page extension can
 * gate. public/posts used to be a tracked, byte-for-byte duplicate of
 * src/posts — images *and* index.md — so every post's full text shipped as
 * raw markdown at /posts/<slug>/index.md whether or not the route existed.
 * Gating the routes alone would have left that in place and looked like it
 * had worked.
 *
 * So public/posts is generated rather than committed: images only, and only
 * when SHOW_DRAFTS is set. src/posts stays the single source of truth, and
 * nothing is published by sitting in a folder.
 *
 * Runs ahead of both `dev` and `build` in either mode, so switching between
 * them cleans up after itself rather than leaving the last run's files.
 */

import fs from "node:fs";
import path from "node:path";

const SOURCE = path.join(process.cwd(), "src/posts");
const STAGED = path.join(process.cwd(), "public/posts");

const showDrafts = process.env.SHOW_DRAFTS === "1";

/** Markdown is the page's source, not an asset. Never copy it. */
const isAsset = (name) => !name.endsWith(".md");

fs.rmSync(STAGED, { recursive: true, force: true });

if (!showDrafts) {
  console.log("drafts off — public/posts removed");
  process.exit(0);
}

let copied = 0;
for (const slug of fs.readdirSync(SOURCE)) {
  const from = path.join(SOURCE, slug);
  if (!fs.statSync(from).isDirectory()) continue;

  const assets = fs.readdirSync(from).filter(isAsset);
  if (assets.length === 0) continue;

  fs.mkdirSync(path.join(STAGED, slug), { recursive: true });
  for (const asset of assets) {
    fs.copyFileSync(path.join(from, asset), path.join(STAGED, slug, asset));
    copied += 1;
  }
}

console.log(`drafts on — staged ${copied} post image(s) into public/posts`);
