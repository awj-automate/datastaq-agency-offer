import Link from 'next/link';
import { client, urlFor } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const revalidate = 60;

async function getPost(slug) {
  // Try exact slug first, then with "blog/" prefix (some posts have it in Sanity)
  const blogSlug = `blog/${slug}`;
  return client.fetch(
    `*[_type == "post" && (slug.current == $slug || slug.current == $blogSlug)][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      coverImage,
      body
    }`,
    { slug, blogSlug }
  );
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found | DataStaq AI' };
  return {
    title: `${post.title} | DataStaq AI`,
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ''}
          className="w-full"
        />
      </div>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="my-5 leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="font-jakarta font-extrabold text-3xl text-ds-heading mt-12 mb-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-jakarta font-bold text-2xl text-ds-heading mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-jakarta font-bold text-xl text-ds-heading mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-jakarta font-semibold text-lg text-ds-heading mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-ds-primary pl-5 my-6 text-ds-muted italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-5 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-5 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ds-heading">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ds-primary underline underline-offset-2 hover:text-ds-primary-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      {/* Article */}
      <article className="pt-32 pb-20 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Meta */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 font-jakarta text-sm text-ds-primary hover:text-ds-primary-dark transition-colors mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 4l-4 4 4 4" />
            </svg>
            All Posts
          </Link>
          {post.publishedAt && (
            <div className="font-jakarta text-sm text-ds-subtle mb-4">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {post.author && <span> &middot; {post.author}</span>}
            </div>
          )}
          <h1 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ds-heading leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Cover image */}
        {post.coverImage && (
          <div className="image-shine mb-10">
            <img
              src={urlFor(post.coverImage).width(1200).height(630).url()}
              alt={post.title}
              className="w-full"
            />
          </div>
        )}

        {/* Body */}
        <div className="font-jakarta text-base text-ds-text leading-relaxed">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-ds-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 font-jakarta text-sm text-ds-primary hover:text-ds-primary-dark transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 4l-4 4 4 4" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
