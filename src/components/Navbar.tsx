import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLang, useT } from '../lib/i18n';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle: toggleLang } = useLang();
  const t = useT();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { hash: 'services', label: t('Services', 'الخدمات') },
    { hash: 'why-us', label: t('Why Us', 'لماذا نحن') },
    { hash: 'how-it-works', label: t('How It Works', 'كيف نعمل') },
    { hash: 'reviews', label: t('Reviews', 'التقييمات') },
    { hash: 'contact', label: t('Contact', 'تواصل معنا') },
  ];

  function handleNavClick(hash: string) {
    setOpen(false);
    if (isHome) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate({ pathname: '/', hash: `#${hash}` });
    }
  }

  function handleLogoClick() {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-[0_1px_8px_rgba(0,0,0,0.05)]' : 'bg-white border-b border-gray-100'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 h-[64px]">
        <button onClick={handleLogoClick} className="flex-shrink-0">
          <img src="/uploads/logo-avatar.png" alt="Avatar Express" className="h-12 w-36 object-cover object-center rounded-lg" />
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(l => (
            <button
              key={l.hash}
              onClick={() => handleNavClick(l.hash)}
              className="px-3 py-2 text-[13.5px] font-medium text-gray-500 hover:text-primary rounded-lg hover:bg-primary-50 transition-all"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Globe size={14} />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="https://wa.me/962797540300" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-wa border border-wa/20 rounded-lg hover:bg-green-50 transition-colors">
            <MessageCircle size={14} /> {t('WhatsApp', 'واتساب')}
          </a>
          <a href="tel:+962797540300"
            className="flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-bold bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            <Phone size={13} /> {t('Call Now', 'اتصل الآن')}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-1.5">
          <button onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 text-[12px] font-bold text-gray-500 border border-gray-200 rounded-lg">
            <Globe size={12} /> {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={() => setOpen(!open)} className="p-1.5 text-gray-700">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-xl">
          {navLinks.map(l => (
            <button
              key={l.hash}
              onClick={() => handleNavClick(l.hash)}
              className="block w-full text-start py-3 text-[15px] font-medium text-gray-600 hover:text-primary border-b border-gray-50 last:border-0"
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 mt-4">
            <a href="tel:+962797540300" className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-primary text-white rounded-lg font-bold text-sm">
              <Phone size={14} /> {t('Call Now', 'اتصل الآن')}
            </a>
            <a href="https://wa.me/962797540300" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-wa text-white rounded-lg font-bold text-sm">
              <MessageCircle size={14} /> {t('WhatsApp', 'واتساب')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
