import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SERVICE_PAGES } from "../utils/seo-data";

const ServicesIndex = () => {
  const grouped = [
    { heading: "Website Development", pages: SERVICE_PAGES.filter(p =>
      ["website-development-kerala", "website-development-kasaragod", "restaurant-website-development",
       "jewellery-website-development", "clinic-website-development", "rental-website-development",
       "school-website-development", "college-website-development", "startup-web-development",
       "ecommerce-development"].includes(p.slug)
    )},
    { heading: "Web Applications & Software", pages: SERVICE_PAGES.filter(p =>
      ["web-application-development", "custom-software-development", "erp-development", "cms-development"].includes(p.slug)
    )},
    { heading: "Digital Marketing & SEO", pages: SERVICE_PAGES.filter(p =>
      ["digital-marketing-kerala", "seo-services-kerala", "google-ads-management", "meta-ads-management"].includes(p.slug)
    )},
  ];

  return (
    <>
      <Helmet>
        <title>All Services — Kairoza | Website Development, SEO & Digital Marketing in Kerala</title>
        <meta name="description" content="Explore all services by Kairoza: website development, web applications, SEO, digital marketing, e-commerce, and custom software development in Kerala." />
        <link rel="canonical" href="https://kairoza.in/services" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black text-white md:text-6xl">Our Services</h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Complete digital solutions for businesses in Kerala — from websites and web apps to SEO and marketing.
            </p>
          </motion.div>

          {grouped.map((group, gi) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.1 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-white">{group.heading}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.pages.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/services/${p.slug}`}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700"
                  >
                    <h3 className="font-bold text-white group-hover:text-brand-500">{p.h1}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{p.metaDesc.slice(0, 120)}...</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-brand-500">Learn more →</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesIndex;
