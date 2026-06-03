import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: "⚡",
    title: "Fast Execution",
    description:
      "Lean processes and focused development allow projects to launch significantly faster.",
  },
  {
    icon: "💰",
    title: "Premium Value",
    description:
      "Agency-level quality without the overhead and inflated pricing.",
  },
  {
    icon: "🎧",
    title: "Long-Term Support",
    description:
      "Partnership beyond launch with ongoing improvements and growth support.",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      {/* Grid */}
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
        <motion.div
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
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Kairoza
          </div>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Building Digital Products
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              That Actually Grow Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Kairoza helps ambitious businesses create modern digital
            experiences that generate trust, attract customers and
            accelerate growth.
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          {/* Founder Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-4xl font-black shadow-2xl">
                  V
                </div>

                <div>
                  <h3 className="text-3xl font-black">
                    Vineed
                  </h3>

                  <p className="text-indigo-400">
                    Founder & Digital Strategist
                  </p>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-300">
                I started Kairoza with a simple mission:
                help businesses build a professional online presence
                without dealing with bloated agencies, confusing
                processes or overpriced solutions.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Every project is approached with a growth mindset —
                combining design, development and marketing to create
                digital assets that produce measurable business value.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-10 backdrop-blur-xl">
              <div className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Mission
              </div>

              <h3 className="mt-4 text-4xl font-black">
                Create Digital Experiences That Convert
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                A website should be more than a digital brochure.
                It should establish credibility, generate leads and
                become a growth engine for the business.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Growth-focused strategy",
                  "Modern design systems",
                  "High-performance development",
                  "SEO & lead generation ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                      ✓
                    </div>

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="mt-3 text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-4xl font-black">
              Why Businesses Choose Kairoza
            </h3>

            <p className="mt-4 text-slate-400">
              More than a service provider. A long-term growth partner.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {strengths.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h4 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-12 backdrop-blur-xl">
            <h3 className="text-4xl font-black">
              Ready To Build Something Exceptional?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Let's discuss your goals and create a digital product
              designed to drive real business growth.
            </p>

            <button
              className="
                mt-8
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-[0_20px_50px_rgba(79,70,229,0.35)]
                transition
                hover:scale-105
              "
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;