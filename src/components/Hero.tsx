import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Clock, Globe } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-navy min-h-[520px] md:min-h-[580px] flex items-center">
      <div className="absolute inset-0">
        <img src="/uploads/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[12px] font-semibold text-accent-light mb-6">
              <Globe size={13} /> {t('International Shipping & Logistics', 'شحن دولي وخدمات لوجستية')}
            </div>

            <h1 className="text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] font-extrabold leading-[1.12] text-white tracking-tight mb-5">
              {t('Fast & Reliable', 'شحن دولي سريع')}<br/>
              {t('International Shipping', 'وموثوق بأسعار تنافسية')}<br/>
              <span className="text-accent-light">{t('At Competitive Prices', 'من الصين إلى الأردن')}</span>
            </h1>

            <p className="text-[15.5px] md:text-[16.5px] text-blue-100/80 leading-relaxed mb-8 max-w-lg">
              {t(
                'Parcels & cargo shipping, real-time tracking, and integrated logistics solutions with professional support at every step.',
                'شحن طرود وبضائع، تتبع مباشر، وخدمات لوجستية متكاملة مع دعم احترافي في كل خطوة.'
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/962776000000?text=Hello%2C%20I%20need%20a%20shipping%20quote"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25">
                {t('Get a Quote', 'احصل على عرض سعر')} <ArrowRight size={16} />
              </a>
              <a href="tel:+962776000000"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-bold text-[15px] hover:bg-white/20 transition-all">
                <Phone size={16} /> {t('Call Now', 'اتصل الآن')}
              </a>
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
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
              <div className="w-full h-[220px] rounded-2xl shadow-2xl shadow-black/20 overflow-hidden bg-[#0a1628] flex items-center justify-center p-6">
                <img src="/uploads/hero-ship.png" alt="Avatar Express" className="w-full h-auto object-contain" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-4">
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
