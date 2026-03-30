import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/962797540300?text=Hello%20Avatar%20Express!"
      target="_blank" rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-7 right-7 z-50 w-14 h-14 bg-wa rounded-full items-center justify-center shadow-xl shadow-wa/20 hover:scale-110 transition-transform"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
    >
      <MessageCircle size={24} className="text-white" />
    </motion.a>
  );
}
