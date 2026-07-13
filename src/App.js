import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectEstimatorModal from "./components/ProjectEstimatorModal";
import ConsultationModal from "./components/ConsultationModal";
import LegalModal from "./components/LegalModal";

import "./index.css";

function Home() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ open: false, type: "privacy" });

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Work onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Services onOpenConsultation={() => setIsConsultationOpen(true)} />
      <Pricing
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />
      <About />
      <Footer onOpenLegal={(type) => setLegalModal({ open: true, type })} />

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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
