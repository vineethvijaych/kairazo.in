import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

const Hero = ({ onOpenEstimator }) => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-36 pb-24 md:pt-44">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/70 px-4 py-2 text-sm font-medium text-indigo-700 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trusted By Growing Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl"
            >
              Digital Products
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Built For Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              We create premium websites, scalable web applications and
              conversion-focused digital systems that help businesses attract
              more customers, build trust and grow revenue faster.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={onOpenEstimator}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(79,70,229,0.35)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">
                  Know Your Project Cost
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-1000 group-hover:translate-x-full" />
              </button>

              <button
                onClick={scrollToWork}
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-slate-50"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8"
            >
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-black text-slate-900">
                    {item.value}
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Proof */}
            <div className="mt-12">
              <p className="mb-4 text-sm font-medium text-slate-500">
                Trusted by startups, agencies & local businesses
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Web Development",
                  "SEO",
                  "UI/UX Design",
                  "Marketing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Floating Revenue Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-0 top-10 z-20 rounded-2xl border border-white/30 bg-white/80 p-5 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-xs text-slate-500">Monthly Revenue</p>

              <h3 className="mt-1 text-2xl font-black text-slate-900">
                ₹2.4L+
              </h3>

              <p className="mt-1 text-sm text-green-600">
                ↑ 38% this month
              </p>
            </motion.div>

            {/* Main Dashboard */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute left-0 top-14 w-full max-w-[560px] rounded-[32px] border border-white/50 bg-white/70 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            >
              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-3 text-xs text-slate-400">
                  kairoza.io/dashboard
                </div>
              </div>

              {/* Hero Chart */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">
                      Growth Overview
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-white">
                      +248%
                    </h3>
                  </div>

                  <div className="rounded-xl bg-white/20 px-3 py-2 text-sm font-medium text-white">
                    Last 30 Days
                  </div>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  {[30, 50, 35, 80, 60, 95, 120].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: h }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.6,
                      }}
                      className="w-full rounded-t-lg bg-white/40"
                    />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  "Leads",
                  "Traffic",
                  "Sales",
                ].map((metric) => (
                  <div
                    key={metric}
                    className="rounded-xl bg-slate-50 p-4"
                  >
                    <div className="text-xs text-slate-500">
                      {metric}
                    </div>

                    <div className="mt-2 text-xl font-bold text-slate-900">
                      +
                      {Math.floor(
                        Math.random() * 80 + 20
                      )}
                      %
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lead Card */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-0 z-20 rounded-2xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  🚀
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    New Lead Generated
                  </p>

                  <h3 className="font-bold text-slate-900">
                    +24 Leads Today
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-24 right-6 z-20 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white shadow-2xl"
            >
              <p className="text-sm text-white/80">
                Starting From
              </p>

              <h3 className="mt-1 text-3xl font-black">
                ₹9,999
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;