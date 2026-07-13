import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Discovery",
    title: "Understand Your Business",
    description: "We learn about your business, goals, target audience, and competition. This shapes everything we build.",
  },
  {
    phase: "Strategy",
    title: "Plan the Solution",
    description: "We map out sitemaps, wireframes, and user flows. Every decision is documented and approved before development begins.",
  },
  {
    phase: "Design",
    title: "Design the Experience",
    description: "Mobile-first, conversion-focused UI design that reflects your brand identity. We iterate on feedback until it's right.",
  },
  {
    phase: "Develop",
    title: "Build & Integrate",
    description: "Clean, maintainable code with all features, integrations, and animations implemented and tested.",
  },
  {
    phase: "Test",
    title: "Quality Assurance",
    description: "Cross-browser, cross-device testing. Performance audits, accessibility checks, and security reviews before launch.",
  },
  {
    phase: "Launch",
    title: "Deploy & Go Live",
    description: "Deployment to your domain, SSL configuration, search engine submission, and a post-launch monitoring period.",
  },
  {
    phase: "Support",
    title: "Ongoing Maintenance",
    description: "Post-launch support, content updates, performance monitoring, and continuous improvements as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative bg-stone-50 py-24 md:py-32" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
            Our Process
          </div>
          <h2 id="process-heading" className="mt-4 text-3xl font-black text-stone-900 md:text-5xl">
            How We Deliver
          </h2>
          <p className="mt-4 max-w-xl text-stone-500">
            A proven 7-step workflow from discovery to ongoing support.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-stone-300 hover:shadow-md"
            >
              <div className="mb-4 text-3xl font-black text-stone-200">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                {step.phase}
              </div>
              <h3 className="text-base font-bold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
