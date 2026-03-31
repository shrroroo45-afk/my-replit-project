import { Phone, MessageCircle } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function MobileSticky() {
  const t = useT();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex shadow-[0_-2px_16px_rgba(0,0,0,0.1)]">
      <a href="tel:+962797540300" className="flex-1 flex items-center justify-center gap-1.5 py-4 bg-primary text-white font-bold text-[13px]">
        <Phone size={15} /> 0797540300
      </a>
      <a href="tel:+962791440828" className="flex-1 flex items-center justify-center gap-1.5 py-4 bg-primary/80 text-white font-bold text-[13px]">
        <Phone size={15} /> 0791440828
      </a>
      <a href="https://wa.me/962797540300" target="_blank" rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-4 bg-wa text-white font-bold text-[13px]">
        <MessageCircle size={15} /> {t('WhatsApp', 'واتساب')}
      </a>
    </div>
  );
}
