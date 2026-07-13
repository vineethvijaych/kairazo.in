import React from "react";
import { motion } from "framer-motion";

const techGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "REST API", "GraphQL", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD", "Cloud Hosting"],
  },
  {
    category: "Integrations",
    items: ["WhatsApp API", "Google Maps API", "Payment Gateways", "Instagram API", "Google Analytics"],
  },
  {
    category: "Marketing",
    items: ["Google Ads", "Meta Ads", "Google Search Console", "SEO Tools", "Email Marketing"],
  },
];

const TechStack = () => {
  return (
    <section className="relative bg-zinc-950 py-24 md:py-32" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Technology Stack
          </div>
          <h2 id="tech-heading" className="mt-4 text-3xl font-black text-white md:text-5xl">
            Tools & Technologies
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Modern, battle-tested technologies we use to build every project.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-zinc-600">
            Technology choices are project-specific. We select the right tools for each client's needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
