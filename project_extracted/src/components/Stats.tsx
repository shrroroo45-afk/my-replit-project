import { motion } from 'framer-motion';
import { useT } from '../lib/i18n';

export default function Stats() {
  const t = useT();
  const stats = [
    { num: '5,000+', label: t('Shipments Delivered', 'شحنة تم توصيلها') },
    { num: '500+', label: t('Business Clients', 'عميل تجاري') },
    { num: '99%', label: t('On-Time Delivery', 'تسليم في الوقت') },
    { num: '3+', label: t('Years of Excellence', 'سنوات من التميز') },
  ];
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"><img src="/uploads/hero-bg.jpg" alt="" className="w-full h-full object-cover" /></div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.num}</div>
              <div className="text-[13px] text-blue-200 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
