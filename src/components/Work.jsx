import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anjis Jewel",
    category: "Luxury eCommerce",
    description: "Premium online store built for conversions and scalable growth.",
    url: "https://anjisjewel.com",
    slug: "anjis-jewel",
    image: "/projects/anjis-jewel.jpeg",
    alt: "Anjis Jewel luxury jewellery e-commerce website homepage design",
    techStack: ["React", "Tailwind CSS", "WhatsApp API", "Instagram Integration"],
  },
  {
    title: "KL Rentals",
    category: "Rental Marketplace",
    description: "Lead-generation platform optimized for local search and organic growth.",
    url: "https://klrentals.in",
    slug: "kl-rentals",
    image: "/projects/kl-rentals.jpeg",
    alt: "KL Rentals rental marketplace website homepage design",
    techStack: ["React", "Tailwind CSS", "Google Maps API", "Local SEO"],
  },
  {
    title: "Sree Narayana College of Management Studies, Periya",
    category: "Educational Institution Website",
    description: "Designed and developed a modern, responsive college website with a clean user experience and easy content management.",
    url: "https://www.sncmsperiya.in/",
    slug: "sncms-college",
    image: "/projects/snc-periya.jpeg",
    alt: "SNCMS Periya college website homepage showing academic programs and campus information",
    techStack: ["React", "Tailwind CSS", "CMS Integration", "Responsive Design"],
  },
];

const Work = ({ onOpenEstimator }) => {
  return (
    <section id="work" className="relative bg-stone-50 py-24 md:py-32" aria-labelledby="work-heading">
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
          <h2 id="work-heading" className="mt-4 text-3xl font-black text-stone-900 md:text-5xl">
            Recent Projects
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="grid items-center gap-10 md:grid-cols-2">
                <figure className="group relative overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    title={project.title}
                    loading="lazy"
                    className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[500px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/40">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="translate-y-4 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-500 hover:border-brand-500"
                      aria-label={`Visit ${project.title} website`}
                    >
                      Visit Site
                    </a>
                  </div>
                </figure>

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
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-500 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition hover:text-brand-600"
                      aria-label={`View ${project.title} project details`}
                    >
                      Live Preview
                      <span className="text-lg" aria-hidden="true">&rarr;</span>
                    </a>
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                    >
                      View Case Study
                      <span className="text-lg" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
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
              aria-label="Start your project enquiry"
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
