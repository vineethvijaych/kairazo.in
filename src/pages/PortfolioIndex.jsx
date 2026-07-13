import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { PORTFOLIO_PAGES } from "../utils/seo-data";

const PortfolioIndex = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio — Kairoza | Website & Web Application Projects in Kerala</title>
        <meta name="description" content="Browse Kairoza's portfolio of websites, web applications, and digital projects built for businesses in Kerala. See our work for jewellery, rentals, education, and more." />
        <link rel="canonical" href="https://kairoza.in/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black text-white md:text-6xl">Our Portfolio</h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Recent projects delivered by Kairoza for businesses across Kerala.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PORTFOLIO_PAGES.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/portfolio/${p.slug}`} className="group block">
                  {p.image && (
                    <div className="overflow-hidden rounded-2xl">
                      <img src={p.image} alt={p.alt} title={p.projectName} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">{p.category}</div>
                    <h2 className="mt-1 text-xl font-bold text-white group-hover:text-brand-500">{p.projectName}</h2>
                    <p className="mt-2 text-sm text-zinc-400">{p.overview.slice(0, 150)}...</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-brand-500">View Case Study →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioIndex;
