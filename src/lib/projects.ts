import fractionalByNature from "@/assets/project-logos/fractional-by-nature.svg";
import openCampus from "@/assets/project-logos/open-campus.svg";
import helloMaker from "@/assets/project-logos/hellomaker.svg";
import kindred from "@/assets/project-logos/kindred.svg";
import { SITES } from "@/lib/identity";

/**
 * Wordmark logos carry the project's name in the artwork; badges do not.
 *
 * Open Campus is a badge, so with the logo alone its card is a 40px square
 * with the name nowhere on it. Badges get the name rendered beside them
 * instead. Likely to be the common case for the sub-brands, which are
 * heading the same way.
 */
export type LogoKind = "wordmark" | "badge";

export type Project = {
  name: string;
  tagline: string;
  /** Logo mark. Static import so the file is fingerprinted and cached. */
  logo: { src: string };
  /** Whether the artwork says the name, or we have to. */
  logoKind: LogoKind;
  /** null renders the card as plain text — no link until the site is live. */
  href: string | null;
  /** Earlier names this work traded under, shown under the tagline. */
  previously?: string;
  /**
   * Projects that sit under this one. Open Campus Project is the umbrella for
   * the alternative learning work; HelloMaker is the first thing under it,
   * with Learning Prompts and Spaces In-Between likely to follow.
   *
   * Nested rather than flagged on the child so the order of the list and the
   * shape of the hierarchy are the same thing, and adding a sibling is one
   * line in one place.
   */
  children?: Project[];
};

export const PROJECTS: Project[] = [
  {
    name: "Fractional by Nature",
    tagline: "Technology strategy and hands-on delivery for purpose-driven organisations",
    logo: fractionalByNature,
    logoKind: "wordmark",
    href: SITES.fractionalByNature,
  },
  {
    name: "Open Campus Project",
    tagline: "Alternative learning pathways explored",
    logo: openCampus,
    logoKind: "badge",
    href: SITES.openCampus,
    children: [
      {
        name: "HelloMaker",
        tagline: "Tech learning for young people",
        logo: helloMaker,
        logoKind: "wordmark",
        href: SITES.helloMaker,
      },
    ],
  },
  {
    name: "Kindred",
    tagline: "The co-parenting app for the whole journey",
    logo: kindred,
    logoKind: "wordmark",
    href: SITES.kindred,
  },
];
