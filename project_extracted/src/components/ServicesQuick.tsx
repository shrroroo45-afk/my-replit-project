import { motion } from 'framer-motion';
import { Plane, Ship, Truck, ScanSearch, FileCheck, Boxes } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function ServicesQuick() {
  const t = useT();
  const items = [
    { icon: <Plane size={22} />, title: t('Air & Sea Freight', 'شحن جوي وبحري'), sub: t('Fast & economical', 'سريع واقتصادي') },
    { icon: <Truck size={22} />, title: t('Ground Shipping', 'شحن بري'), sub: t('Reliable overland', 'نقل موثوق') },
    { icon: <ScanSearch size={22} />, title: t('Shipment Tracking', 'تتبع الشحنات'), sub: t('Real-time updates', 'لحظة بلحظة') },
    { icon: <FileCheck size={22} />, title: t('Customs Clearance', 'تخليص جمركي'), sub: t('Hassle-free', 'بدون تأخير') },
    { icon: <Boxes size={22} />, title: t('Logistics Solutions', 'حلول لوجستية'), sub: t('Storage & delivery', 'تخزين وتوصيل') },
    { icon: <Ship size={22} />, title: t('Door to Door', 'توصيل حتى الباب'), sub: t('Complete service', 'خدمة متكاملة') },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map((item, i) => (
            <motion.a key={i} href="#services" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">{item.icon}</div>
              <p className="text-[12.5px] font-bold text-navy">{item.title}</p>
              <p className="text-[10.5px] text-gray-400 mt-0.5">{item.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
