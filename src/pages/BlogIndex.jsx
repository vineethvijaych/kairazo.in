import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BLOG_CATEGORIES, BLOG_TOPICS } from "../utils/seo-data";

const BlogIndex = () => {
  const highPriority = BLOG_TOPICS.filter((t) => t.priority === "high");

  return (
    <>
      <Helmet>
        <title>Blog — Kairoza | Website Development, SEO & Digital Marketing Insights</title>
        <meta name="description" content="Read Kairoza's blog for practical guides on website development, SEO, digital marketing, and business growth for Kerala businesses." />
        <link rel="canonical" href="https://kairoza.in/blog" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black text-white md:text-6xl">Blog</h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Guides and insights on website development, SEO, and digital marketing for Kerala businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            <Link
              to="/blog"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
            >
              All
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}`}
                className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 transition hover:border-zinc-700 hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highPriority.map((topic, i) => (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              >
                <Link to={`/blog/${topic.slug}`} className="group block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    {BLOG_CATEGORIES.find((c) => c.slug === topic.category)?.name || topic.category}
                  </div>
                  <h2 className="mt-3 font-bold text-white group-hover:text-brand-500">{topic.title}</h2>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-500">Read Article →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
