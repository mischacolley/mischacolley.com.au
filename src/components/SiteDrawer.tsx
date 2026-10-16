"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SHOW_DRAFTS } from "@/lib/drafts";
import { ProjectsList } from "./ProjectsList";

/**
 * `draft: true` means the page behind it is a `page.draft.tsx`, so the link
 * has to disappear whenever the route does. Filtered rather than hidden with
 * CSS: a link in the markup pointing at a route a static export never wrote
 * is a 404 waiting to be crawled.
 *
 * SHOW_DRAFTS is inlined at build time, so the filter runs once during the
 * export and the dropped links are absent from the shipped HTML entirely,
 * not hidden in it. The same flag decides which pages exist at all, which is
 * what keeps the two from disagreeing. See src/lib/drafts.ts.
 */
const NAV: { name: string; href: string; draft?: boolean }[] = [
  { name: "Now", href: "/now" },
  { name: "Work", href: "/work" },
  { name: "History", href: "/history", draft: true },
  { name: "Posts", href: "/posts", draft: true },
];

const VISIBLE_NAV = NAV.filter((item) => SHOW_DRAFTS || !item.draft);

/**
 * "default" means nobody has touched the drawer on this page yet, so the page
 * decides: open on the homepage (desktop only — an open overlay would bury the
 * intro on a phone), closed everywhere else. An explicit "open"/"closed"
 * applies at every width, and navigating resets back to "default".
 */
type DrawerState = "default" | "open" | "closed";

type DrawerContextValue = {
  state: DrawerState;
  setState: Dispatch<SetStateAction<DrawerState>>;
  isHome: boolean;
  pathname: string;
};

const DrawerContext = createContext<DrawerContextValue | null>(null);

function useDrawer() {
  const value = useContext(DrawerContext);
  if (!value) {
    throw new Error("Drawer components must render inside SiteDrawerProvider");
  }
  return value;
}

/** trailingSlash is on, so /now arrives as "/now/". */
function normalise(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export function SiteDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rawPathname = usePathname();
  const pathname = normalise(rawPathname ?? "/");
  const isHome = pathname === "/";
  const [state, setState] = useState<DrawerState>("default");

  // Back to the page's own default on every navigation: that both closes the
  // drawer behind a tapped nav link and re-opens it when you land home.
  useEffect(() => {
    setState("default");
  }, [pathname]);

  // Only lock scrolling behind the overlay. On lg an open drawer sits beside
  // the content rather than over it, so the page still has to scroll.
  useEffect(() => {
    if (state !== "open") return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [state]);

  useEffect(() => {
    if (state !== "open") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setState("closed");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [state]);

  const value = useMemo(
    () => ({ state, setState, isHome, pathname }),
    [state, isHome, pathname],
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

/**
 * Resolves a state into the classes a consumer needs. `whenDefault` is what
 * the homepage's open-on-desktop case wants; subpages fall through to closed.
 */
function resolve(
  state: DrawerState,
  isHome: boolean,
  open: string,
  closed: string,
  whenDefault: string,
) {
  if (state === "open") return open;
  if (state === "closed") return closed;
  return isHome ? whenDefault : closed;
}

function navLinkClass(current: boolean) {
  return `rounded text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
    current ? "text-brand" : "text-gray-700 hover:text-brand"
  }`;
}

export function SiteDrawer() {
  const { state, setState, isHome, pathname } = useDrawer();

  // invisible rather than just translated so off-screen links stay out of the
  // tab order. Transitioning visibility alongside transform keeps the panel on
  // screen for the whole slide-out before it disappears.
  const panel = resolve(
    state,
    isHome,
    "visible translate-x-0",
    "invisible -translate-x-full",
    "invisible -translate-x-full lg:visible lg:translate-x-0",
  );

  const trigger = resolve(state, isHome, "hidden", "", "lg:hidden");

  return (
    <>
      <button
        type="button"
        onClick={() => setState("open")}
        aria-label="Open menu"
        aria-controls="site-drawer"
        aria-expanded={state === "open"}
        className={`fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-md ring-1 ring-black/5 transition hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand md:left-6 md:top-6 ${trigger}`}
      >
        {/* <line>, not <path>: globals.css forces fill on paths, which would
            swallow a stroke-only icon. */}
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {/* Overlay only below lg, where the panel covers the page. */}
      {state === "open" && (
        <div
          onClick={() => setState("closed")}
          aria-hidden="true"
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
        />
      )}

      <aside
        id="site-drawer"
        aria-label="Projects and site navigation"
        className={`fixed inset-y-0 left-0 z-30 flex w-72 max-w-[80vw] flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 p-8 transition-[transform,visibility] duration-300 ease-out lg:w-64 ${panel}`}
      >
        <button
          type="button"
          onClick={() => setState("closed")}
          aria-label="Close menu"
          // Absolute so it never nudges the centred content off centre.
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* my-auto rather than justify-center on the parent: it centres the
            same way but still scrolls from the top if the list ever outgrows a
            short viewport. */}
        <div className="my-auto">
          {/* Only away from home: the homepage drawer has nowhere to send you,
              and the header avatar is the way back in any case. */}
          {!isHome && (
            <nav
              aria-label="Home"
              className="mb-6 border-b border-gray-200 pb-6"
            >
              <Link href="/" className={navLinkClass(false)}>
                Home
              </Link>
            </nav>
          )}

          <ProjectsList />

          <nav
            aria-label="Pages"
            className="mt-8 border-t border-gray-200 pt-6"
          >
            <ul className="space-y-3">
              {VISIBLE_NAV.map((item) => {
                const current = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={navLinkClass(current)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

/**
 * The page column. Pads itself clear of the drawer whenever the drawer is
 * open at lg, which is where the panel sits beside the content instead of
 * over it.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const { state, isHome } = useDrawer();
  const padding = resolve(state, isHome, "lg:pl-64", "", "lg:pl-64");

  return (
    <main>
      <div
        className={`container mx-auto min-h-screen pb-28 transition-[padding] duration-300 ease-out ${padding}`}
      >
        {children}
      </div>
    </main>
  );
}
