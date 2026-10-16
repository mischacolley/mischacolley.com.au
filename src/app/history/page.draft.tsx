import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import { CHAPTERS, type Chapter, type Photo } from "@/content/history/chapters";

/**
 * The long version of the story: where I have come from, in order.
 *
 * `page.draft.tsx`, not `page.tsx`. The route only exists when SHOW_DRAFTS=1,
 * so this is readable with `npm run dev:drafts` and absent from every real
 * build. See next.config.js for the mechanism and docs/story-map.md for why.
 *
 * Rename this file to `page.tsx` to publish it, and add History to the NAV
 * array in components/SiteDrawer.tsx at the same time.
 */

const TITLE = "Mischa Colley | History";
const DESCRIPTION =
  "Where I've come from: born on the Wild River in Far North Queensland, raised in Byron Bay, and a path from protest music to purpose-led technology.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Belt and braces. The route should never reach a production build at all,
  // but if it ever does, it should not be indexed on the way out.
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mischacolley.com.au/history",
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const STATUS_LABEL = {
  blank: "Nothing written yet",
  drafted: "Your words, needs your pass",
  ready: "Done",
} as const;

function StatusChip({ status }: { status: Chapter["status"] }) {
  // Amber for drafted and plain grey for blank, rather than a red/green pass
  // or fail: none of this is wrong, it is just unfinished.
  const tone =
    status === "ready"
      ? "border-brand text-brand"
      : status === "drafted"
        ? "border-amber-500 text-amber-700"
        : "border-gray-300 text-gray-500";

  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-xs uppercase tracking-widest ${tone}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function StoryFigure({ photo }: { photo: Photo }) {
  return (
    <figure className="my-8">
      <Image
        src={photo.image}
        alt={photo.alt}
        className="h-auto w-full rounded"
        placeholder="empty"
      />
      {photo.caption ? (
        <figcaption className="mt-3 text-sm text-gray-500">
          {photo.caption}
        </figcaption>
      ) : (
        // No invented caption. "Somewhere, some year" is what we are replacing,
        // so an unknown caption shows as an unknown caption.
        <figcaption className="mt-3 text-sm text-amber-700">
          Caption needed{photo.needs ? `: ${photo.needs}` : "."}
        </figcaption>
      )}
    </figure>
  );
}

function StillNeeded({ chapter }: { chapter: Chapter }) {
  return (
    <aside className="my-8 rounded border border-dashed border-gray-300 bg-gray-50 p-6">
      <h3 className="mb-3 text-xs uppercase tracking-widest text-gray-400">
        {chapter.status === "blank"
          ? "This chapter is waiting on you"
          : "Still to check"}
      </h3>
      <ul className="list-inside list-disc space-y-2 text-base text-gray-700">
        {chapter.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
      {chapter.note && (
        <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
          {chapter.note}
        </p>
      )}
    </aside>
  );
}

function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <section
      id={chapter.slug}
      className="border-t border-gray-200 py-12 first:border-t-0"
    >
      <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
        Chapter {index + 1}
        {chapter.period && ` · ${chapter.period}`}
      </p>

      <h2 className="font-sans text-2xl font-bold">{chapter.title}</h2>

      <div className="mt-3">
        <StatusChip status={chapter.status} />
      </div>

      {chapter.body.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-5 text-lg">
          {paragraph}
        </p>
      ))}

      {chapter.photos.map((photo) => (
        <StoryFigure key={photo.alt} photo={photo} />
      ))}

      {chapter.questions.length > 0 && <StillNeeded chapter={chapter} />}
    </section>
  );
}

export default function History() {
  const counts = CHAPTERS.reduce(
    (totals, chapter) => ({
      ...totals,
      [chapter.status]: (totals[chapter.status] ?? 0) + 1,
    }),
    {} as Record<Chapter["status"], number>,
  );

  const missingCaptions = CHAPTERS.flatMap((chapter) => chapter.photos).filter(
    (photo) => !photo.caption,
  ).length;

  return (
    <>
      <Header />

      <article className="mx-auto max-w-3xl px-6 sm:px-16">
        {/* Only ever rendered in a drafts build, so it cannot leak. It is here
            so a screenshot of this page is never mistaken for the live one. */}
        <p className="mb-8 rounded border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Draft.</strong> This page only exists when you run{" "}
          <code>npm run dev:drafts</code>. It is not in the navigation and a
          normal build does not emit it. {counts.ready ?? 0} of{" "}
          {CHAPTERS.length} chapters done, {counts.drafted ?? 0} drafted,{" "}
          {counts.blank ?? 0} not started, {missingCaptions} photo
          {missingCaptions === 1 ? "" : "s"} still needing a real caption.
        </p>

        <h1 className="mb-5 font-sans text-3xl font-bold">History</h1>

        <p className="mb-5 text-lg">
          The long version. My whole path, in order, and the source for the
          shorter cuts on the rest of my sites. If you want the business
          version it is on Fractional by Nature, and if you want to know what
          I&rsquo;m doing this month, that&rsquo;s{" "}
          <Link className="text-brand underline" href="/now">
            now
          </Link>
          .
        </p>

        <div className="mt-10">
          {CHAPTERS.map((chapter, index) => (
            <ChapterSection
              key={chapter.slug}
              chapter={chapter}
              index={index}
            />
          ))}
        </div>

        <p className="border-t border-gray-200 pt-12 text-lg">
          That&rsquo;s where I&rsquo;ve come from. What I&rsquo;m up to right
          now is on the{" "}
          <Link className="text-brand underline" href="/now">
            now page
          </Link>
          .
        </p>
      </article>
    </>
  );
}
