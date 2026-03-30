import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function PromoSection() {
  const t = useT();
  const checks = [
    t('On-ground teams in both China and Jordan', 'فرق عمل في الصين والأردن'),
    t('Single point of contact throughout the process', 'نقطة تواصل واحدة طوال العملية'),
    t('Customized solutions for every business size', 'حلول مخصصة لكل حجم عمل'),
    t('Transparent pricing with no hidden costs', 'أسعار شفافة بدون تكاليف مخفية'),
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 gap-3">
              <img src="/uploads/customer-happy.jpg" alt="" className="w-full h-[200px] object-cover rounded-xl" />
              <img src="/uploads/logistics.jpg" alt="" className="w-full h-[200px] object-cover rounded-xl" />
              <img src="/uploads/sea-freight.jpg" alt="" className="w-full h-[200px] object-cover rounded-xl col-span-2" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('About Avatar Express', 'عن Avatar Express')}</span>
            <h2 className="text-[1.5rem] md:text-[1.85rem] font-extrabold text-primary leading-tight mt-2 mb-5">
              {t('Your Dedicated Logistics', 'شريكك اللوجستي')}<br/>{t('Partner for Growth', 'المخصص لنمو عملك')}
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              {t('We understand that every shipment matters. Whether you\'re an e-commerce entrepreneur importing from China, or a business managing complex supply chains \u2014 we deliver the same level of care, speed, and professionalism.', 'نحن ندرك أن كل شحنة مهمة. سواء كنت رائد أعمال إلكترونية تستورد من الصين أو شركة تدير سلاسل توريد معقدة \u2014 نقدم نفس مستوى العناية والسرعة والاحترافية.')}
            </p>
            <div className="space-y-3 mb-8">
              {checks.map(c => (
                <div key={c} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-[14px] text-gray-600">{c}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-white rounded-xl font-bold text-[14px] hover:bg-primary-dark transition-colors shadow-md shadow-primary/10">
              {t('Get Started', 'ابدأ الآن')} <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
