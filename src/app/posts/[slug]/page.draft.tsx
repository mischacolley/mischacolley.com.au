import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import DraftBanner from "@/components/DraftBanner";
import { getAllPostSlugs, getPostData } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Belt and braces, matching the posts index and History. The route should
// never reach a production build at all; if it ever does, it should not be
// indexed on the way out.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-16">
        <DraftBanner />

        <Link href="/posts" className="text-brand underline mb-4 inline-block">
          ← Back to Posts
        </Link>

        <h1 className="font-sans font-bold text-3xl mb-5">{post.title}</h1>

        <div className="font-sans text-base mb-5 text-gray-600">
          {new Date(post.date).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {post.featuredImage && (
          <div className="mb-8">
            <Image
              src={`/posts/${post.slug}/${post.featuredImage}`}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
