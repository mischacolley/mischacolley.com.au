import type { Metadata } from "next";
import "./globals.css";
import ContactFab from "@/components/ContactFab";

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
        <main>
          <div className="container mx-auto min-h-screen pb-28">
            {children}
          </div>
        </main>
        <ContactFab />
      </body>
    </html>
  );
}
