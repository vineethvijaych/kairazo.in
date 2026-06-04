import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ProjectEstimatorModal from "./components/ProjectEstimatorModal";
import LoadingScreen from "./components/LoadingScreen";

import "./index.css";

function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Website */}
      {!loading && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <Navbar
            onOpenEstimator={() =>
              setIsEstimatorOpen(true)
            }
          />

          <Hero
            onOpenEstimator={() =>
              setIsEstimatorOpen(true)
            }
          />

          <Services
            onOpenEstimator={() =>
              setIsEstimatorOpen(true)
            }
          />

          <Work onOpenEstimator={() => setIsEstimatorOpen(true)} />

          <Pricing
            onOpenEstimator={() =>
              setIsEstimatorOpen(true)
            }
          />

          <About />

          <Testimonials />

          <CTA
            onOpenEstimator={() =>
              setIsEstimatorOpen(true)
            }
          />

          <Footer />

          {/* Enquiry Modal */}
          <AnimatePresence>
            {isEstimatorOpen && (
              <ProjectEstimatorModal
                isOpen={isEstimatorOpen}
                onClose={() =>
                  setIsEstimatorOpen(false)
                }
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;