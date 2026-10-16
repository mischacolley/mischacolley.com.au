/**
 * Marks a page that only exists in a drafts build.
 *
 * Worth the space because these pages get screenshotted and sent to people.
 * Without a banner there is nothing in a screenshot to distinguish the draft
 * from the live site, which is exactly the confusion the gate exists to stop.
 *
 * It can never leak: a page carrying it is a `page.draft.tsx`, which a normal
 * build does not compile at all.
 */
export default function DraftBanner({
  children,
}: {
  /** Optional progress line, e.g. how many chapters are still unwritten. */
  children?: React.ReactNode;
}) {
  return (
    <p className="mb-8 rounded border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
      <strong>Draft.</strong> This page only exists when you run{" "}
      <code>npm run dev:drafts</code>. It is not in the published navigation
      and a normal build does not emit it.
      {children && <> {children}</>}
    </p>
  );
}
