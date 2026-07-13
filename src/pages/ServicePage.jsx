import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SERVICE_PAGES, SITE_STRUCTURE } from "../utils/seo-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const ServicePage = () => {
  const { slug } = useParams();
  const page = SERVICE_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">Page Not Found</h1>
          <p className="mt-4 text-zinc-400">The service page you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white">Go Home</Link>
        </div>
      </div>
    );
  }

  const allPages = SITE_STRUCTURE.services;
  const currentIndex = allPages.findIndex((p) => p.slug === slug);
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919526673206?text=${encodeURIComponent("Hi Kairoza! I'm interested in " + page.h1 + ". Can you share more details?")}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDesc} />
        <link rel="canonical" href={`https://kairoza.in/services/${page.slug}`} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDesc} />
        <meta property="og:url" content={`https://kairoza.in/services/${page.slug}`} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.metaDesc} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": page.h1,
            "description": page.metaDesc,
            "provider": { "@type": "Organization", "name": "Kairoza", "url": "https://kairoza.in/" },
            "areaServed": { "@type": "State", "name": "Kerala" },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-zinc-950 pt-32">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-sm text-zinc-500"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-brand-500">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-500">{page.h1}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-black text-white md:text-6xl">{page.h1}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{page.intro}</p>
          </motion.div>

          <motion.section {...fadeUp(0.1)} className="mt-16">
            <h2 className="text-2xl font-bold text-white">{page.h2 || "What's Included"}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-500/20 text-xs text-brand-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.section>

          {page.process && page.process.length > 0 && (
            <motion.section {...fadeUp(0.15)} className="mt-16">
              <h2 className="text-2xl font-bold text-white">How It Works</h2>
              <div className="mt-8 space-y-0">
                {page.process.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-sm font-bold text-brand-500">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < page.process.length - 1 && (
                        <div className="mt-2 h-full w-px bg-zinc-800" />
                      )}
                    </div>
                    <div className="pb-10 pt-1">
                      <p className="text-zinc-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {page.technologies && page.technologies.length > 0 && (
            <motion.section {...fadeUp(0.2)} className="mt-16">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
                <h2 className="text-2xl font-bold text-white">Technologies We Use</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {page.technologies.map((tech, i) => (
                    <span key={i} className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          <motion.section {...fadeUp(0.25)} className="mt-16">
            <h2 className="text-2xl font-bold text-white">Industries We Serve</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.industries.map((ind, i) => (
                <span key={i} className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">{ind}</span>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.3)} className="mt-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-2xl font-bold text-white">Why Choose Kairoza</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.whyUs}</p>
            </div>
          </motion.section>

          <motion.div {...fadeUp(0.35)} className="mt-16 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleWhatsApp}
              className="rounded-xl bg-brand-500 px-8 py-4 font-semibold text-white transition hover:bg-brand-600"
            >
              Get a Quote for This Service
            </button>
            <Link
              to="/"
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 text-center font-semibold text-zinc-300 transition hover:bg-zinc-800"
            >
              Back to Home
            </Link>
          </motion.div>

          {page.faqs.length > 0 && (
            <motion.section {...fadeUp(0.4)} className="mt-24">
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-4">
                {page.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 [&[open]]:border-zinc-700"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-white transition-colors hover:text-brand-500">
                      <span>{faq.q}</span>
                      <svg className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="border-t border-zinc-800 px-6 py-5 text-sm leading-relaxed text-zinc-400">{faq.a}</div>
                  </details>
                ))}
              </div>
            </motion.section>
          )}

          {page.relatedServices.length > 0 && (
            <motion.section {...fadeUp(0.45)} className="mt-24 border-t border-zinc-800 pt-16">
              <h2 className="text-xl font-bold text-white">Related Services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.relatedServices.map((relSlug) => {
                  const relPage = SERVICE_PAGES.find((p) => p.slug === relSlug);
                  if (!relPage) return null;
                  return (
                    <Link
                      key={relSlug}
                      to={`/services/${relSlug}`}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700"
                    >
                      <h3 className="font-bold text-white">{relPage.h1}</h3>
                      <p className="mt-2 text-sm text-zinc-400">{relPage.metaDesc.slice(0, 100)}...</p>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}

          <motion.div
            {...fadeUp(0.5)}
            className="mt-12 flex items-center justify-between border-t border-zinc-800 pt-8"
          >
            <div>
              {prevPage && (
                <Link to={`/services/${prevPage.slug}`} className="text-sm text-zinc-400 hover:text-brand-500">
                  ← {prevPage.title}
                </Link>
              )}
            </div>
            <div>
              {nextPage && (
                <Link to={`/services/${nextPage.slug}`} className="text-sm text-zinc-400 hover:text-brand-500">
                  {nextPage.title} →
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
