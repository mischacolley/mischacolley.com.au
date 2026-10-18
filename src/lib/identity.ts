/**
 * The one place the cross-site URLs live.
 *
 * Five sites are meant to read as one person, which only works if they all
 * point at the same addresses. These were duplicated across `/now`, `/work`,
 * `ContactFab` and `projects.ts`, which is three chances to update three of
 * them and miss the fourth.
 *
 * Safe to import from a client component: these are plain strings, nothing
 * here reads the environment.
 */

/** Mischa's own profiles. Used for `sameAs`, and by the contact launcher. */
export const PROFILES = {
  linkedIn: "https://www.linkedin.com/in/mischacolley/",
  gitHub: "https://github.com/mischacolley",
  instagram: "https://www.instagram.com/mischacolley",
} as const;

/**
 * The projects and the studios. Not profiles — these are organisations, which
 * is why they are kept apart from PROFILES rather than thrown into one list.
 */
export const SITES = {
  personal: "https://mischacolley.com.au",
  fractionalByNature: "https://fractionalbynature.com.au",
  openCampus: "https://opencampusproject.com",
  helloMaker: "https://hellomaker.org",
  kindred: "https://getkindred.com.au",
  inGoodCompany: "https://ingoodcompany-studio.com/",
  /** Confirmed by Mischa, 2026-10-18. Named on both `/now` and `/work`. */
  today: "https://today.design",
} as const;

export const EMAIL = "me@mischacolley.com.au";

/**
 * `Person` structured data, so a search engine reads the five sites as one
 * person rather than five strangers.
 *
 * `sameAs` is only the profiles. The project sites are organisations Mischa
 * runs, not other identities of Mischa, so they hang off `worksFor` and
 * `affiliation` where they are actually true. Every fact here is already
 * somewhere in these repos; nothing is inferred.
 */
export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mischa Colley",
  url: SITES.personal,
  email: `mailto:${EMAIL}`,
  jobTitle: "Fractional CTO and senior technologist",
  sameAs: [PROFILES.linkedIn, PROFILES.gitHub, PROFILES.instagram],
  worksFor: {
    "@type": "Organization",
    name: "Fractional by Nature",
    url: SITES.fractionalByNature,
  },
  affiliation: [
    { "@type": "Organization", name: "Open Campus Project", url: SITES.openCampus },
    { "@type": "Organization", name: "HelloMaker", url: SITES.helloMaker },
    { "@type": "Organization", name: "Kindred", url: SITES.kindred },
  ],
} as const;
