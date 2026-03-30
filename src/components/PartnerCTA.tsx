import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PartnerCTA() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <img src="/uploads/happy-customer.jpg" alt="Partner" className="w-full h-[260px] md:h-[320px] object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.15em] mb-2">Your Logistics Partner</p>
            <h2 className="text-[1.5rem] md:text-[1.85rem] font-extrabold text-navy leading-tight mb-4">
              شريكك اللوجستي الموثوق<br />في الأردن
            </h2>
            <p className="text-[14.5px] text-gray-500 leading-[1.7] mb-4">
              في Avatar Express، نفهم أن كل شحنة مهمة. سواء كنت صاحب متجر إلكتروني تشحن منتجات من الصين، أو شركة تستورد مواد خام — نقدم لك نفس مستوى العناية والسرعة والاحترافية.
            </p>
            <p className="text-[14.5px] text-gray-500 leading-[1.7] mb-6">
              فريقنا يعمل على الأرض في الصين والأردن، مما يمنحك تجربة شحن سلسة مع نقطة اتصال واحدة لكل احتياجاتك.
            </p>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors">
              ابدأ الآن <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
