import type { Metadata } from "next";
import "./globals.css";
import ContactFab from "@/components/ContactFab";
import {
  SiteDrawer,
  SiteDrawerProvider,
  SiteShell,
} from "@/components/SiteDrawer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://mischacolley.com.au"),
  title: "Mischa Colley | Creative Technologist, Fractional CTO, FED, Tech Edu",
  description:
    "I help purpose-driven business and young people with digital technology",
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
    title:
      "Mischa Colley | Creative Technologist, Fractional CTO, FED, Tech Edu",
    description:
      "I help purpose-driven business and young people with digital technology",
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
    title:
      "Mischa Colley | Creative Technologist, Fractional CTO, FED, Tech Edu",
    description:
      "I help purpose-driven business and young people with digital technology",
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
          data-greeting="Hi 👋🏻 I want to build fulfilling relationships with people living their best lives doing things that really matter to them. That means as often as I can be I'm off-grid and as far away from screens and signals as my barefeet will take me and my kids. When I'm about you'll get a reply 😊"
          defer
        />
      </body>
    </html>
  );
}
