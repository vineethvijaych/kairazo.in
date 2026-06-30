import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          animate={{
            scale: isScrolled ? 0.98 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            backdrop-blur-2xl
            transition-all
            duration-300
            ${
              isScrolled
                ? "border-white/30 bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                : "border-white/20 bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            }
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-cyan-500/5" />

          <div className="relative flex h-20 items-center justify-between px-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex cursor-pointer items-center gap-3"
            >
              <div>
                <div className="text-xl font-black tracking-wider text-slate-900">
                  KAIROZA
                </div>

                <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                  Digital Studio
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/50 px-2 py-2 md:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                >
                  {link.name}

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-indigo-600 transition-all duration-300 group-hover:w-8" />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
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
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(79,70,229,0.35)]
                "
              >
                <span className="relative z-10">
                  Create your Project
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-1000 group-hover:translate-x-full" />
              </motion.button>
            </div>

            {/* Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/30
                bg-white/30
                backdrop-blur-xl
                md:hidden
              "
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -7,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  h-[2px]
                  w-6
                  rounded-full
                  bg-slate-800
                "
              />

              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  absolute
                  h-[2px]
                  w-6
                  rounded-full
                  bg-slate-800
                "
              />

              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 7,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  h-[2px]
                  w-6
                  rounded-full
                  bg-slate-800
                "
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: -10,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: -10,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-3
                overflow-hidden
                rounded-3xl
                border
                border-white/30
                bg-white/55
                backdrop-blur-[30px]
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                md:hidden
              "
            >
              <div className="relative p-6">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>

                <div className="relative flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      href={link.href}
                      onClick={(e) =>
                        handleLinkClick(e, link.href)
                      }
                      className="
                        rounded-2xl
                        px-4
                        py-4
                        font-medium
                        text-slate-700
                        transition-all
                        duration-300
                        hover:bg-white/50
                        hover:text-indigo-600
                      "
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  onClick={onOpenEstimator}
                  className="
                    mt-5
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-purple-600
                    to-indigo-600
                    px-5
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_15px_40px_rgba(79,70,229,0.35)]
                  "
                >
                  Create your Project
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;