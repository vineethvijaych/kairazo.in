import React from "react";
import { motion } from "framer-motion";
import { PRICING_PLANS, ADDONS, FAQS } from "../utils/constants";

const Pricing = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/919526673206?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handlePlanClick = (plan) => {
    handleWhatsApp(`Hi Kairoza! I'm interested in the ${plan.name} plan (Rs.${plan.price}). Can you share more details?`);
  };

  return (
    <section id="pricing" className="relative scroll-mt-20 bg-stone-50 py-24 md:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
            03 / Pricing
          </div>
          <h2 id="pricing-heading" className="mt-4 text-3xl font-black text-stone-900 md:text-5xl">
            Simple Pricing
          </h2>
          <p className="mt-4 text-stone-500">
            Fixed-price packages with no surprises.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PRICING_PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl border bg-white transition-all ${
                plan.popular ? "border-brand-500 shadow-md" : "border-stone-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-3">
                  <span className="text-4xl font-black text-stone-900">
                    Rs.{plan.price}
                  </span>
                  <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                    one-time
                  </span>
                </div>

                <p className="mt-2 text-base font-semibold text-stone-700">{plan.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-stone-600">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-100 text-xs text-brand-600">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-stone-400">For: {plan.audience}</p>

                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
                  }`}
                  aria-label={`Get started with ${plan.name} plan at Rs.${plan.price}`}
                >
                  Get Started
                </button>

                <div className="mt-6 border-t border-stone-100 pt-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                    Add-ons
                  </div>
                  <div className="mt-3 space-y-2">
                    {ADDONS[plan.name].map((addon) => (
                      <div
                        key={addon.name}
                        className="flex w-full items-center justify-between rounded-lg border border-stone-200 px-4 py-2.5 text-xs"
                      >
                        <span className="text-stone-600">{addon.name}</span>
                        <span className="font-semibold text-stone-900">Rs.{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-stone-400">Custom Projects</div>
              <div className="mt-2 text-3xl font-black text-stone-900">Starting Rs.34,999</div>
              <p className="mt-2 max-w-lg text-sm text-stone-500">Admin panel, booking system, customer dashboard, payment + API integration, database, CMS, custom automation.</p>
              <p className="mt-1 text-xs text-stone-400">For: SaaS, startups, enterprise</p>
            </div>
            <button
              onClick={() => handleWhatsApp("Hi Kairoza! I'd like to discuss a custom project.")}
              className="shrink-0 rounded-xl bg-brand-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold uppercase tracking-wider text-stone-400">Website Care Plan</div>
                <span className="rounded-full bg-brand-100 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-600">Recurring</span>
              </div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-stone-900">Rs.1,499</span>
                <span className="text-sm text-stone-400">/month</span>
              </div>
              <p className="mt-2 max-w-lg text-sm text-stone-500">Hosting + backups + security updates, 2 content edits per month, priority WhatsApp support.</p>
            </div>
            <button
              onClick={() => handleWhatsApp("Hi Kairoza! I'm interested in the Website Care Plan (Rs.1,499/month).")}
              className="shrink-0 rounded-xl border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
            >
              Subscribe Now
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-24 max-w-3xl"
        >
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              FAQs
            </div>
            <h3 className="mt-4 text-3xl font-black text-stone-900 md:text-4xl">
              Everything You Need to Know
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-stone-500">
              Have questions? Here are the answers to the ones we get asked most often before starting a project.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-stone-300 hover:shadow-md [&[open]]:border-stone-300 [&[open]]:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-stone-900 transition-colors hover:text-brand-600 md:text-base">
                  <span>{faq.q}</span>
                  <svg
                    className="h-4 w-4 shrink-0 text-stone-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-stone-100 px-6 py-5 text-sm leading-relaxed text-stone-500 md:text-base">
                  <span dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
