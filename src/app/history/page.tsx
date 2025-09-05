import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Mischa Colley | History",
  description:
    "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
  openGraph: {
    title: "Mischa Colley | History",
    description:
      "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
    url: "https://mischacolley.com.au/history",
  },
  twitter: {
    title: "Mischa Colley | History",
    description:
      "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
  },
};

export default function History() {
  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-16">
        <h1 className="text-3xl mb-5">History</h1>

        <p className="text-xl mb-5">It's currently being written ...</p>
      </article>
    </>
  );
}
