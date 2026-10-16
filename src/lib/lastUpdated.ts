/**
 * "Last updated" dates for pages that claim one.
 *
 * The dates live in src/content/last-updated.json, written by the
 * .githooks/pre-commit hook whenever the matching page file is staged. They
 * are *not* derived at build time, and that is deliberate: Vercel builds from
 * a shallow clone (`git clone --depth=10`), so `git log -- <page>` comes back
 * empty as soon as a page has sat untouched for ten commits — which for the
 * now page is the normal state, not the exception.
 *
 * Falling back to the deploy date instead would be worse than no date at all:
 * every unrelated deploy would reset the stamp and claim the page had just
 * been rewritten.
 *
 * See scripts/stamp-last-updated.mjs for the stamping side.
 */

import stamps from "@/content/last-updated.json";

/** The date is a calendar date, not an instant, so render it as written. */
const DISPLAY_TIME_ZONE = "UTC";

export interface LastUpdated {
  /** "2026-10-16" — for the <time> element's machine-readable dateTime. */
  iso: string;
  /** "16 October 2026" — for humans. */
  label: string;
}

/**
 * Returns null for an unstamped or malformed page key rather than throwing or
 * guessing, so a missing stamp renders nothing instead of a wrong date.
 */
export function lastUpdated(page: keyof typeof stamps): LastUpdated | null {
  const iso = stamps[page];
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;

  const parsed = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return null;

  return {
    iso,
    label: new Intl.DateTimeFormat("en-AU", {
      timeZone: DISPLAY_TIME_ZONE,
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(parsed),
  };
}
