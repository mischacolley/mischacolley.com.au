import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Mischa Colley | Dad, Creative Technologist, Tech Leader, FED",
  description:
    "I'm dad to a 8 and 10 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country.",
  openGraph: {
    title: "Mischa Colley | Dad, Creative Technologist, Tech Leader, FED",
    description:
      "I'm dad to a 8 and 10 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country.",
    url: "https://mischacolley.com.au/now",
  },
  twitter: {
    title: "Mischa Colley | Dad, Creative Technologist, Tech Leader, FED",
    description:
      "I'm dad to a 8 and 10 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country.",
  },
};

export default function Now() {
  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-16">
        <h1 className="font-sans font-bold text-3xl mb-5">Now</h1>

        <p className="text-lg mb-5">
          I'm dad to a 8 and 10 year old. We live just north of Byron Bay in the
          beautiful Northern Rivers region of NSW, Australia. Bundjalung and
          Yugambeh country. My kids are unschooled and I co-parent with their
          mum so they are with me about 50% of the time.
        </p>

        <h2 className="font-sans font-bold text-2xl mb-5">Biger picture ...</h2>

        <p className="text-lg mb-5">
          Over the last few years as I've delivered projects for many of my NFP,
          Social Enterprises and B Corp clients I've been working on balancing
          my need to work with the life I want to live. Those that have worked
          with me will no that sometimes means I'm delivering projects from my
          4WD and Starlink is only on while were working :)
        </p>

        <p className="text-lg mb-5">
          I want to build fulfilling relationships with humans doing their best
          work on projects that really matter.
        </p>

        <p className="text-lg mb-5">
          If you're one of those people, let's chat. And if you're a UX/UI
          Designer, Developer, Software Engineer, Technologists, [insert related
          profession here] I'd love to speak to you about getting together
          intentionally as a community within the for purpose space.
        </p>

        <p className="text-lg mb-5">
          When I'm not building websites or providing technical leadership and
          digital strategy you'll find me off-grid and as far away from screens
          and signals as my barefeet will take me and my kids.
        </p>

        <p className="text-lg mb-5">
          Somewhere in between you'll find me{" "}
          <a
            href="http://opencampusproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            daydreaming about alternative learning models
          </a>{" "}
          and exploring how learning takes place outside of traditional
          educational institutions and how we might make that more sustainable
          for all involved.
        </p>
      </article>
    </>
  );
}
