import React from "react";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "../utils/constants";

const Pricing = ({ onOpenEstimator, onOpenConsultation }) => {
  const handlePlanClick = (plan) => {
    if (plan.price === "Custom") {
      onOpenEstimator();
    } else {
      const featuresList = plan.features.map(f => `  - ${f}`).join("\n");
      const msg = encodeURIComponent(
        `Hi Kairoza! I'm interested in the ${plan.name} plan (Rs.${plan.price}).\n\nFeatures I'm looking for:\n${featuresList}\n\nCan you share more details?`
      );
      window.open(`https://wa.me/919526673206?text=${msg}`, "_blank");
    }
  };

  return (
    <section id="pricing" className="relative bg-stone-50 py-24 md:py-32">
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
          <h2 className="mt-4 text-3xl font-black text-stone-900 md:text-5xl">
            Simple Pricing
          </h2>
          <p className="mt-4 text-stone-500">
            Fixed-price packages with no surprises.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
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
                  Popular
                </div>
              )}

              <div className="p-8">
                <div className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  {plan.name}
                </div>

                <div className="mt-4 flex items-end gap-1.5">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-black text-stone-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-black text-stone-900">
                        Rs.{plan.price}
                      </span>
                      <span className="pb-1 text-sm text-stone-400">starting</span>
                    </>
                  )}
                </div>

                <p className="mt-2 text-sm text-stone-400">{plan.description}</p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-stone-600">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-100 text-xs text-brand-600">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "border border-stone-300 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {plan.price === "Custom" ? "Get Custom Quote" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-lg rounded-2xl border border-stone-200 bg-white p-8 text-center"
        >
          <h3 className="text-lg font-bold text-stone-900">Need a custom solution?</h3>
          <p className="mt-1 text-sm text-stone-500">
            SaaS, marketplaces, enterprise applications.
          </p>
          <button
            onClick={onOpenConsultation}
            className="mt-5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Schedule a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
