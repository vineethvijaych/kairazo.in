import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../utils/constants";

const strengths = [
  {
    title: "Fast Delivery",
    description: "Lean workflows and focused execution deliver projects faster without compromising quality.",
  },
  {
    title: "Premium Value",
    description: "Agency-level design and development quality at honest, transparent pricing.",
  },
  {
    title: "Ongoing Support",
    description: "Continuous improvements, updates and support beyond launch day.",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goTo = useCallback((index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
  }, []);

  const variants = {
    enter: { opacity: 0, scale: 0.95, y: 10 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="about" className="relative bg-zinc-950 py-24 md:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
            04 / About
          </div>
          <h2 id="about-heading" className="mt-4 text-2xl font-black text-white sm:text-3xl md:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Modern websites, scalable apps and digital systems designed for real business impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {strengths.map((item, index) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 sm:p-8"
            >
              <div className="text-3xl font-black text-zinc-800 sm:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-bold text-white sm:mt-6 sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:mt-3 sm:text-base">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
            Client Feedback
          </div>
          <div className="relative mt-16">
            <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 sm:p-8"
                >
                  <p className="leading-relaxed text-zinc-300">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-sm font-bold text-brand-500" aria-hidden="true">
                      {t.author.charAt(0)}
                    </div>
                    <cite className="text-sm font-semibold text-white not-italic">{t.author}</cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
              <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial navigation">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-brand-500" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}${TESTIMONIALS[i] ? `: ${TESTIMONIALS[i].author}` : ""}`}
                  />
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
