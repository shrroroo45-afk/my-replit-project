import { motion } from 'framer-motion';
import { MessageSquare, PackageSearch, Ship, MapPin, ArrowDown } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function HowItWorks() {
  const t = useT();
  const steps = [
    { icon: <MessageSquare size={22} />, num: '01', title: t('Request a Quote', 'اطلب عرض سعر'), desc: t('Contact us with your shipment details via phone or WhatsApp.', 'تواصل معنا بتفاصيل شحنتك عبر الهاتف أو الواتساب.') },
    { icon: <PackageSearch size={22} />, num: '02', title: t('We Collect Your Goods', 'نستلم بضاعتك'), desc: t('Our team picks up your cargo from the supplier and inspects quality.', 'فريقنا يستلم بضاعتك من المورد ويفحص الجودة.') },
    { icon: <Ship size={22} />, num: '03', title: t('We Ship & You Track', 'نشحن وأنت تتابع'), desc: t('Your shipment moves by air, sea, or land with full real-time tracking.', 'شحنتك تنتقل جواً أو بحراً أو براً مع تتبع مباشر.') },
    { icon: <MapPin size={22} />, num: '04', title: t('Delivered to Your Door', 'توصيل لبابك'), desc: t('We handle customs and deliver directly to your address.', 'نتولى التخليص ونوصل مباشرة لعنوانك.') },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('How It Works', 'كيف نعمل')}</span>
          <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">{t('Shipping Made Simple', 'شحن بسيط وسهل')}</h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">{t('Four easy steps from your request to your doorstep.', 'أربع خطوات سهلة من طلبك إلى بابك.')}</p>
        </motion.div>

        <div className="md:hidden space-y-3">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.08 }}>
              <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[2px] h-6 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest">{t('Step', 'خطوة')} {s.num}</span>
                  <h3 className="text-[15px] font-bold text-primary mt-0.5 mb-1">{s.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t('Hello, I want to start shipping', 'مرحبا، أريد البدء بالشحن'))}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl font-bold text-[15px] shadow-lg shadow-primary/20 active:scale-95 transition-all mt-4">
              {t('Start Now for Free', 'ابدأ الآن مجاناً')} <ArrowDown size={16} className="rotate-[-90deg]" />
            </a>
          </motion.div>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-9 start-[12.5%] end-[12.5%] h-[2px] bg-primary-100" />
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.1 }} className="text-center relative">
              <div className="w-[72px] h-[72px] rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-primary/15">{s.icon}</div>
              <span className="text-[11px] font-extrabold text-accent uppercase tracking-widest">{t('Step', 'خطوة')} {s.num}</span>
              <h3 className="text-[15px] font-bold text-primary mt-1 mb-1.5">{s.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
