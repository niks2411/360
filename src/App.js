import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SEOTools from './pages/SEOTools';
import MarketingTools from './pages/MarketingTools';
import Analytics from './pages/Analytics';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seo-tools" element={<SEOTools />} />
          <Route path="/website-design" element={<MarketingTools />} />
          <Route path="/performance-marketing" element={<Analytics />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;