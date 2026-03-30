import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Shield, Clock } from 'lucide-react';

const items = [
  { icon: <Ship size={18} />, label: 'China to Jordan' },
  { icon: <Plane size={18} />, label: 'Air & Sea Freight' },
  { icon: <Truck size={18} />, label: 'Door-to-Door' },
  { icon: <Shield size={18} />, label: 'Safe Handling' },
  { icon: <Clock size={18} />, label: 'Fast Service' },
];

export default function TrustBar() {
  return (
    <section className="py-5 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2">
              <span className="text-brand">{item.icon}</span>
              <span className="text-[13px] font-medium text-gray-500">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
