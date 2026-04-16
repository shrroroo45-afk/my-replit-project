import { useEffect } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Warehouse, PackageCheck, ShieldCheck, Clock,
  Truck, ChevronRight, MessageCircle, ArrowRight,
  Thermometer, BarChart3, Lock,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useT, useLang } from '../lib/i18n';

const storageWarehouseImage = '/uploads/storage-warehouse.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tr = { duration: 0.55, ease: 'easeOut' as const };

export default function StorageService() {
  const t = useT();
  const { lang } = useLang();
  const navigate = useNavigate();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [navType]);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const waMsg = encodeURIComponent(t(
    'Hello, I would like to inquire about warehousing services in China',
    'مرحبا، أريد الاستفسار عن خدمة تخزين البضائع في مستودعاتكم بالصين'
  ));
  const waLink = `https://wa.me/962797540300?text=${waMsg}`;

  const steps = [
    {
      num: 1,
      title: t('Goods Arrival', 'وصول البضاعة'),
      desc: t('Your goods arrive at our China warehouse from any supplier or factory.', 'تصل بضاعتك إلى مستودعنا بالصين من أي مورد أو مصنع.'),
      icon: <PackageCheck size={20} />,
    },
    {
      num: 2,
      title: t('Receiving & Inspection', 'الاستلام والفحص'),
      desc: t('We receive and inspect each item, documenting quantity and condition.', 'نستلم ونفحص كل صنف ونوثق الكمية والحالة بدقة.'),
      icon: <ShieldCheck size={20} />,
    },
    {
      num: 3,
      title: t('Secure Storage', 'التخزين الآمن'),
      desc: t('Your goods are stored safely in our monitored, organized warehouse.', 'تُخزَّن بضاعتك بأمان في مستودعنا المنظم والمراقب على مدار الساعة.'),
      icon: <Warehouse size={20} />,
    },
    {
      num: 4,
      title: t('Flexible Dispatch', 'الشحن عند الطلب'),
      desc: t('Tell us when you are ready and we ship directly to Jordan with full clearance.', 'أخبرنا عندما تكون جاهزاً ونشحن مباشرة إلى الأردن مع تخليص جمركي كامل.'),
      icon: <Truck size={20} />,
    },
  ];

  const features = [
    { icon: <Clock size={16} />, title: t('Flexible Duration', 'مدة مرنة'), desc: t('Store for days, weeks, or months — as long as you need.', 'تخزين لأيام أو أسابيع أو أشهر حسب حاجتك.') },
    { icon: <Lock size={16} />, title: t('Fully Secured', 'أمان تام'), desc: t('24/7 monitored warehouse with full insurance coverage.', 'مستودع مراقب 24/7 مع تغطية تأمينية كاملة.') },
    { icon: <Thermometer size={16} />, title: t('All Goods Types', 'جميع أنواع البضائع'), desc: t('Suitable for electronics, clothing, tools, food products, and more.', 'مناسب للإلكترونيات والملابس والأدوات والمنتجات الغذائية وأكثر.') },
    { icon: <BarChart3 size={16} />, title: t('Inventory Reports', 'تقارير المخزون'), desc: t('Regular detailed reports of all your stored goods.', 'تقارير دورية مفصلة بكامل بضاعتك المخزنة.') },
    { icon: <PackageCheck size={16} />, title: t('Consolidation Service', 'خدمة التجميع'), desc: t('Collect orders from multiple suppliers into one shipment.', 'تجميع الطلبات من عدة موردين في شحنة واحدة.') },
    { icon: <ShieldCheck size={16} />, title: t('Quality Control', 'مراقبة الجودة'), desc: t('Inspect goods before storage and before shipping.', 'فحص البضاعة قبل التخزين وقبل الشحن.') },
  ];

  return (
    <div dir={dir} className="min-h-screen bg-white">
      <Navbar />

      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-12 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent transition-colors"
          >
            <ArrowRight size={15} />
            {t('Back', 'رجوع')}
          </button>
        </div>
      </div>

      <section className="relative bg-primary pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={storageWarehouseImage} alt="" loading="eager" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/95" />
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ ...tr, delay: 0.05 }}>
            <span className="text-accent-light text-[12px] font-bold uppercase tracking-[0.2em]">{t('China Storage Service', 'خدمة التخزين في الصين')}</span>
            <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-white mt-4 mb-5 leading-tight">
              {t('Secure Storage for Your Goods in China', 'تخزين آمن لبضائعك في الصين')}
            </h1>
            <p className="text-blue-100/80 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
              {t('Store your cargo safely until you are ready to ship to Jordan.', 'خزّن بضاعتك بأمان حتى تصبح جاهزاً للشحن إلى الأردن.')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={tr}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img src={storageWarehouseImage} alt={t('Warehouse in China', 'مستودع في الصين')} loading="lazy" className="w-full h-[380px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                <div className="absolute bottom-6 start-6 bg-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-primary font-extrabold text-[15px]">{t('Secure & Monitored', 'آمن ومراقب')}</p>
                  <p className="text-gray-500 text-[12px]">{t('24/7 security in China', 'حماية على مدار الساعة في الصين')}</p>
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
                      {f.icon}
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

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={tr}>
            <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-white mb-4">
              {t('Ready to Store Your Goods?', 'جاهز لتخزين بضاعتك؟')}
            </h2>
            <p className="text-blue-100/80 text-[15px] mb-8 leading-relaxed">
              {t('Contact us now and get a free quote within minutes.', 'تواصل معنا الآن واحصل على عرض سعر مجاني خلال دقائق.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/30 active:scale-95">
                <MessageCircle size={18} /> {t('Contact Us on WhatsApp', 'تواصل معنا عبر الواتساب')}
              </a>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-[15px] hover:bg-white/20 transition-all active:scale-95">
                <ChevronRight size={16} /> {t('Back', 'رجوع')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
