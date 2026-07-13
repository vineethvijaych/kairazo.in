import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../utils/constants";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = ({ onOpenConsultation }) => {
  return (
    <section id="services" className="relative bg-zinc-950 py-24 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            02 / Services
          </div>
          <h2 id="services-heading" className="mt-4 text-3xl font-black text-white md:text-5xl">
            What We Build
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Design, development and marketing under one team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-zinc-950 p-8 transition-colors hover:bg-zinc-900 md:p-10"
              role="listitem"
            >
              <div className="text-5xl font-black text-zinc-800">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenConsultation}
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-700"
            aria-label="Book a free consultation call"
          >
            Book a Free Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
