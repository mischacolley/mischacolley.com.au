import type { Metadata } from "next";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import Header from "@/components/Header";
import YarnLink from "@/components/YarnLink";
import { SITES } from "@/lib/identity";

const TITLE = "Work | Mischa Colley, senior technologist";
const DESCRIPTION =
  "Fractional CTO, digital strategist and hands-on tech lead for purpose-driven teams. Twenty years building for the web, from Bundjalung Country.";

/**
 * The share image is still the existing /work card. The copy plan wants the
 * outdoor photo here, but which one becomes the share image is an open
 * question, so this stays as it is rather than pointing at a file that does
 * not exist.
 */
const SHARE_IMAGE = {
  url: "/images/social-share-work.png",
  width: 1200,
  height: 630,
  alt: "Mischa Colley, senior technologist",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mischacolley.com.au/work",
    images: [SHARE_IMAGE],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
};

function Outbound({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand underline"
    >
      {children}
    </a>
  );
}

/**
 * The two buckets, as cards. Each is a one-line summary plus the FbN-style
 * arrow list, so they scan the way the service cards on Fractional by Nature
 * do, then the longer prose sits underneath as the version for someone who
 * has decided to read rather than skim.
 */
const WHAT_I_DO: {
  title: string;
  summary: string;
  details: string[];
}[] = [
  {
    title: "Fractional CTO & digital strategy",
    summary:
      "Hands-on technology leadership for your team, without the full-time commitment.",
    details: [
      "Technology strategy and roadmaps",
      "Team leadership and mentoring",
      "Architecture decisions",
      "AI and vendor choices that earn their place",
      "Digital transformation as business as usual",
      "Processes built around people rather than tools",
      "AI and technology readiness audits",
      "Technology the team will actually use",
    ],
  },
  {
    title: "Hands-on delivery as a Developer / Tech Lead",
    summary: "Leading a team's delivery and still writing the code.",
    details: [
      "Building MVPs and hardening AI prototypes",
      "Maintenance and iteration",
      "Working closely with UX/UI designers",
      "Technical integrations and problem solving",
    ],
  },
];

/**
 * The arc, as a scan strip rather than a paragraph. Two runs: how the work was
 * arranged, then what the job was called. Same progression as the Fractional
 * by Nature scan strip, so the two pages tell one story.
 */
const ARC: { label: string; steps: string[] }[] = [
  {
    label: "How I've worked",
    steps: ["Freelance", "Agencies", "In-house", "Collectives & partnerships"],
  },
  {
    label: "What it's been called",
    steps: ["Frontend", "CTO", "Fractional CTO", "Tech Lead", "Strategist"],
  },
];

export default function Work() {
  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-6 sm:px-16">
        {/* 1. Hero. What, then who for. Someone scanning needs this before the
            biography, which is why the arc sits near the bottom of the page
            rather than at the top where it was written. */}
        <h1 className="font-sans font-bold text-3xl mb-5">
          Senior technologist. Fractional CTO and hands-on tech lead for
          purpose-driven teams.
        </h1>

        <p className="text-xl mb-12">
          Twenty years building for the web. Not a tech bro or a gamer: I came
          to tech through the arts.
        </p>

        {/* 2. What I do. */}
        <h2 id="what" className="font-sans font-bold text-2xl mb-5">
          What I do
        </h2>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          {WHAT_I_DO.map((bucket) => (
            <section
              key={bucket.title}
              className="rounded border border-gray-200 p-6"
            >
              <h3 className="font-sans font-bold text-xl mb-3">
                {bucket.title}
              </h3>
              <p className="text-lg mb-4">{bucket.summary}</p>
              <ul className="space-y-2">
                {bucket.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-brand" aria-hidden="true">
                      &rarr;
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="text-lg mb-5">
          On the strategy side, that also means aligning technology with an
          organisation&rsquo;s mission and values: digital transformation as
          business as usual, processes built around people rather than tools,
          and technology the team will actually use. This is the heart of{" "}
          <Outbound href={SITES.fractionalByNature}>
            Fractional by Nature
          </Outbound>
          .
        </p>

        <p className="text-lg mb-12">
          On the delivery side, bring a vibe coded prototype, an ageing system
          or a blank page, and I&rsquo;ll make it solid and keep it moving. I
          still love the craft and I build with AI every day. It hasn&rsquo;t
          made the hard parts easier: knowing what&rsquo;s worth building, who
          it&rsquo;s for, and what&rsquo;s safe to put in front of them.
        </p>

        {/* 3. Proof. The strip, then the AIME line directly under it, so the
            logos have a sentence explaining what the biggest one was. */}
        <h2 id="who" className="font-sans font-bold text-2xl mb-5">
          Who I&rsquo;ve worked with
        </h2>

        <div className="mb-5">
          <ClientLogoCarousel />
        </div>

        <p className="text-lg mb-12">
          At AIME I went from solo developer to CTO, leading a team of eleven
          across five time zones and several disciplines. I&rsquo;ve carried
          what I learned there into my independent work as a fractional CTO, and
          into my partnerships as a tech lead.
        </p>

        {/* 4. How I work. */}
        <h2 id="how" className="font-sans font-bold text-2xl mb-5">
          How I work
        </h2>

        <p className="text-lg mb-5">
          AI is blurring the lines between frontend, backend and full stack, so
          knowing every layer is less important. What&rsquo;s left is
          judgement: what&rsquo;s worth building, how it fits the people
          who&rsquo;ll use it and the team who&rsquo;ll keep it running, and
          what&rsquo;s safe to ship.
        </p>

        <p className="text-lg mb-5">
          Twenty years in, I&rsquo;m a senior technologist and a proud
          generalist, not a specialist on one side of the stack. I&rsquo;m not
          tied to any one set of tools or vendors, so what I recommend follows
          what fits the context, not what I happen to know.
        </p>

        <p className="text-lg mb-12">
          I work remotely from Bundjalung and Yugambeh Country, four days a
          week, often from the front seat of my 4x4. That&rsquo;s a choice that
          keeps me close to nature and to my kids, and it&rsquo;s why fractional
          and part-time roles are all I&rsquo;m looking for.
        </p>

        {/* 5. Why. It lands harder here, once the reader knows what I do. */}
        <h2 id="why" className="font-sans font-bold text-2xl mb-5">
          Why I do it
        </h2>

        <p className="text-lg mb-12">
          {/* The middle sentence is a shared line. It appears here, on the FbN
              About and on LinkedIn, and has to stay identical in all three —
              which is why the kids' ages are not spliced into it here. */}
          Becoming a dad made it clear that if I was staying in tech, it had to
          be for work that matters. My two kids, and the world I want for them,
          are the filter for every project I choose. For more than a decade
          that&rsquo;s meant purpose-driven work, a small number at a time,
          mostly with NFPs, social enterprises and B Corps, either directly or
          through the values-aligned studios I partner with, which also brings
          in government and public sector projects.
        </p>

        {/* 6. The arc, as a scan strip rather than the paragraph it was
            written as. */}
        <h2 id="arc" className="font-sans font-bold text-2xl mb-5">
          How I got here
        </h2>

        <p className="text-lg mb-8">
          I&rsquo;m a creative technologist. I came to tech through the arts,
          and stayed because of the positive impact I believe tech can have on
          the world when used for good. I&rsquo;ve been building for the web
          since 2006, and through all of it I&rsquo;ve been a Developer.
        </p>

        <dl className="mb-12 space-y-6">
          {ARC.map((run) => (
            <div key={run.label}>
              <dt className="font-sans text-sm uppercase tracking-wide text-gray-500 mb-2">
                {run.label}
              </dt>
              {/* A list, not a sentence: the order is the point, and the
                  separators are decoration an assistive reader does not need
                  read out between every step. */}
              <dd>
                <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg">
                  {run.steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      {index > 0 && (
                        <span className="text-brand" aria-hidden="true">
                          &rarr;
                        </span>
                      )}
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </dd>
            </div>
          ))}
        </dl>

        {/* 7. How we can work together, then the call to action. */}
        <h2 id="together" className="font-sans font-bold text-2xl mb-5">
          How we can work together
        </h2>

        <ul className="text-lg mb-8 space-y-4">
          <li className="list-disc list-inside">
            If you&rsquo;re an organisation looking for a fractional CTO or
            digital strategy, that&rsquo;s{" "}
            <Outbound href={SITES.fractionalByNature}>
              Fractional by Nature
            </Outbound>
            .
          </li>
          <li className="list-disc list-inside">
            I&rsquo;m taking on EdTech projects through the{" "}
            <Outbound href={SITES.openCampus}>Open Campus Project</Outbound>{" "}
            and helping young people and their parents with tech through{" "}
            <Outbound href={SITES.helloMaker}>HelloMaker</Outbound>.
          </li>
          <li className="list-disc list-inside">
            I&rsquo;m not alone. When a project needs more disciplines or a
            bigger studio you&rsquo;ll find me working with friends like{" "}
            {/* Today is named but not linked: its URL appears nowhere in any
                of the five repos, and a guessed address is worse than none. */}
            <Outbound href={SITES.inGoodCompany}>In Good Company</Outbound> and
            Today.
          </li>
        </ul>

        {/* Opens the Yarn widget, same as the floating avatar, and falls
            back to the mailto when the widget has not loaded. */}
        <YarnLink className="bg-brand hover:bg-brand-dark transition-colors text-white font-bold py-4 px-4 rounded mt-2 mb-5 inline-block">
          Let&rsquo;s yarn
        </YarnLink>
      </article>
    </>
  );
}
