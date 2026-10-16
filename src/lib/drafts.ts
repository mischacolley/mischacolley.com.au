/**
 * Whether this build includes draft pages.
 *
 * One flag, read in two places that work very differently:
 *
 *   - next.config.js reads it directly from the environment to decide whether
 *     `draft.tsx` counts as a page extension. That is what makes a route
 *     exist or not exist in a static export.
 *   - This constant is for everything inside the app — notably SiteDrawer,
 *     which is a client component and so cannot read the environment at all.
 *     next.config.js re-exports SHOW_DRAFTS through its `env` key, which
 *     inlines the literal into both bundles at build time.
 *
 * Both have to agree, which is why they share a name and neither has its own
 * default. A route that exists but has no nav link is merely hidden; a nav
 * link to a route that does not exist is a 404. Keeping them on one flag
 * means neither can happen.
 */
export const SHOW_DRAFTS = process.env.SHOW_DRAFTS === "1";
