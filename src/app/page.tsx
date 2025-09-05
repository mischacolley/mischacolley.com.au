import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-16">
        <p className="text-3xl leading-relaxed mb-5">
          Hi, I'm <strong>Mischa Colley</strong>. As a{" "}
          <em>Creative Technologist</em> I help purposeful organisations with
          digital technology. I've worked in digital for more than a decade, as
          both a Developer and CTO.
        </p>

        <p className="text-xl mb-5">
          Recently someone referred to me as a Swiss Army knife — an adaptable,
          multi-skilled problem solver, ready for anything. Being a proud
          generalist I took it as the highest compliment :)
        </p>

        <p className="text-xl mb-5">
          See what I'm doing&nbsp;
          <Link className="text-brand underline" href="/now">
            now
          </Link>{" "}
          and how we could{" "}
          <Link className="text-brand underline" href="/work">
            work together
          </Link>
          .
        </p>

        <a
          className="bg-brand hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-2 inline-block"
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
