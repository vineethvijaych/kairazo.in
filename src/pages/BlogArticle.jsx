import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BLOG_TOPICS, BLOG_CATEGORIES } from "../utils/seo-data";
import ReadingProgress from "../components/ReadingProgress";
import TableOfContents from "../components/TableOfContents";
import AuthorBio from "../components/AuthorBio";

const BlogArticle = () => {
  const { slug } = useParams();
  const article = BLOG_TOPICS.find((t) => t.slug === slug);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">Article Not Found</h1>
          <p className="mt-4 text-zinc-400">This article hasn't been published yet or may have been moved.</p>
          <Link to="/blog" className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white">View All Articles</Link>
        </div>
      </div>
    );
  }

  const category = BLOG_CATEGORIES.find((c) => c.slug === article.category);
  const related = BLOG_TOPICS
    .filter((t) => t.category === article.category && t.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} — Kairoza Blog</title>
        <meta name="description" content={`Read "${article.title}" on Kairoza's blog. ${article.intent} guide for Kerala businesses.`} />
        <link rel="canonical" href={`https://kairoza.in/blog/${article.slug}`} />
      </Helmet>

      <ReadingProgress />

      <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-sm text-zinc-500"
          >
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-brand-500">Blog</Link>
            <span className="mx-2">/</span>
            {category && (
              <>
                <Link to={`/blog/category/${category.slug}`} className="hover:text-brand-500">{category.name}</Link>
                <span className="mx-2">/</span>
              </>
            )}
            <span className="text-zinc-400">{article.title.slice(0, 50)}...</span>
          </motion.nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <article>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {category && (
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    {category.name}
                  </div>
                )}
                <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">{article.title}</h1>
                <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-500">K</span>
                  <span>Kairoza Team</span>
                  <span className="text-zinc-700">•</span>
                  <span>Article</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="prose prose-invert prose-zinc mt-12 max-w-none"
              >
                <p className="text-zinc-400 leading-relaxed">
                  This article is part of Kairoza's content library for Kerala businesses.
                  Full content coming soon.
                </p>
                <p className="text-zinc-500 text-sm mt-4">
                  In the meantime, explore our <Link to="/services" className="text-brand-500 hover:underline">services</Link> or{" "}
                  <Link to="/portfolio" className="text-brand-500 hover:underline">portfolio</Link> to learn how we can help your business grow online.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12"
              >
                <AuthorBio name="Kairoza Team" role="Digital Growth Studio" />
              </motion.div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <TableOfContents />

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Need Help?</h3>
                  <p className="text-sm text-zinc-400">Have questions about this topic?</p>
                  <a
                    href="https://wa.me/919526673206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 border-t border-zinc-800 pt-16"
            >
              <h2 className="text-2xl font-bold text-white">Related Articles</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {related.map((topic) => (
                  <Link
                    key={topic.slug}
                    to={`/blog/${topic.slug}`}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700"
                  >
                    <h3 className="font-bold text-white group-hover:text-brand-500">{topic.title}</h3>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand-500">Read →</span>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
