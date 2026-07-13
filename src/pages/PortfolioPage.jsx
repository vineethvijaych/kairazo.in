import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { PORTFOLIO_PAGES } from "../utils/seo-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const PortfolioPage = () => {
  const { slug } = useParams();
  const page = PORTFOLIO_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white">Project Not Found</h1>
          <p className="mt-4 text-zinc-400">The portfolio page you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white">Go Home</Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919526673206?text=${encodeURIComponent("Hi Kairoza! I saw " + page.projectName + " and would like to discuss a similar project.")}`, "_blank");
  };

  const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-bold text-white md:text-3xl">{children}</h2>
  );

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDesc} />
        <link rel="canonical" href={`https://kairoza.in/portfolio/${page.slug}`} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDesc} />
        <meta property="og:url" content={`https://kairoza.in/portfolio/${page.slug}`} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.metaDesc} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": page.projectName,
            "description": page.overview,
            "author": { "@type": "Organization", "name": "Kairoza", "url": "https://kairoza.in/" },
            "about": page.category,
            "url": page.url !== "#" ? page.url : `https://kairoza.in/portfolio/${page.slug}`,
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-zinc-950">
        <nav
          className="mx-auto max-w-6xl px-6 pt-32 pb-0"
          aria-label="Breadcrumb"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-sm text-zinc-500"
          >
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/portfolio" className="hover:text-brand-500">Portfolio</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-500">{page.projectName}</span>
          </motion.div>
        </nav>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              {page.category}
            </div>
            <h1 className="text-4xl font-black text-white md:text-6xl lg:text-7xl">
              {page.projectName}
            </h1>
          </motion.div>
        </section>

        {page.image && (
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto max-w-6xl px-6 pb-16 md:pb-24"
          >
            <img
              src={page.image}
              alt={page.alt}
              title={page.projectName}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </motion.figure>
        )}

        <div className="mx-auto max-w-5xl px-6 pb-24">
          <motion.section {...fadeUp(0.1)}>
            <SectionTitle>Project Overview</SectionTitle>
            <p className="mt-4 leading-relaxed text-zinc-400">{page.overview}</p>
          </motion.section>

          {page.clientBackground && (
            <motion.section {...fadeUp(0.15)} className="mt-16">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                  <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <SectionTitle>Client Background</SectionTitle>
                <p className="mt-4 leading-relaxed text-zinc-400">{page.clientBackground}</p>
              </div>
            </motion.section>
          )}

          <motion.section {...fadeUp(0.2)} className="mt-16">
            <SectionTitle>Business Goals</SectionTitle>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-500/20 text-xs text-brand-500">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...fadeUp(0.25)} className="mt-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <SectionTitle>Challenges</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.challenges}</p>
            </div>
          </motion.section>

          {page.gallery.length > 0 && (
            <motion.section {...fadeUp(0.28)} className="mt-16">
              <SectionTitle>Design Preview</SectionTitle>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {page.gallery.slice(0, 2).map((img, i) => (
                  <img key={i} src={img} alt={`${page.projectName} design ${i + 1}`} className="rounded-xl border border-zinc-800" />
                ))}
              </div>
            </motion.section>
          )}

          {page.planningProcess && (
            <motion.section {...fadeUp(0.3)} className="mt-16">
              <SectionTitle>Research & Planning</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.planningProcess}</p>
              {page.wireframing && (
                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                  <h3 className="mb-3 font-semibold text-white">Information Architecture</h3>
                  <p className="leading-relaxed text-zinc-400">{page.wireframing}</p>
                </div>
              )}
            </motion.section>
          )}

          {page.gallery.length > 0 && (
            <motion.section {...fadeUp(0.32)} className="mt-16">
              {page.gallery.length > 2 && (
                <div className="grid gap-4 sm:grid-cols-3">
                  {page.gallery.slice(2, 5).map((img, i) => (
                    <img key={i} src={img} alt={`${page.projectName} screenshot ${i + 1}`} className="rounded-xl border border-zinc-800" />
                  ))}
                </div>
              )}
            </motion.section>
          )}

          <motion.section {...fadeUp(0.35)} className="mt-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <SectionTitle>UI/UX Design Decisions</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.uiDesign}</p>
              {page.uxDecisions && (
                <div className="mt-6 border-t border-zinc-800 pt-6">
                  <h3 className="mb-3 font-semibold text-white">UX Highlights</h3>
                  <p className="leading-relaxed text-zinc-400">{page.uxDecisions}</p>
                </div>
              )}
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.38)} className="mt-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <SectionTitle>Development Process</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.developmentProcess}</p>
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.4)} className="mt-16">
            <SectionTitle>Technologies Used</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.techStack.map((tech, i) => (
                <span key={i} className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">{tech}</span>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeUp(0.42)} className="mt-16">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <SectionTitle>Responsive Design</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.responsiveStrategy}</p>
            </div>
          </motion.section>

          <motion.div {...fadeUp(0.44)} className="mt-16 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10">
                <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-white">Performance</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{page.performanceOptimizations}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18a9 9 0 019-9" /></svg>
              </div>
              <h3 className="font-semibold text-white">SEO</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{page.seoConsiderations}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="font-semibold text-white">Accessibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{page.accessibility || "Semantic HTML, ARIA labels, keyboard navigation, sufficient colour contrast, focus indicators, and screen reader support implemented throughout."}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="font-semibold text-white">Security</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{page.security}</p>
            </div>
          </motion.div>

          <motion.section {...fadeUp(0.46)} className="mt-16">
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-8">
              <SectionTitle>Results</SectionTitle>
              <p className="mt-4 leading-relaxed text-zinc-400">{page.overview}</p>
              <ul className="mt-6 space-y-3">
                {page.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-500/20 text-xs text-green-500">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {page.lessonsLearned && (
            <motion.section {...fadeUp(0.48)} className="mt-16">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
                <SectionTitle>Key Takeaways</SectionTitle>
                <p className="mt-4 leading-relaxed text-zinc-400">{page.lessonsLearned}</p>
              </div>
            </motion.section>
          )}

          <motion.section {...fadeUp(0.5)} className="mt-16 flex flex-col gap-4 sm:flex-row">
            {page.url !== "#" && (
              <a
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-8 py-4 font-semibold text-white transition hover:bg-brand-600"
              >
                Visit Live Site →
              </a>
            )}
            <button
              onClick={handleWhatsApp}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 font-semibold text-zinc-300 transition hover:bg-zinc-800"
            >
              Build Something Similar
            </button>
            <Link
              to="/portfolio"
              className="rounded-xl border border-zinc-800 px-8 py-4 text-center font-semibold text-zinc-500 transition hover:bg-zinc-900"
            >
              View All Projects
            </Link>
          </motion.section>

          {page.faqs.length > 0 && (
            <motion.section {...fadeUp(0.55)} className="mt-24">
              <SectionTitle>FAQs</SectionTitle>
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

          {page.relatedProjects.length > 0 && (
            <motion.section {...fadeUp(0.6)} className="mt-24 border-t border-zinc-800 pt-16">
              <SectionTitle>Related Projects</SectionTitle>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {page.relatedProjects.map((relSlug) => {
                  const relPage = PORTFOLIO_PAGES.find((p) => p.slug === relSlug);
                  if (!relPage) return null;
                  return (
                    <Link
                      key={relSlug}
                      to={`/portfolio/${relSlug}`}
                      className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">{relPage.category}</div>
                      <h3 className="mt-2 font-bold text-white group-hover:text-brand-500">{relPage.projectName}</h3>
                      <p className="mt-2 text-sm text-zinc-400">{relPage.overview.slice(0, 120)}...</p>
                      <span className="mt-3 inline-block text-sm font-semibold text-brand-500 group-hover:underline">View Case Study →</span>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
