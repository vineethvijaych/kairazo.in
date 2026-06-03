import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anjis Jewel",
    category: "Luxury eCommerce",
    description:
      "Transformed an Instagram-based jewelry business into a premium online store focused on conversions, trust and scalable growth.",
    url: "https://anjisjewel.com",
    icon: "💎",
    gradient:
      "from-indigo-500 via-purple-500 to-pink-500",
    stats: [
      "Premium Branding",
      "Mobile Optimized",
      "Conversion Focused",
    ],
  },
  {
    title: "KLR Rentals",
    category: "Rental Marketplace",
    description:
      "Built a lead-generation platform optimized for local search visibility, inquiries and long-term organic growth.",
    url: "https://klrentals.in",
    icon: "🏢",
    gradient:
      "from-cyan-500 via-indigo-500 to-blue-600",
    stats: [
      "SEO Optimized",
      "Lead Generation",
      "Fast Performance",
    ],
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Portfolio
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-6xl">
            Products That Drive
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            We build digital experiences that don't just look great—they
            generate leads, increase trust and help businesses grow.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
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
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-black text-slate-900">
                {item.value}
              </div>

              <div className="mt-2 text-slate-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                duration: 0.6,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
              `}
            >
              <div className="grid lg:grid-cols-2">
                {/* Showcase */}
                <div
                  className={`
                    relative
                    min-h-[400px]
                    overflow-hidden
                    bg-gradient-to-br
                    ${project.gradient}
                  `}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-black/10" />

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-[120px] drop-shadow-2xl">
                      {project.icon}
                    </div>
                  </motion.div>

                  {/* Floating Card */}
                  <div className="absolute left-8 top-8 rounded-2xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                    Featured Project
                  </div>

                  <div className="absolute bottom-8 left-8 rounded-2xl bg-white/15 p-5 backdrop-blur-xl">
                    <div className="text-sm text-white/70">
                      Project Type
                    </div>

                    <div className="mt-1 text-lg font-bold text-white">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  <div className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                    {project.category}
                  </div>

                  <h3 className="mt-4 text-4xl font-black text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stats.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Result Cards */}
                  <div className="mt-10 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-slate-900">
                        +120%
                      </div>

                      <div className="text-xs text-slate-500">
                        Growth
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-slate-900">
                        95+
                      </div>

                      <div className="text-xs text-slate-500">
                        Leads
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-slate-900">
                        4.9★
                      </div>

                      <div className="text-xs text-slate-500">
                        Rating
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                        px-7
                        py-4
                        font-semibold
                        text-white
                        shadow-[0_15px_40px_rgba(79,70,229,0.3)]
                        transition
                        hover:scale-105
                      "
                    >
                      Visit Website
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-12 shadow-sm">
            <h3 className="text-3xl font-black text-slate-900">
              Your Project Could Be Next
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We're focused on building websites and digital products that
              create measurable business growth.
            </p>

            <button
              className="
                mt-8
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-[0_20px_50px_rgba(79,70,229,0.3)]
                transition
                hover:scale-105
              "
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;