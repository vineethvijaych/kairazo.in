import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../utils/constants";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050816] py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
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
          <div className="inline-flex rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Testimonials
          </div>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Trusted By
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Real feedback from businesses that trusted Kairoza to build
            their digital presence and accelerate growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
              </div>

              {/* Quote Icon */}
              <div className="relative text-5xl text-indigo-400">
                "
              </div>

              {/* Stars */}
              <div className="relative mt-2 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-6 leading-relaxed text-slate-300">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="relative mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-lg font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>

                <div>
                  <div className="font-bold text-white">
                    {testimonial.author}
                  </div>

                  <div className="text-sm text-slate-500">
                    Verified Client
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute right-5 top-5 rounded-lg bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                Verified
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;