import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WAFloat() {
  return (
    <motion.a
      href="https://wa.me/962776000000?text=مرحبا، أريد الاستفسار عن خدمات الشحن"
      target="_blank" rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-7 left-7 z-50 items-center gap-2 px-5 py-3 bg-wa text-white rounded-full font-bold text-[14px] shadow-xl shadow-wa/20 hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
    >
      <MessageCircle size={20} /> تحدث معنا
    </motion.a>
  );
}
