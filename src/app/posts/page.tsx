import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { getAllPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Mischa Colley | Posts",
  description:
    "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
  openGraph: {
    title: "Mischa Colley | Posts",
    description:
      "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
    url: "https://mischacolley.com.au/posts",
  },
  twitter: {
    title: "Mischa Colley | Posts",
    description:
      "Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.",
  },
};

export default function Posts() {
  const posts = getAllPostsData();

  return (
    <>
      <Header />

      <section className="max-w-5xl mx-auto px-16">
        <h1 className="font-sans font-bold text-3xl mb-5">Posts</h1>

        {posts.map((post) => (
          <article key={post.slug} className="mb-8">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="font-sans font-bold text-2xl mb-1 hover:text-brand">
                {post.title}
              </h2>
              {post.featuredImage && (
                <div className="mb-3">
                  <Image
                    src={`/posts/${post.slug}/${post.featuredImage}`}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}
              <div className="font-sans text-base mb-3 text-gray-600">
                {new Date(post.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <p className="text-lg mb-5">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
