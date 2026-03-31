import { motion } from 'framer-motion';
import { useT } from '../lib/i18n';
import { Package, Users, Clock, TrendingUp } from 'lucide-react';

export default function Stats() {
  const t = useT();
  const stats = [
    { num: '4,000+', label: t('Shipments Delivered', 'شحنة تم توصيلها'), icon: <Package size={20} /> },
    { num: '300+', label: t('Active Clients', 'عميل نشط'), icon: <Users size={20} /> },
    { num: '85%', label: t('On-Time Delivery', 'التزام بمواعيد التسليم'), icon: <Clock size={20} /> },
    { num: '35%', label: t('Growth vs 2024', 'نمو مقارنة بـ 2024'), icon: <TrendingUp size={20} /> },
  ];
  return (
    <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/uploads/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="text-center bg-white/5 rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent-light mx-auto mb-3">
                {s.icon}
              </div>
              <div className="text-2xl md:text-4xl font-extrabold text-white mb-1">{s.num}</div>
              <div className="text-[12px] md:text-[13px] text-blue-200 font-medium leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
