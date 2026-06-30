import React from "react";
import { motion } from "framer-motion";

const CTA = ({ onOpenEstimator }) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
      "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
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
            rounded-[40px]
            border
            border-slate-200
            bg-white/90
            p-10
            md:p-16
          "
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-indigo-200
                bg-indigo-50
                px-4
                py-2
                text-sm
                font-medium
                text-indigo-600
              "
            >
              Create your Project
            </div>
          </div>

          {/* Heading */}
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                text-slate-900
              "
            >
              Let's Build Something
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-indigo-600
                  via-purple-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Exceptional Together
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                md:text-xl
                leading-relaxed
                text-slate-600
              "
            >
              Whether you need a modern website, scalable web
              application or a complete digital growth system,
              Kairoza helps transform ideas into products that
              create measurable business impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={onOpenEstimator}
              className="
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-indigo-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Create your Project
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
                border-slate-200
                bg-white
                px-8
                py-4
                font-semibold
                text-slate-700
                transition
                hover:bg-slate-50
              "
            >
              View Our Work
            </button>
          </div>

          {/* Trust */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-6
              text-sm
              text-slate-500
            "
          >
            <div>Free Strategy Call</div>
            <div>Transparent Pricing</div>
            <div>Ongoing Support</div>
            <div>Fast Delivery</div>
          </div>

          {/* Founder Note */}
          <div
            className="
              mx-auto
              mt-14
              max-w-3xl
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-8
              text-center
            "
          >
            <p
              className="
                text-lg
                italic
                leading-relaxed
                text-slate-600
              "
            >
              Every business deserves a digital presence that
              inspires trust, attracts customers and drives
              growth. That's exactly what we build at Kairoza.
            </p>

            <div className="mt-5">
              <div className="font-bold text-slate-900">
                Vineed
              </div>

              <div className="text-sm text-indigo-600">
                Founder, Kairoza
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-10 text-center text-sm text-slate-500">
            Usually responding within 24 hours • No obligation consultation
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;