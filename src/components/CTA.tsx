import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-[1.6rem] md:text-[2.1rem] font-extrabold text-white leading-tight mb-3">
              جاهز تشحن طلبك؟
            </h2>
            <p className="text-blue-200 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
              احصل على عرض سعر مجاني خلال دقائق. فريقنا جاهز لمساعدتك في شحن بضاعتك من الصين إلى الأردن.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://wa.me/962797540300?text=مرحبا، أريد عرض سعر للشحن" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-xl font-extrabold text-[15px] hover:bg-gray-50 transition-colors shadow-lg">
                احصل على عرض سعر <ArrowLeft size={16} />
              </a>
              <a href="tel:+962797540300"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/25 text-white rounded-xl font-bold text-[15px] hover:bg-white/10 transition-colors">
                <Phone size={16} /> 0797540300
              </a>
              <a href="tel:+962791440828"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/25 text-white rounded-xl font-bold text-[15px] hover:bg-white/10 transition-colors">
                <Phone size={16} /> 0791440828
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
