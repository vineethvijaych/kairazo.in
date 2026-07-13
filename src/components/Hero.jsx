import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onOpenEstimator }) => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-zinc-950 pt-40 pb-32 md:min-h-[calc(100vh-4rem)] md:flex md:items-center md:pt-16 md:pb-0">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500"
          >
            Digital Growth Studio
          </motion.p>

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
              aria-label="Start a project enquiry"
            >
              Start a Project
            </button>
            <button
              onClick={scrollToWork}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4 text-base font-semibold text-zinc-300 transition hover:bg-zinc-800"
              aria-label="View our recent work"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer md:block"
        aria-label="Scroll to work section"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-5 w-5 text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.button>
    </section>
  );
};

export default Hero;
