"use client";

import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";

/**
 * Floating contact launcher, pinned bottom-right, with the social links fanned
 * out around it in a quarter-arc. This is the site's only "get in touch"
 * affordance now — the footer nav it replaced is gone, along with its email
 * link.
 *
 * The avatar opens the Yarn Chat widget, falling back to a mail client.
 *
 * The fallback is the point, not politeness: the href is a real `mailto:` and
 * the handler only prevents it once `window.Yarn.ready()` is true. So a
 * blocked script, a failed fetch, or a backend that is down all leave a
 * working contact link rather than a button that does nothing.
 */

/**
 * Positions on the arc, in degrees anticlockwise from the positive x-axis:
 * 90 is straight up, 180 is straight left. Three links across that quarter
 * turn keeps them clear of both the page edge and each other.
 */
const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mischacolley/",
    angle: 90,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "GitHub",
    href: "https://github.com/mischacolley",
    angle: 135,
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mischacolley",
    angle: 180,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

/** Offset along the arc. --fab-r is the radius, bumped up at md. */
function arcTransform(angle: number) {
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians).toFixed(4);
  // Negated: CSS y grows downward, so a positive sine has to move *up*.
  const y = (-Math.sin(radians)).toFixed(4);

  return `translate(-50%, -50%) translate(calc(var(--fab-r) * ${x}), calc(var(--fab-r) * ${y}))`;
}

export default function ContactFab() {
  return (
    <div className="fixed bottom-6 right-6 z-40 h-14 w-14 [--fab-r:58px] md:h-16 md:w-16 md:[--fab-r:66px]">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          style={{ transform: arcTransform(social.angle) }}
          className="group/social absolute left-1/2 top-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-md ring-1 ring-black/5 transition duration-200 group-hover/social:text-brand motion-safe:group-hover/social:scale-110">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={social.path} />
            </svg>
          </span>
        </a>
      ))}

      <a
        href="mailto:me@mischacolley.com.au"
        aria-label="Let&apos;s yarn"
        onClick={(event) => {
          // Let modified clicks through, same as the social links above.
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          if (!window.Yarn?.ready()) return; // the mailto happens instead
          event.preventDefault();
          window.Yarn.toggle();
        }}
        className="group block h-full w-full rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        {/* Absolutely positioned so the label never widens the hit area. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-sm font-medium opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          Let&rsquo;s yarn
        </span>

        <Image
          src={profileImage}
          alt=""
          width={64}
          height={64}
          className="h-full w-full rounded-full object-cover shadow-lg ring-2 ring-white transition-transform duration-200 motion-safe:group-hover:scale-105"
        />

        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white shadow-md ring-2 ring-white"
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
