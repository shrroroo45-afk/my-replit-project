import { motion } from 'framer-motion';
import { Plane, Ship, Truck, MapPin, FileCheck, Boxes } from 'lucide-react';

const items = [
  { icon: <Plane size={20} />, label: 'Air Freight', sub: 'Express 7–12 days' },
  { icon: <Ship size={20} />, label: 'Sea Freight', sub: 'Economy 25–35 days' },
  { icon: <Truck size={20} />, label: 'Land Freight', sub: 'City to city' },
  { icon: <MapPin size={20} />, label: 'Track Shipment', sub: 'Real-time updates' },
  { icon: <FileCheck size={20} />, label: 'Customs', sub: 'Fast clearance' },
  { icon: <Boxes size={20} />, label: 'Logistics', sub: 'Full solutions' },
];

export default function QuickLinks() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map((item, i) => (
            <motion.a key={item.label} href="#services"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-[13px] font-bold text-navy">{item.label}</p>
              <p className="text-[11px] text-gray-400">{item.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
