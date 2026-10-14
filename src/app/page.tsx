import Link from "next/link";
import Header from "@/components/Header";
import RotatingTitle from "@/components/RotatingTitle";
import ProjectsAside from "@/components/ProjectsAside";
import { kidsShortSentence } from "@/lib/kids";

export default function Home() {
  return (
    // Below lg this is a column with the intro first and the projects stacked
    // underneath. From lg the aside pins itself to the viewport's left edge,
    // leaving the flow, so ordering stops mattering and the column just gets
    // padded out of its way.
    <div className="flex flex-col gap-10 lg:block">
      <div className="order-2 px-6 lg:order-none lg:px-0">
        <ProjectsAside />
      </div>

      <div className="order-1 lg:order-none lg:pl-64">
        <Header />

        {/* Narrow enough to keep a readable measure for centred copy, still
            well clear of the longest rotating title on its own line. The
            container is centred, so pl-64 above leaves this optically centred
            in the space beside the sidebar rather than pushed off to the right. */}
        <article className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-3xl leading-relaxed mb-5">
            Hi, I&rsquo;m <strong>Mischa Colley</strong> 👋🏻 
            <br />
            I&rsquo;m a <RotatingTitle />
          </p>
          <p className="text-2xl leading-relaxed mb-5">
            For more than a decade I&rsquo;ve helped
            purpose-driven organisations with technology. I&rsquo;m helping young
            people with that now too, starting with my kids. 
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
      </div>
    </div>
  );
}
