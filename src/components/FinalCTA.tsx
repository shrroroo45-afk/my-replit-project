import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function FinalCTA() {
  const t = useT();
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-primary-dark to-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><img src="/uploads/hero-bg.jpg" alt="" className="w-full h-full object-cover" /></div>
          <div className="relative">
            <h2 className="text-[1.75rem] md:text-[2.3rem] font-extrabold text-white leading-tight mb-4">{t('Ready to Ship Your Order?', 'جاهز لشحن طلبك؟')}</h2>
            <p className="text-blue-200/80 text-[15px] mb-9 max-w-md mx-auto">{t('Get a free shipping quote in minutes. Our logistics experts are ready to help.', 'احصل على عرض سعر مجاني خلال دقائق. خبراؤنا جاهزون لمساعدتك.')}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`https://wa.me/962791440828?text=${encodeURIComponent(t('Hello, I need a shipping quote', 'مرحبا، أحتاج عرض سعر للشحن'))}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-extrabold text-[15px] hover:bg-accent-light transition-colors shadow-lg shadow-accent/25">
                {t('Get a Free Quote', 'احصل على عرض سعر')} <ArrowRight size={16} />
              </a>
              <a href="tel:+962791440828" className="flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-[15px] hover:bg-white/10 transition-colors">
                <Phone size={16} /> {t('Call Now', 'اتصل الآن')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
