import Link from "next/link";
import Header from "@/components/Header";
import RotatingTitle from "@/components/RotatingTitle";
import { kidsShortSentence } from "@/lib/kids";

export default function Home() {
  return (
    // The projects/nav drawer pins itself to the viewport's left edge and the
    // shell pads this column clear of it whenever it is open, so there is
    // nothing to lay out around here.
    <>
      <Header />

      {/* Narrow enough to keep a readable measure for centred copy, still well
          clear of the longest rotating title on its own line. The container is
          centred, so the shell's padding leaves this optically centred in the
          space beside the drawer rather than pushed off to the right. */}
      <article className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-3xl leading-relaxed mb-5">
          Hi, I&rsquo;m <strong>Mischa</strong> 👋🏻
          <br />
          {/* Stepped down below md: these phrases run long and mono type is
              wide, so full size would wrap them on a phone. kids is resolved
              here because lib/kids reads a server-only env var. */}
          <span className="text-xl sm:text-2xl md:text-3xl">
            <RotatingTitle kids={kidsShortSentence()} />
          </span>
        </p>
        <p className="text-2xl leading-relaxed mb-5">
          For more than a decade I&rsquo;ve helped purpose-driven organisations
          with technology. I&rsquo;m helping young people with that now too,
          starting with my kids.
        </p>

        <p className="text-xl mb-5">
          See what I&rsquo;m doing{" "}
          <Link className="text-brand underline" href="/now">
            now
          </Link>{" "}
          and how we can{" "}
          <Link className="text-brand underline" href="/work">
            work together
          </Link>
          .
        </p>
      </article>
    </>
  );
}
