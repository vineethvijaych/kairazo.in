import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    title: "Fast Delivery",
    description:
      "Lean workflows and focused execution help launch projects significantly faster without sacrificing quality.",
  },
  {
    title: "Premium Value",
    description:
      "Agency-level design and development quality without inflated agency pricing.",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous improvements, updates and support beyond launch.",
  },
];

const About = () => {
  return (
    <section
      id="about"
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
      {/* Background Glow */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-lg
              border
              border-indigo-200
              bg-indigo-50
              text-indigo-600
              font-medium
            "
          >
            About Kairoza
          </div>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              font-black
              leading-tight
              text-slate-900
            "
          >
            Building Digital Products
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
              That Drive Growth
            </span>
          </h2>

          <p
            className="
              mt-6
              text-xl
              leading-relaxed
              text-slate-600
              max-w-3xl
              mx-auto
            "
          >
            Kairoza helps businesses establish a strong digital presence
            through modern websites, scalable web applications and
            conversion-focused digital systems.
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="mt-28 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-indigo-600 font-semibold uppercase tracking-wider">
              Founder
            </div>

            <h3 className="mt-4 text-5xl font-black text-slate-900">
              Vineed
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              I started Kairoza with a simple goal: helping businesses
              build a professional online presence without the complexity
              and overhead of traditional agencies.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Every project combines design, development and business
              strategy to create digital products that generate trust,
              attract customers and support long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Web Development",
                "Web Applications",
                "SEO",
                "Digital Marketing",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    px-5
                    py-2
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    text-slate-600
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-10
            "
          >
            <div className="text-indigo-600 font-semibold">
              Why Kairoza
            </div>

            <h3 className="mt-4 text-4xl font-black text-slate-900">
              Focused On Real Business Results
            </h3>

            <p className="mt-6 text-slate-600 leading-relaxed">
              A great website isn't just about looks. It should create
              credibility, generate enquiries and support business growth.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Modern design systems",
                "Performance-first development",
                "SEO-ready architecture",
                "Lead generation focused",
                "Scalable technology stack",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <div className="mt-28">
          <div className="text-center">
            <h3 className="text-4xl font-black text-slate-900">
              Why Businesses Choose Kairoza
            </h3>

            <p className="mt-4 text-slate-600">
              Strategy, design and development combined into one focused team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {strengths.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/90
                  p-8
                  transition-all
                  duration-300
                  hover:border-indigo-300
                "
              >
                <h4 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;