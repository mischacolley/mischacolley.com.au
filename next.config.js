/**
 * Draft pages.
 *
 * This site is a static export, so there is no server at request time to hide
 * a page behind a flag — a route either gets written into `out/` or it does
 * not exist. So the gate has to be at build time.
 *
 * `draft.tsx` is registered as a page extension only when SHOW_DRAFTS is set.
 * A file named `page.draft.tsx` therefore resolves as a route under
 * `npm run dev:drafts` and `npm run build:drafts`, and is invisible to every
 * other build — no HTML, no 404 entry, nothing in the export at all.
 *
 * The defaults have to be listed too: setting pageExtensions replaces the
 * built-in list rather than adding to it.
 */
const showDrafts = process.env.SHOW_DRAFTS === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: showDrafts
    ? ['draft.tsx', 'tsx', 'ts', 'jsx', 'js']
    : ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig
