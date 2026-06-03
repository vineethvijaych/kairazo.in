
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import './index.css';

function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Services />
      <Work />
      <Pricing onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <About />
      <Testimonials />
      <CTA onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <Footer />
      <ProjectEstimatorModal isOpen={isEstimatorOpen} onClose={() => setIsEstimatorOpen(false)} />
    </div>
  );
}

export default App;
