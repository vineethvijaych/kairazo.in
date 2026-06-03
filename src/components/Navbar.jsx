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
          {/* Glow Effect */}
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
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-indigo-500 blur-md opacity-40" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-lg font-black text-white shadow-lg">
                  K
                </div>
              </div>

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
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
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
                  Know Your Project
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-1000 group-hover:translate-x-full" />
              </motion.button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="relative flex h-10 w-10 items-center justify-center md:hidden"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 0 : -6,
                }}
                className="absolute h-0.5 w-6 bg-slate-800"
              />

              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="absolute h-0.5 w-6 bg-slate-800"
              />

              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? 0 : 6,
                }}
                className="absolute h-0.5 w-6 bg-slate-800"
              />
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                mt-3
                overflow-hidden
                rounded-3xl
                border
                border-white/30
                bg-white/85
                backdrop-blur-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                md:hidden
              "
            >
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      whileTap={{ scale: 0.98 }}
                      href={link.href}
                      onClick={(e) =>
                        handleLinkClick(e, link.href)
                      }
                      className="
                        rounded-xl
                        px-4
                        py-3
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-indigo-50
                        hover:text-indigo-600
                      "
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <button
                  onClick={onOpenEstimator}
                  className="
                    mt-5
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    px-5
                    py-3
                    font-semibold
                    text-white
                  "
                >
                  Know Your Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;