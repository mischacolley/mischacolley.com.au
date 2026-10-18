"use client";

import { EMAIL } from "@/lib/identity";
import { openYarn } from "@/lib/yarn";

/**
 * A link that opens the Yarn chat widget, falling back to a mail client.
 *
 * It exists because `/now` and `/work` are server components and the handler
 * needs the client, and because both pages had hand-written `mailto:` anchors
 * that quietly did not open the widget the rest of the site opens.
 */
export default function YarnLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={`mailto:${EMAIL}`} className={className} onClick={openYarn}>
      {children}
    </a>
  );
}
