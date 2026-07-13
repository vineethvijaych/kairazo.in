import React from "react";

const Footer = ({ onOpenLegal }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-xl font-black tracking-tight">Kairoza</h2>
              <p className="mt-1 text-sm text-zinc-600">Digital Growth Studio</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Premium websites, web apps and digital systems for growing businesses.
              </p>
              <div className="mt-5 space-y-2 text-sm text-zinc-400">
                <a href="mailto:hello.kairoza@gmail.com" className="flex items-center gap-2 transition hover:text-brand-500">
                  hello.kairoza@gmail.com
                </a>
                <a href="https://wa.me/919526673206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-brand-500">
                  +91 95266 73206
                </a>
                <div className="flex items-center gap-2">Kerala, India</div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">Navigation</h3>
              <div className="space-y-3">
                {["services", "work", "pricing", "about"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-sm text-zinc-400 transition hover:text-brand-500"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">Services</h3>
              <div className="space-y-3 text-sm text-zinc-400">
                <div>Web Development</div>
                <div>Web Applications</div>
                <div>UI/UX Design</div>
                <div>SEO Optimization</div>
                <div>Digital Marketing</div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">Get in Touch</h3>
              <p className="text-sm text-zinc-400">
                Ready to build something great?
              </p>
              <a
                href="https://wa.me/919526673206"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-6 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-zinc-600">
              &copy; 2026 Kairoza. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600">
              <button onClick={() => onOpenLegal("privacy")} className="hover:text-brand-500">
                Privacy Policy
              </button>
              <button onClick={() => onOpenLegal("terms")} className="hover:text-brand-500">
                Terms of Service
              </button>
            </div>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition hover:border-brand-500 hover:text-brand-500"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
