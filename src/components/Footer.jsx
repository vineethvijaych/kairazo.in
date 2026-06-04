import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="
                    h-12
                    w-12
                    sm:h-14
                    sm:w-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-600
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-lg
                    sm:text-xl
                    font-black
                  "
                >
                  K
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-wider">
                    KAIROZA
                  </h2>

                  <p className="text-sm text-slate-500">
                    Digital Growth Studio
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                Building premium websites, web applications and digital
                systems that help businesses grow online.
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-400">
                <div>📧 hello@kairoza.com</div>
                <div>📞 +91 XXXXX XXXXX</div>
                <div>📍 Kerala, India</div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold text-lg mb-5">
                Navigation
              </h3>

              <div className="space-y-3">
                {[
                  "services",
                  "work",
                  "pricing",
                  "about",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="
                      block
                      text-slate-400
                      hover:text-indigo-400
                      transition
                    "
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-5">
                Services
              </h3>

              <div className="space-y-3 text-slate-400">
                <div>Web Development</div>
                <div>Web Applications</div>
                <div>UI/UX Design</div>
                <div>SEO Optimization</div>
                <div>Digital Marketing</div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-bold text-lg mb-5">
                Let's Build
              </h3>

              <p className="text-slate-400">
                Ready to transform your business with a premium
                digital presence?
              </p>
 <button
              onClick={scrollToTop}
              className="
                h-10
                w-10
                sm:h-12
                sm:w-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:border-indigo-500
                transition
              "
            >
              ↑
            </button>
              {/* <button
                className="
                  mt-6
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Start Project →
              </button> */}

              {/* Social Links */}
              {/* <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10
                    w-10
                    sm:h-12
                    sm:w-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-indigo-500
                    transition
                  "
                >
                  💼
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    h-10
                    w-10
                    sm:h-12
                    sm:w-12
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    hover:border-pink-500
                    transition
                  "
                >
                  📷
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-6
              py-6
              flex
              flex-col
              items-center
              text-center
              gap-5
              md:flex-row
              md:justify-between
              md:text-left
            "
          >
            <p className="text-sm text-slate-500">
              © 2026 KAIROZA. All rights reserved.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                text-sm
                text-slate-500
              "
            >
              <button className="hover:text-white">
                Privacy Policy
              </button>

              <button className="hover:text-white">
                Terms of Service
              </button>
            </div>

            {/* <button
              onClick={scrollToTop}
              className="
                h-10
                w-10
                sm:h-12
                sm:w-12
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:border-indigo-500
                transition
              "
            >
              ↑
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;