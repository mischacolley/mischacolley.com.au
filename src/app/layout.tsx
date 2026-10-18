import type { Metadata } from "next";
import "./globals.css";
import ContactFab from "@/components/ContactFab";
import {
  SiteDrawer,
  SiteDrawerProvider,
  SiteShell,
} from "@/components/SiteDrawer";
import { PERSON_JSON_LD } from "@/lib/identity";

/**
 * Where the Yarn Chat widget is served from. The deployed Worker is the
 * default so a plain build is always the shipping one; point this at
 * http://127.0.0.1:8787 in .env.local to run against `wrangler dev`.
 *
 * NEXT_PUBLIC_ because it is inlined into the exported HTML at build time —
 * there is no server at runtime to read it. Nothing secret about it.
 */
const YARN_ORIGIN =
  process.env.NEXT_PUBLIC_YARN_ORIGIN ??
  "https://yarn-chat.mischacolley.workers.dev";

/**
 * One title and one description, referenced three times below. They were
 * three separate literals and had already drifted out of date together:
 * "FED" and "Tech Edu" are both superseded, and "purpose-driven business"
 * was never the audience.
 *
 * Child pages set their own absolute titles rather than filling a template,
 * because "Work | Mischa Colley, senior technologist" does not fit one.
 */
const TITLE = "Mischa Colley: dad, creative technologist, fractional CTO";
const DESCRIPTION =
  "Dad of two, creative technologist and fractional CTO near Byron Bay. Notes on technology, learning outside school, and building a life that fits.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mischacolley.com.au"),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Mischa Colley" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/site-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mischacolley.com.au",
    siteName: "Mischa Colley",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Mischa Colley",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/social-share.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteDrawerProvider>
          <SiteDrawer />
          <SiteShell>{children}</SiteShell>
        </SiteDrawerProvider>
        <ContactFab />
        {/*
          Person structured data, so the five sites read as one person rather
          than five strangers. `sameAs` is profiles only — the project sites
          are organisations Mischa runs, not other identities of his, so they
          sit on worksFor and affiliation where they are actually true.

          Serialised with JSON.stringify rather than hand-written, so the
          markup cannot disagree with the object in src/lib/identity.ts.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        {/*
          Yarn Chat. Deferred and failure-tolerant on purpose: ContactFab
          falls back to its mailto if this never loads, so the contact path
          does not depend on it. The widget reads its API origin from this
          src, so there is nothing else to configure.

          The origin is an env var rather than a hand-edited literal. Pointing
          it at `wrangler dev` used to mean editing this line, which meant the
          localhost URL could be — and was — committed. On an HTTPS page the
          browser blocks that outright, so the widget silently never appears.
          Override it in .env.local instead; the default is what ships.
        */}
        <script
          src={`${YARN_ORIGIN}/widget.js`}
          data-site="personal"
          data-greeting="Hi 👋🏻 I want to build fulfilling relationships with people doing their best work on projects that really matter, however long that lasts. That means as often as I can be I'm off-grid and as far from screens and signals as my 4x4 will get me and my kids. When I'm about you'll get a reply 😊"
          defer
        />
      </body>
    </html>
  );
}
