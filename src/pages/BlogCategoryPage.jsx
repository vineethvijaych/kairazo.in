import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BLOG_CATEGORIES, BLOG_TOPICS } from "../utils/seo-data";

const BlogCategoryPage = () => {
  const { category } = useParams();
  const cat = BLOG_CATEGORIES.find((c) => c.slug === category);

  if (!cat) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">Category Not Found</h1>
          <Link to="/blog" className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white">View All Articles</Link>
        </div>
      </div>
    );
  }

  const topics = BLOG_TOPICS.filter((t) => t.category === category);

  return (
    <>
      <Helmet>
        <title>{cat.name} — Kairoza Blog</title>
        <meta name="description" content={`Read ${cat.name} articles and guides from Kairoza's blog.`} />
        <link rel="canonical" href={`https://kairoza.in/blog/category/${cat.slug}`} />
      </Helmet>

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
            <span className="text-brand-500">{cat.name}</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black text-white md:text-6xl">{cat.name}</h1>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to={`/blog/${topic.slug}`} className="group block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700">
                  <h2 className="font-bold text-white group-hover:text-brand-500">{topic.title}</h2>
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

export default BlogCategoryPage;
