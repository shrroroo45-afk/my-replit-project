import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CustomPackaging from './components/CustomPackaging';
import DoorToDoor from './components/DoorToDoor';
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
import AirFreight from './pages/AirFreight';
import PurchaseService from './pages/PurchaseService';
import StorageService from './pages/StorageService';

function HashScroller() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [hash, pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <HashScroller />
      <Navbar />
      <main>
        <Hero />
        <DoorToDoor />
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
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/purchase-service" element={<PurchaseService />} />
        <Route path="/storage-service" element={<StorageService />} />
      </Routes>
    </BrowserRouter>
  );
}
