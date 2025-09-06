import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import FullScreenPreloader from './components/FullScreenPreloader';
import Home from './pages/Home';
import SEOTools from './pages/SEOTools';
import MarketingTools from './pages/MarketingTools';
import Analytics from './pages/Analytics';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <FullScreenPreloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seo-tools" element={<SEOTools />} />
          <Route path="/marketing-tools" element={<MarketingTools />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;