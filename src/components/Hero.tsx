import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Clock, Globe } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-navy min-h-[640px] lg:min-h-[680px] flex flex-col justify-center">
      <div className="absolute inset-0">
        <img src="/uploads/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-navy/95 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/80 lg:to-primary/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-8 pb-10 lg:py-16 w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block lg:hidden mb-7"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <img
              src="/uploads/hero-ship.jpg"
              alt="Avatar Express Shipping"
              className="w-full h-[230px] sm:h-[300px] object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 start-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl">
              <p className="text-[22px] font-extrabold text-primary leading-none">5,000+</p>
              <p className="text-[11px] text-gray-500 font-semibold mt-0.5">{t('Shipments Delivered', 'شحنة تم توصيلها')}</p>
            </div>
            <div className="absolute top-4 end-4 bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
              {t('China → Jordan', 'الصين → الأردن')}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[12px] font-semibold text-accent-light mb-5">
              <Globe size={13} /> {t('International Shipping & Logistics', 'شحن دولي وخدمات لوجستية')}
            </div>

            <h1 className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-extrabold text-white tracking-tight mb-5">
              <span className="block pb-3">{t('Fast & Reliable', 'شحن دولي سريع')}</span>
              <span className="block pb-3">{t('International Shipping', 'وموثوق بأسعار تنافسية')}</span>
              <span className="block text-accent-light">{t('At Competitive Prices', 'من الصين إلى الأردن')}</span>
            </h1>

            <p className="text-[15px] md:text-[16.5px] text-blue-100/80 leading-relaxed mb-7 max-w-lg">
              {t(
                'Parcels & cargo shipping, real-time tracking, and integrated logistics solutions with professional support at every step.',
                'شحن طرود وبضائع، تتبع مباشر، وخدمات لوجستية متكاملة مع دعم احترافي في كل خطوة.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t('Hello, I need a shipping quote', 'مرحبا، أحتاج عرض سعر للشحن'))}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25 active:scale-95">
                {t('Get a Free Quote', 'احصل على عرض سعر مجاني')} <ArrowRight size={16} />
              </a>
              <a href="tel:+962797540300"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-bold text-[15px] hover:bg-white/20 transition-all active:scale-95">
                <Phone size={16} /> {t('Call Now', 'اتصل الآن')}
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: <Shield size={14} />, en: 'Fully Insured', ar: 'تأمين كامل' },
                { icon: <Clock size={14} />, en: '99% On-Time', ar: '99% في الوقت' },
                { icon: <Globe size={14} />, en: 'China → Jordan', ar: 'الصين → الأردن' },
              ].map(b => (
                <div key={b.en} className="flex items-center gap-1.5 text-[12.5px] text-blue-200/70 font-medium">
                  {b.icon} {t(b.en, b.ar)}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block">
            <div className="relative">
              <div className="w-full rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                <img src="/uploads/hero-ship.jpg" alt="Avatar Express Shipping" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -start-5 bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-4">
                <p className="text-[26px] font-extrabold text-primary">5,000+</p>
                <p className="text-[12px] text-gray-400 font-medium">{t('Shipments Delivered', 'شحنة تم توصيلها')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
