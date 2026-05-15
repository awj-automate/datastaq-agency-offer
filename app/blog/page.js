import Link from 'next/link';
import { client, urlFor } from '../../lib/sanity';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const revalidate = 60;

export const metadata = {
  title: 'Blog | DataStaq AI',
  description: 'Insights on data integration, dashboards, and operational intelligence from the DataStaq AI team.',
};

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      coverImage
    }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="sub-title mb-6 mx-auto w-fit">
            <span className="sub-title-dot" />
            Blog
          </div>
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-6 leading-tight">
            Insights & <span className="gradient-text">Updates</span>
          </h1>
          <p className="font-jakarta text-lg text-ds-muted max-w-2xl mx-auto leading-relaxed">
            Thoughts on data integration, operational intelligence, and building a single source of truth.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="pb-24 lg:pb-32 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {posts.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="font-jakarta font-bold text-xl text-ds-heading mb-3">Coming Soon</div>
            <p className="font-jakarta text-ds-muted max-w-md mx-auto">
              We&apos;re working on our first posts. Check back soon for insights on data strategy, integration patterns, and more.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current.replace(/^blog\//, '')}`}
                className="card overflow-hidden group transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex flex-col sm:flex-row">
                  {post.coverImage && (
                    <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={urlFor(post.coverImage).width(512).height(320).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-center">
                    {post.publishedAt && (
                      <div className="font-jakarta text-xs text-ds-subtle mb-2">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        {post.author && <span> &middot; {post.author}</span>}
                      </div>
                    )}
                    <h2 className="font-jakarta font-bold text-xl text-ds-heading mb-2 group-hover:text-ds-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-jakarta text-sm text-ds-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
