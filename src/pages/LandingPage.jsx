import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Workflow from '../components/Workflow';
import Services from '../components/Services';
import ProductCatalog from '../components/ProductCatalog';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import { initStorage } from '../utils/initialData';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    // Initialize LocalStorage database
    initStorage();

    // Handle scroll redirects from other pages
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      
      // Clear state so it doesn't trigger scroll again
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="relative">
      <Hero />
      <About />
      <Workflow />
      <Services />
      <ProductCatalog />
      <Projects />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
