import { Phone, MessageCircle } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function MobileSticky() {
  const t = useT();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex shadow-[0_-2px_16px_rgba(0,0,0,0.1)]">
      <a href="tel:0797540300" className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold text-[14px]">
        <Phone size={16} /> {t('Call Now', 'اتصل الآن')}
      </a>
      <a href="https://wa.me/962797540300" target="_blank" rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-wa text-white font-bold text-[14px]">
        <MessageCircle size={16} /> {t('WhatsApp', 'واتساب')}
      </a>
    </div>
  );
}
