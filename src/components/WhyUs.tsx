import { motion } from 'framer-motion';
import { Headphones, MapPin, FileCheck, DollarSign, Settings, Shield } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function WhyUs() {
  const t = useT();
  const points = [
    { icon: <Headphones size={20} />, title: t('Professional Support', 'دعم احترافي'), desc: t('Dedicated support from start to finish via phone and WhatsApp.', 'دعم متواصل من البداية للنهاية عبر الهاتف والواتساب.') },
    { icon: <MapPin size={20} />, title: t('Real-Time Tracking', 'تتبع مباشر'), desc: t('Monitor your shipment live at every stage of the journey.', 'تابع شحنتك لحظة بلحظة في كل مرحلة.') },
    { icon: <FileCheck size={20} />, title: t('Customs Clearance', 'تخليص جمركي'), desc: t('We handle all paperwork and customs procedures seamlessly.', 'نتولى جميع الإجراءات الجمركية بسلاسة تامة.') },
    { icon: <DollarSign size={20} />, title: t('Competitive Pricing', 'أسعار تنافسية'), desc: t('Transparent rates with no hidden fees. Best value guaranteed.', 'أسعار شفافة بدون رسوم مخفية. أفضل قيمة مضمونة.') },
    { icon: <Settings size={20} />, title: t('Custom Solutions', 'حلول مخصصة'), desc: t('Tailored logistics plans designed for your specific business needs.', 'خطط لوجستية مصممة خصيصاً لاحتياجات عملك.') },
    { icon: <Shield size={20} />, title: t('Secure & Insured', 'أمان وتأمين'), desc: t('Every shipment is fully insured and carefully handled.', 'كل شحنة مؤمنة بالكامل ويتم التعامل معها بعناية.') },
  ];

  return (
    <section id="why-us" className="py-16 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:hidden">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Why Choose Us', 'لماذا تختارنا')}</span>
          <h2 className="text-[1.6rem] font-extrabold text-primary mt-2 leading-tight">
            {t('The Logistics Partner', 'شريكك اللوجستي')}<br/>{t('Your Business Deserves', 'الذي يستحقه عملك')}
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:hidden mb-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/uploads/trust.jpg" alt="" className="w-full h-[220px] object-cover" style={{ objectPosition: 'center 30%' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 end-4 bg-primary text-white rounded-xl px-5 py-3 shadow-xl">
              <p className="text-[26px] font-extrabold leading-none">99%</p>
              <p className="text-[11px] text-blue-200 mt-0.5">{t('Customer Satisfaction', 'رضا العملاء')}</p>
            </div>
          </div>
        </motion.div>

        <div className="md:hidden grid grid-cols-2 gap-3 mb-2">
          {points.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-accent mb-3">{p.icon}</div>
              <h4 className="text-[13px] font-bold text-primary leading-tight mb-1">{p.title}</h4>
              <p className="text-[11.5px] text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <img src="/uploads/trust.jpg" alt="" className="w-full h-[360px] md:h-[420px] object-cover rounded-2xl shadow-lg" />
              <div className="absolute -bottom-4 -end-4 bg-primary text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="text-[28px] font-extrabold">99%</p>
                <p className="text-[12px] text-blue-200">{t('Customer Satisfaction', 'رضا العملاء')}</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Why Choose Us', 'لماذا تختارنا')}</span>
            <h2 className="text-[1.75rem] md:text-[2rem] font-extrabold text-primary mt-2 mb-4 leading-tight">
              {t('The Logistics Partner', 'شريكك اللوجستي')}<br/>{t('Your Business Deserves', 'الذي يستحقه عملك')}
            </h2>
            <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
              {t('We combine speed, security, and simplicity to deliver a shipping experience that helps your business grow.', 'نجمع بين السرعة والأمان والبساطة لتقديم تجربة شحن تساعد عملك على النمو.')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-accent flex-shrink-0">{p.icon}</div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-primary">{p.title}</h4>
                    <p className="text-[12.5px] text-gray-400 leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
