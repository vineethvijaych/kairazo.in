import React from "react";
import { motion } from "framer-motion";

const CTA = ({ onOpenEstimator }) => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl" />
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

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.05]
            p-10
            md:p-16
            backdrop-blur-2xl
          "
        >
          {/* Glow Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

          {/* Floating Badge */}
          <div className="relative flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              🚀 Start Your Project
            </div>
          </div>

          {/* Heading */}
          <div className="relative mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-4xl font-black text-white md:text-7xl md:leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Exceptional Together
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Whether you need a modern website, a scalable web application
              or a complete digital growth system, Kairoza helps transform
              ideas into products that create measurable business impact.
            </p>
          </div>

          {/* Stats */}
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                value: "150+",
                label: "Projects Delivered",
              },
              {
                value: "98%",
                label: "Client Satisfaction",
              },
              {
                value: "5+",
                label: "Years Experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  backdrop-blur-xl
                "
              >
                <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.value}
                </div>

                <div className="mt-2 text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="relative mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={onOpenEstimator}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-indigo-600
                px-10
                py-5
                text-lg
                font-semibold
                text-white
                shadow-[0_25px_50px_rgba(79,70,229,0.35)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <span className="relative z-10">
                Get Free Consultation
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-1000 group-hover:translate-x-full" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                rounded-2xl
                border
                border-white/15
                bg-white/[0.05]
                px-10
                py-5
                text-lg
                font-semibold
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/[0.08]
              "
            >
              View Case Studies
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="relative mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <div>✓ Free Strategy Call</div>
            <div>✓ Transparent Pricing</div>
            <div>✓ Ongoing Support</div>
            <div>✓ Fast Delivery</div>
          </div>

          {/* Founder Message */}
          <div className="relative mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <p className="text-lg italic leading-relaxed text-slate-300">
              "Every business deserves a digital presence that inspires trust,
              attracts customers and drives growth. That's exactly what we
              build at Kairoza."
            </p>

            <div className="mt-5">
              <div className="font-bold text-white">
                Vineed
              </div>

              <div className="text-sm text-indigo-400">
                Founder, Kairoza
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="relative mt-10 text-center text-sm text-slate-500">
            Usually responding within 24 hours • No obligation consultation
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;