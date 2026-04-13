import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ShoppingCart, Search, ClipboardCheck, PackageCheck,
  Truck, MessageCircle,
  CheckCircle, ChevronRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useT, useLang } from '../lib/i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tr = { duration: 0.55, ease: 'easeOut' as const };

export default function PurchaseService() {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const waMsg = encodeURIComponent(t(
    'Hello, I would like to inquire about purchasing goods from China',
    'مرحبا، أريد الاستفسار عن خدمة شراء البضائع من الصين'
  ));
  const waLink = `https://wa.me/962797540300?text=${waMsg}`;

  const steps = [
    {
      num: 1,
      title: t('Send Us What You Need', 'أخبرنا بما تريد'),
      desc: t('Send us the product details, specifications, and quantity you need.', 'أرسل لنا تفاصيل المنتج والمواصفات والكمية التي تحتاجها.'),
      icon: <ClipboardCheck size={20} />,
    },
    {
      num: 2,
      title: t('Supplier Search & Verification', 'البحث عن المورد والتحقق منه'),
      desc: t('We find the best suppliers in China, verify their quality and reliability.', 'نبحث عن أفضل الموردين في الصين، ونتحقق من جودتهم وموثوقيتهم.'),
      icon: <Search size={20} />,
    },
    {
      num: 3,
      title: t('Price Negotiation & Purchase', 'التفاوض على السعر والشراء'),
      desc: t('We negotiate the best price on your behalf and finalize the purchase.', 'نتفاوض للحصول على أفضل سعر نيابة عنك وننهي عملية الشراء.'),
      icon: <ShoppingCart size={20} />,
    },
    {
      num: 4,
      title: t('Quality Inspection', 'فحص الجودة'),
      desc: t('We inspect the goods in our China warehouse before shipping to ensure quality.', 'نفحص البضاعة في مستودعنا بالصين قبل الشحن للتأكد من الجودة.'),
      icon: <PackageCheck size={20} />,
    },
    {
      num: 5,
      title: t('Shipping & Delivery', 'الشحن والتوصيل'),
      desc: t('Your goods are shipped to Jordan with full customs clearance and door delivery.', 'يتم شحن بضاعتك إلى الأردن مع تخليص جمركي كامل وتوصيل للباب.'),
      icon: <Truck size={20} />,
    },
  ];

  const features = [
    { title: t('Direct Factory Prices', 'أسعار المصنع المباشرة'), desc: t('Access authentic factory prices without intermediaries.', 'وصول مباشر لأسعار المصنع بدون وسطاء.') },
    { title: t('Quality Inspection', 'فحص الجودة'), desc: t('Every order is inspected before it leaves China.', 'كل طلب يُفحص قبل مغادرة الصين.') },
    { title: t('All Product Types', 'جميع أنواع المنتجات'), desc: t('Electronics, clothing, tools, accessories, and more.', 'إلكترونيات، ملابس، أدوات، إكسسوارات، وأكثر.') },
    { title: t('Transparent Pricing', 'أسعار شفافة'), desc: t('Full cost breakdown before purchase — no surprises.', 'تفصيل كامل للتكاليف قبل الشراء — بدون مفاجآت.') },
    { title: t('Expert Negotiation', 'تفاوض احترافي'), desc: t('Our China-based team negotiates the best deals for you.', 'فريقنا في الصين يتفاوض للحصول على أفضل صفقة لك.') },
    { title: t('End-to-End Service', 'خدمة متكاملة'), desc: t('From purchase to your doorstep — we handle everything.', 'من الشراء حتى بابك — نحن نتولى كل شيء.') },
  ];

  return (
    <div dir={dir} className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/uploads/logistics-worker.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/95" />
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ ...tr, delay: 0.05 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[12px] font-semibold text-accent-light mb-5">
              <ShoppingCart size={13} /> {t('Purchase Service', 'خدمة الشراء')}
            </div>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-white leading-tight mb-5">
              {t('Purchase Goods from China', 'شراء بضائع من الصين')}
            </h1>
            <p className="text-blue-100/80 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed mb-8">
              {t(
                'We buy any product from Chinese factories on your behalf — with quality inspection, professional negotiation, and full delivery to Jordan.',
                'نشتري لك أي منتج من المصانع الصينية — مع فحص الجودة والتفاوض الاحترافي والتوصيل الكامل إلى الأردن.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/30 active:scale-95">
                <MessageCircle size={18} /> {t('Start Now via WhatsApp', 'ابدأ الآن عبر الواتساب')}
              </a>
              <Link to="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-[15px] hover:bg-white/20 transition-all active:scale-95">
                {t('Back to Home', 'العودة للرئيسية')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={tr} className="text-center mb-12">
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('How It Works', 'كيف تعمل الخدمة')}</span>
            <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-primary mt-2">{t('Purchase Steps', 'خطوات عملية الشراء')}</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 start-8 end-8 h-0.5 bg-accent/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ ...tr, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-accent mx-auto mb-4">
                    {s.icon}
                  </div>
                  <div className="absolute top-4 end-4 text-[11px] font-bold text-accent/50">0{s.num}</div>
                  <h3 className="text-[14px] font-extrabold text-primary mb-2">{s.title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image + Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={tr}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img src="/uploads/logistics-worker.jpg" alt={t('Purchasing from China', 'شراء من الصين')} className="w-full h-[380px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className="absolute bottom-6 start-6 bg-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-primary font-extrabold text-[15px]">{t('Trusted Sourcing', 'مصادر موثوقة')}</p>
                  <p className="text-gray-500 text-[12px]">{t('Verified Chinese suppliers', 'موردون صينيون معتمدون')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ ...tr, delay: 0.1 }}>
              <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Why Choose Us', 'لماذا تختارنا')}</span>
              <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-primary mt-2 mb-6">{t('Your Trusted Partner for Buying from China', 'شريكك الموثوق للشراء من الصين')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-primary">{f.title}</p>
                      <p className="text-[12px] text-gray-500 mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={tr}>
            <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-white mb-4">
              {t('Ready to Start Buying from China?', 'جاهز تبدأ الشراء من الصين؟')}
            </h2>
            <p className="text-blue-100/80 text-[15px] mb-8 leading-relaxed">
              {t('Contact us now and get a free quote within minutes.', 'تواصل معنا الآن واحصل على عرض سعر مجاني خلال دقائق.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/30 active:scale-95">
                <MessageCircle size={18} /> {t('Contact Us on WhatsApp', 'تواصل معنا عبر الواتساب')}
              </a>
              <Link to="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-[15px] hover:bg-white/20 transition-all active:scale-95">
                {t('View All Services', 'عرض جميع الخدمات')} <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
