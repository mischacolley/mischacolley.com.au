import type { Metadata } from "next";
import Header from "@/components/Header";
import { kidsAgeList } from "@/lib/kids";

export const metadata: Metadata = {
  title:
    "Mischa Colley — Creative Technologist & Fractional CTO for purposeful organisations",
  description:
    "Creative Technologist and Fractional CTO helping purposeful organisations prototype, validate and ship. From idea to MVP, or a clear-eyed review of what you’ve already built.",
  openGraph: {
    title:
      "Mischa Colley — Creative Technologist & Fractional CTO for purposeful organisations",
    description:
      "Creative Technologist and Fractional CTO helping purposeful organisations prototype, validate and ship. From idea to MVP, or a clear-eyed review of what you’ve already built.",
    url: "https://mischacolley.com.au/work",
    images: [
      {
        url: "/images/social-share-work.png",
        width: 1200,
        height: 630,
        alt: "Mischa Colley Work",
      },
    ],
  },
  twitter: {
    title:
      "Mischa Colley — Creative Technologist & Fractional CTO for purposeful organisations",
    description:
      "Creative Technologist and Fractional CTO helping purposeful organisations prototype, validate and ship. From idea to MVP, or a clear-eyed review of what you’ve already built.",
    images: ["/images/social-share-work.png"],
  },
};

export default function Work() {
  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-6 sm:px-16">
        <h1 className="font-sans font-bold text-3xl mb-5">
          I’m a Creative Technologist. As a Fractional CTO I help purposeful
          organisations use digital technology for good.
        </h1>

        <p className="text-lg mb-5">
          With more than a decade in digital, from development to leadership, I
          help teams bring clarity and purpose to their technical decisions and
          digital projects.
        </p>

        <p className="text-lg mb-5">
          AI has made building software dramatically faster, and I build with it
          every day. But it hasn’t made the hard parts easier: knowing what’s
          worth building, who it’s really for, and what’s safe to put in front
          of them.
        </p>

        <p className="text-lg mb-5">
          So the work stays human-centred, and that applies twice. To what gets
          built, because shipping the wrong thing quickly is still shipping the
          wrong thing, and the only way to tell is to keep real people in the
          loop from the first rough prototype. And to how it gets built, with
          your team and the people you serve part of the process, not handed a
          finished thing to react to. That’s the part AI doesn’t do for you,
          and it’s what I bring alongside the hands-on work: the CTO hat and
          the keyboard, from the same person.
        </p>

        <h2 id="what" className="font-sans font-bold text-2xl mb-5">
          Here’s how I can help:
        </h2>

        <ul className="text-lg mb-5 space-y-4">
          <li className="list-disc list-inside">
            <strong>🧭 Fractional CTO &amp; digital strategy</strong> — Can’t
            justify a full-time CTO? I translate technical complexity into
            clear, actionable plans so you can make confident decisions and get
            things done. From discovery workshops and roadmaps to mentoring
            teams and overseeing delivery, I bridge the gap between vision and
            implementation.
          </li>

          <li className="list-disc list-inside">
            <strong>🚀 From idea to MVP</strong> — Something real in weeks, not
            quarters. A prototype to test a hunch before you commit serious
            money, or a first version live and in people’s hands. Small enough
            to learn from, solid enough to build on.
          </li>

          <li className="list-disc list-inside">
            <strong>🔍 Review what you’ve built</strong> — Something made by an
            agency, a contractor or an AI-assisted sprint, and you’re not sure
            what you’re holding? I’ll assess the code, architecture and risks,
            then give you a plain-English picture of where it stands and what
            the next phase looks like. I can lead that phase, or hand it over.
          </li>
        </ul>

        <h2 id="how" className="font-sans font-bold text-2xl mb-5">
          Solo, or in good company:
        </h2>

        <p className="text-lg mb-5">
          Plenty of this work I do on my own, embedded directly with a founder
          or a small team. When a project needs more hands or other
          disciplines, I bring them in. I collaborate with{" "}
          <a
            href="https://ingoodcompany-studio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            In Good Company
          </a>
          , a trusted circle of designers, strategists and makers, which means
          you can start a conversation with one person and still get a full
          studio when the work calls for it.
        </p>

        <h2 id="why" className="font-sans font-bold text-2xl mb-5">
          Why I do it:
        </h2>

        <p className="text-lg mb-5">
          Becoming a dad made one thing clear: if I was going to stay in tech,
          it had to be for work that truly mattered. My two kids
          {kidsAgeList() && ` (${kidsAgeList()})`}, and the world I want for
          them, are the filter for every project I choose.
        </p>

        <p className="text-lg mb-5">
          Over the years, I’ve partnered with NFPs, social enterprises, and B
          Corps, as well as collaborated with values-aligned teams like
          Populares, Digital Village, StartSomeGood, Verve Super, Rainbow Power
          Company, We Are Explorers and Today.
        </p>

        <p className="text-lg mb-5">
          Someone once called me a Swiss Army knife. An adaptable, multi-skilled
          problem solver, ready for anything. As a proud generalist, I took it
          as the highest compliment :)
        </p>

        <p className="text-lg mb-5">
          I’m also beginning to consult in the{" "}
          <a
            href="http://opencampusproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            EdTech
          </a>{" "}
          space, exploring how learning happens beyond traditional education
          and how technology can help make that more sustainable.
        </p>

        <p className="text-lg mb-5">
          If you’ve got something you’re trying to get off the ground, or
          something already built that you’d like a second opinion on, let’s
          chat{" "}
          <a
            href="mailto:me@mischacolley.com.au"
            className="text-brand underline"
          >
            me@mischacolley.com.au
          </a>{" "}
          :)
        </p>

        <a
          className="bg-brand hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-2 mb-5 inline-block"
          href="https://calendly.com/mischacolley/catchup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a chat
        </a>
      </article>
    </>
  );
}
