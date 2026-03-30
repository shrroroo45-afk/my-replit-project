import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrackingBar from './components/TrackingBar';
import Services from './components/Services';
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrackingBar />
        <Services />
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
    </>
  );
}
