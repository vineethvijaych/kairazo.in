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
import ConsultationModal from "./components/ConsultationModal";
import LegalModal from "./components/LegalModal";
import LoadingScreen from "./components/LoadingScreen";

import "./index.css";

function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ open: false, type: "privacy" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1200);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <Navbar
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />

          <Hero
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />

          <Services
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          <Work onOpenEstimator={() => setIsEstimatorOpen(true)} />

          <Pricing
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          <About />

          <Testimonials />

          <CTA
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />

          <Footer
            onOpenLegal={(type) => setLegalModal({ open: true, type })}
          />

          <AnimatePresence>
            {isEstimatorOpen && (
              <ProjectEstimatorModal
                isOpen={isEstimatorOpen}
                onClose={() => setIsEstimatorOpen(false)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isConsultationOpen && (
              <ConsultationModal
                isOpen={isConsultationOpen}
                onClose={() => setIsConsultationOpen(false)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {legalModal.open && (
              <LegalModal
                isOpen={legalModal.open}
                type={legalModal.type}
                onClose={() => setLegalModal({ open: false, type: "privacy" })}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
