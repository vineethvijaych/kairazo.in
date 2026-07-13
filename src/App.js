import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import ProcessSection from "./components/ProcessSection";
import TechStack from "./components/TechStack";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectEstimatorModal from "./components/ProjectEstimatorModal";
import ConsultationModal from "./components/ConsultationModal";
import LegalModal from "./components/LegalModal";
import "./index.css";

const ServicePage = lazy(() => import("./pages/ServicePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesIndex = lazy(() => import("./pages/ServicesIndex"));
const PortfolioIndex = lazy(() => import("./pages/PortfolioIndex"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogCategoryPage = lazy(() => import("./pages/BlogCategoryPage"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));

function Home() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ open: false, type: "privacy" });

  return (
    <div className="min-h-screen bg-zinc-950">
      <Helmet>
        <title>Kairoza — Website Development Company in Kerala | Web Design & Digital Marketing</title>
        <meta name="description" content="Kairoza is a premium website development company in Kerala, India. We build custom websites, web applications, e-commerce stores and provide SEO & digital marketing services for businesses." />
        <meta property="og:title" content="Kairoza — Website Development Company in Kerala | Web Design & Digital Marketing" />
        <meta property="og:description" content="Kairoza is a premium website development company in Kerala, India. We build custom websites, web applications, e-commerce stores and provide SEO & digital marketing services." />
        <meta name="twitter:title" content="Kairoza — Website Development Company in Kerala | Web Design & Digital Marketing" />
        <meta name="twitter:description" content="Kairoza is a premium website development company in Kerala, India. We build custom websites, web applications, e-commerce stores and provide SEO & digital marketing services." />
      </Helmet>
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <main id="main-content">
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <Work onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <Services onOpenConsultation={() => setIsConsultationOpen(true)} />
        <ProcessSection />
        <Pricing />
        <About />
        <TechStack />
      </main>
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

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-brand-500" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioIndex />} />
        <Route path="/portfolio/:slug" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
