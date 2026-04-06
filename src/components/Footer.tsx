import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Footer() {
  const t = useT();
  return (
    <footer className="bg-primary text-white pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/uploads/logo-avatar.png" alt="Avatar Express" className="h-14 w-40 object-cover object-center rounded-lg mb-5" />
            <p className="text-[13px] text-white/75 leading-relaxed">
              {t('Your trusted logistics partner for fast, safe, and professional international shipping.', 'شريكك اللوجستي الموثوق للشحن الدولي السريع والآمن والاحترافي.')}
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-5 text-accent-light">{t('Navigation', 'التنقل')}</h4>
            <div className="flex flex-col gap-2.5">
              {[
                ['#services', t('Services', 'الخدمات')],
                ['#why-us', t('Why Us', 'لماذا نحن')],
                ['#how-it-works', t('How It Works', 'كيف نعمل')],
                ['#reviews', t('Reviews', 'التقييمات')],
                ['#faq', t('FAQ', 'أسئلة شائعة')],
                ['#contact', t('Contact', 'تواصل')],
              ].map(([h, l]) => (
                <a key={h} href={h} className="text-[13px] text-white/75 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-5 text-accent-light">{t('Services', 'الخدمات')}</h4>
            <div className="flex flex-col gap-2.5">
              {[
                t('Air Freight', 'شحن جوي'),
                t('Sea Freight', 'شحن بحري'),
                t('Land Freight', 'شحن بري'),
                t('Door to Door', 'توصيل من الباب للباب'),
                t('Customs Clearance', 'تخليص جمركي'),
                t('Logistics Solutions', 'حلول لوجستية'),
              ].map(s => (
                <a key={s} href="#services" className="text-[13px] text-white/75 hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-5 text-accent-light">{t('Contact', 'تواصل')}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0797540300" className="flex items-center gap-2 text-[13px] text-white/75 hover:text-white transition-colors"><Phone size={13} /> 0797540300</a>
              <a href="mailto:info@avatarexpress.com" className="flex items-center gap-2 text-[13px] text-white/75 hover:text-white transition-colors"><Mail size={13} /> info@avatarexpress.com</a>
              <span className="flex items-center gap-2 text-[13px] text-white/75"><MapPin size={13} /> {t('Amman, Jordan', 'عمان، الأردن')}</span>
              <a href="https://wa.me/962797540300" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-wa font-semibold"><MessageCircle size={13} /> {t('WhatsApp', 'واتساب')}</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/45">&copy; {new Date().getFullYear()} Avatar Express. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}</p>
          <p className="text-[12px] text-white/45">{t('International Shipping & Logistics \u2014 Fast, Safe, Professional', 'شحن دولي ولوجستيك \u2014 سريع، آمن، احترافي')}</p>
        </div>
      </div>
    </footer>
  );
}
