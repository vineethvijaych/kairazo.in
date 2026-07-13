import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsSafari } from "../hooks/useIsSafari";

const Navbar = ({ onOpenEstimator }) => {
  const isSafari = useIsSafari();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (e, href) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLinkClick(e, href);
    }
  };

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        role="navigation"
        aria-label="Main navigation"
      >
      <div className="mx-auto max-w-7xl">
        <motion.div
          animate={{ scale: isScrolled ? 0.98 : 1 }}
          transition={{ duration: 0.3 }}
          className={`
            relative overflow-hidden rounded-2xl border
            ${!isSafari && "backdrop-blur-2xl"}
            transition-all duration-300
            ${
              isScrolled
                ? `border-zinc-800 ${isSafari ? "bg-zinc-950" : "bg-zinc-950/80"} shadow-xl`
                : "border-zinc-800/50 bg-zinc-950/50"
            }
          `}
        >
          <div className="relative flex h-16 items-center justify-between px-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center gap-2"
            >
              <span className="text-lg font-black tracking-tight text-white">
                Kairoza
              </span>
            </motion.div>

            <div className="hidden items-center gap-1 md:flex" role="menubar">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  role="menuitem"
                  whileHover={{ y: -1 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  onKeyDown={(e) => handleKeyDown(e, link.href)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenEstimator}
                className="ml-3 rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Start a Project
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 0 : -6 }}
                transition={{ duration: 0.3 }}
                className="absolute h-[2px] w-5 rounded-full bg-zinc-400"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute h-[2px] w-5 rounded-full bg-zinc-400"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 0 : 6 }}
                transition={{ duration: 0.3 }}
                className="absolute h-[2px] w-5 rounded-full bg-zinc-400"
              />
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-2 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 md:hidden"
            >
                <div className="p-4 space-y-1" role="menu">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      role="menuitem"
                      onClick={(e) => handleLinkClick(e, link.href)}
                      onKeyDown={(e) => handleKeyDown(e, link.href)}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                    >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={onOpenEstimator}
                  className="mt-3 w-full rounded-lg bg-brand-500 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </header>
  );
};

export default Navbar;
