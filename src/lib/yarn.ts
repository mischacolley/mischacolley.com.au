import type { MouseEvent } from "react";

/**
 * The one click handler behind every "Let's yarn" affordance on the site: the
 * floating avatar in `ContactFab` and the button at the foot of `/now` and
 * `/work`.
 *
 * The fallback is the point, not politeness. Every caller's `href` is a real
 * `mailto:`, and this only cancels it once `window.Yarn.ready()` is true. So a
 * blocked script, a failed fetch, or a backend that is down all leave a
 * working contact link rather than a button that does nothing.
 */
export function openYarn(event: MouseEvent<HTMLAnchorElement>) {
  // Let modified clicks through, same as any other link.
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (!window.Yarn?.ready()) return; // the mailto happens instead

  event.preventDefault();
  window.Yarn.toggle();
}
