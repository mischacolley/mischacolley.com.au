import fractionalByNature from "@/assets/project-logos/fractional-by-nature.svg";
import openCampus from "@/assets/project-logos/open-campus.svg";
import helloMaker from "@/assets/project-logos/hellomaker.svg";
import kindred from "@/assets/project-logos/kindred.svg";

export type Project = {
  name: string;
  tagline: string;
  /** Logo mark. Static import so the file is fingerprinted and cached. */
  logo: { src: string };
  /** null renders the card as plain text — no link until the site is live. */
  href: string | null;
  /** Earlier names this work traded under, shown under the tagline. */
  previously?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Fractional by Nature",
    tagline: "Purpose-driven technology support ",
    logo: fractionalByNature,
    href: "https://fractionalbynature.com.au",
  },
  {
    name: "Open Campus Project",
    tagline: "Alternative learning pathways explored",
    logo: openCampus,
    href: "https://opencampusproject.com",
  },
  {
    name: "HelloMaker",
    tagline: "Tech learning for young people",
    logo: helloMaker,
    href: "https://hellomaker.org",
  },
  {
    name: "Kindred",
    tagline: "The co-parenting app for the whole journey",
    logo: kindred,
    href: "https://getkindred.com.au",
  },
];
