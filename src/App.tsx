import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CustomPackaging from './components/CustomPackaging';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import PromoSection from './components/PromoSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileSticky from './components/MobileSticky';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import OceanFreight from './pages/OceanFreight';

function HashScroller() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    const timer = setTimeout(scroll, 80);
    return () => clearTimeout(timer);
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <HashScroller />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CustomPackaging />
        <WhyUs />
        <HowItWorks />
        <Stats />
        <PromoSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <MobileSticky />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ocean-freight" element={<OceanFreight />} />
      </Routes>
    </BrowserRouter>
  );
}
