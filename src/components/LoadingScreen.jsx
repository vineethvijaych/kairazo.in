import React from "react";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-white
      "
    >
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-60" />

        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-cyan-200 blur-3xl opacity-60" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-6
            text-4xl
            font-black
            tracking-wider
          "
        >
          <span className="animated-gradient-text bg-[length:300%_300%] bg-clip-text text-transparent">
            KAIROZA
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-2
            text-slate-500
          "
        >
          Digital Growth Studio
        </motion.p>

        {/* Progress */}
        <div className="mt-8 w-64 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="
              h-1.5
              rounded-full
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-cyan-500
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;