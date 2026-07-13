import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anjis Jewel",
    category: "Luxury eCommerce",
    description: "Premium online store built for conversions and scalable growth.",
    url: "https://anjisjewel.com",
    image: "/projects/anjis-jewel.jpeg",
  },
  {
    title: "KL Rentals",
    category: "Rental Marketplace",
    description: "Lead-generation platform optimized for local search and organic growth.",
    url: "https://klrentals.in",
    image: "/projects/kl-rentals.jpeg",
  },
  {
    title: "Sree Narayana College of Management Studies, Periya",
    category: "Educational Institution Website",
    description: "Designed and developed a modern, responsive college website with a clean user experience and easy content management. The platform showcases academic programs, departments, faculty, campus facilities, news, events, placements, admissions, and institutional information while ensuring accessibility across all devices.",
    url: "https://www.sncmsperiya.in/",
    image: "/projects/snc-periya.jpeg",
  },
];

const Work = ({ onOpenEstimator }) => {
  return (
    <section id="work" className="relative bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
            01 / Work
          </div>
          <h2 className="mt-4 text-3xl font-black text-stone-900 md:text-5xl">
            Recent Projects
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[500px]"
                  />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/40"
                  >
                    <span className="translate-y-4 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Visit Site
                    </span>
                  </a>
                </div>

                <div className={index % 2 === 1 ? "md:order-first" : ""}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {project.category}
                  </div>
                  <h3 className="mt-3 text-3xl font-black text-stone-900 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-500">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition hover:text-brand-600"
                  >
                    View Project
                    <span className="text-lg">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={onOpenEstimator}
              className="rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-600"
            >
              Start Your Project
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
