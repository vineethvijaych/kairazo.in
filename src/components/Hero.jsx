import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onOpenEstimator }) => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
          >
            Digital Growth Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black leading-[1.1] text-white md:text-8xl"
          >
            Digital Products
            <span className="mt-2 block text-brand-500">Built For Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            We build websites, web apps and digital systems that help businesses
            attract customers, build trust and grow revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={onOpenEstimator}
              className="rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-600"
            >
              Start a Project
            </button>
            <button
              onClick={scrollToWork}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 text-base font-semibold text-zinc-300 transition hover:bg-zinc-800"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
