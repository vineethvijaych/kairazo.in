import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../utils/constants";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Services = ({ onOpenConsultation }) => {
  return (
    <section
      id="services"
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
          <div className="inline-flex items-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Services
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Everything You Need To
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Online
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Strategy, branding, design, development and marketing under one
            execution-focused team that helps businesses attract, convert and
            retain more customers.
          </p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-transparent to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              {/* Title */}
              <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-indigo-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {service.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-10 py-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold">
              Need Something Custom?
            </h3>

            <p className="mt-3 max-w-xl text-slate-400">
              Every business is different. Let's discuss your goals and create
              a solution tailored specifically for your growth.
            </p>

            <button
  onClick={onOpenConsultation}
  className="
    mt-6
    rounded-2xl
    bg-gradient-to-r
    from-indigo-600
    to-purple-600
    px-8
    py-4
    font-semibold
    text-white
    shadow-[0_20px_50px_rgba(79,70,229,0.3)]
    transition
    hover:scale-105
  "
>
  Book Free Consultation
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;