import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Mischa Colley — Creative Technologist & Fractional CTO for purposeful organisations",
  description:
    "Creative Technologist and Fractional CTO helping purposeful organisations use digital technology for good. Blending strategy, leadership, and hands-on development with empathy and clarity.",
  openGraph: {
    title:
      "Mischa Colley — Creative Technologist & Fractional CTO for purposeful organisations",
    description:
      "Creative Technologist and Fractional CTO helping purposeful organisations use digital technology for good. Blending strategy, leadership, and hands-on development with empathy and clarity.",
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
      "Creative Technologist and Fractional CTO helping purposeful organisations use digital technology for good. Blending strategy, leadership, and hands-on development with empathy and clarity.",
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

        <h2 id="what" className="font-sans font-bold text-2xl mb-5">
          Here’s how I can help:
        </h2>

        <ul className="text-lg mb-5 space-y-4">
          <li className="list-disc list-inside">
            <strong>🧭 Fractional CTO / Technical Leadership</strong> — Can’t
            justify a full-time CTO? I can help translate technical complexity
            into clear, actionable plans so you can make confident decisions and
            get things done. From mentoring teams to overseeing delivery, I
            bridge the gap between vision and implementation.
          </li>

          <li className="list-disc list-inside">
            <strong>💡 Digital Strategy</strong> — From discovery workshops to
            digital transformation, I help you map where technology can have the
            biggest impact. I combine consulting with hands-on implementation
            when it makes sense, ensuring strategy becomes reality.
          </li>

          <li className="list-disc list-inside">
            <strong>🧑🏼‍💻 Development Projects</strong> — I still love to build.
            Whether it’s crafting a new site or refining an existing product, I
            bring a full-stack understanding with a frontend focus, working solo
            or as part of a team.
          </li>
        </ul>

        <h2 id="why" className="font-sans font-bold text-2xl mb-5">
          Why I do it:
        </h2>

        <p className="text-lg mb-5">
          Becoming a dad made one thing clear: if I was going to stay in tech,
          it had to be for work that truly mattered. My two kids (8 and 10), and
          the world I want for them, are the filter for every project I choose.
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
          space — exploring how learning happens beyond traditional education
          and how technology can help make that more sustainable.
        </p>

        <p className="text-lg mb-5">
          Let’s chat{" "}
          <a
            href="mailto:me@mischacolley.com.au"
            className="text-brand underline"
          >
            me@mischacolley.com.au
          </a>{" "}
          :)
        </p>
      </article>
    </>
  );
}
