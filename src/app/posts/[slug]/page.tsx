import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { getAllPostSlugs, getPostData } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
