import React from "react";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "../utils/constants";

const Pricing = ({ onOpenEstimator, onOpenConsultation }) => {
  const handlePlanClick = (plan) => {
    if (plan.price === "Custom") {
      onOpenEstimator();
    } else {
      const featuresList = plan.features.map(f => `  ✅ ${f}`).join("\n");
      const msg = encodeURIComponent(
        `Hi Kairoza! I'm interested in the ${plan.name} plan (₹${plan.price}).\n\nHere's what I'm looking for:\n${featuresList}\n\nCan you share more details?`
      );
      window.open(`https://wa.me/919526673206?text=${msg}`, "_blank");
    }
  };
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050816] py-28 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Pricing
          </div>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Transparent Pricing.
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Premium Results.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Choose a package that matches your business goals. Every project is
            crafted with performance, design and growth in mind.
          </p>
        </div>

        {/* Trust Bar */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "100% Responsive",
              desc: "Optimized for all devices",
            },
            {
              title: "SEO Ready",
              desc: "Built for search visibility",
            },
            {
              title: "Fast Delivery",
              desc: "Quick turnaround times",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
            >
              <h4 className="font-bold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[32px]
                border
                transform-gpu
                transition-all
                duration-300
                ${
                  plan.popular
                    ? "border-indigo-500 bg-gradient-to-b from-indigo-500/10 to-purple-500/10 shadow-[0_0_60px_rgba(99,102,241,0.25)] scale-[1.02]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute left-1/2 top-5 -translate-x-1/2">
                  <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glow */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
              )}

              <div className="relative p-8">
                <div className="mt-6">
                  <div className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                    {plan.name}
                  </div>

                  <div className="mt-5 flex items-end gap-2">
                    {plan.price === "Custom" ? (
                      <span className="text-5xl font-black">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-black">
                          ₹{plan.price}
                        </span>
                        <span className="pb-2 text-slate-500">
                          starting
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-4 text-slate-400">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <div className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Included Features
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">
                          ✓
                        </div>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`
                    mt-10
                    w-full
                    rounded-2xl
                    py-4
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:scale-[1.02]"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }
                  `}
                >
                  {plan.price === "Custom" ? "Get Custom Quote" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-24">
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 backdrop-blur-xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
                  Enterprise Solutions
                </div>

                <h3 className="mt-5 text-4xl font-black">
                  Need Something
                  <span className="block text-indigo-400">
                    Completely Custom?
                  </span>
                </h3>

                <p className="mt-5 text-slate-400">
                  For startups, SaaS products, marketplaces, enterprise
                  applications and large-scale digital ecosystems.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button
                  onClick={onOpenConsultation}
                  className="
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-purple-600
                    to-indigo-600
                    px-10
                    py-5
                    text-lg
                    font-semibold
                    text-white
                    shadow-[0_25px_50px_rgba(79,70,229,0.35)]
                    transition
                    hover:scale-105
                  "
                >
                  Schedule Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-14 text-center">
          <p className="text-slate-500">
            No hidden fees • Transparent communication • Dedicated support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;