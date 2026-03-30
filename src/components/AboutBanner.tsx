import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutBanner() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden bg-gradient-to-r from-primary-50 to-sky/10 border border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.15em] mb-3">About Avatar Express</p>
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-extrabold text-navy leading-tight mb-4">
                Your Dedicated Logistics<br />Partner in Jordan
              </h2>
              <p className="text-[14px] text-gray-500 leading-[1.75] mb-4">
                At Avatar Express, we understand that every shipment matters. Whether you're an e-commerce entrepreneur importing from China, or a business moving cargo across borders — we provide the same level of care, speed, and professionalism.
              </p>
              <p className="text-[14px] text-gray-500 leading-[1.75] mb-6">
                Our team operates on the ground in both China and Jordan, giving you a seamless experience with a single point of contact.
              </p>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors w-fit">
                Get Started <ArrowRight size={15} />
              </a>
            </div>
            <div className="h-[250px] lg:h-auto">
              <img src="/uploads/about-img.jpg" alt="About Avatar Express" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
