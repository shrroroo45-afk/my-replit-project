import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Boxes, Car, Layers, Package,
  Droplets, Snowflake, Anchor, MessageCircle, ChevronRight,
  Scale, Maximize2, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useT, useLang } from '../lib/i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tr = { duration: 0.55, ease: 'easeOut' as const };

export default function OceanFreight() {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const waMsg = encodeURIComponent(t(
    'Hello, I would like to inquire about ocean freight services',
    'مرحبا، أريد الاستفسار عن خدمات الشحن البحري'
  ));
  const waLink = `https://wa.me/962797540300?text=${waMsg}`;

  const shipTypes = [
    {
      icon: <Boxes size={28} />,
      name: t('Container Ship', 'السفينة الحاوية'),
      desc: t('The backbone of global trade, used to transport standard containers.', 'العمود الفقري للتجارة العالمية، لنقل الحاويات القياسية.'),
    },
    {
      icon: <Car size={28} />,
      name: t('Ro-Ro Ship', 'سفينة رو-رو'),
      desc: t('For wheeled vehicles and mobile equipment (cars, trucks).', 'للمركبات والمعدات المتحركة (سيارات، شاحنات).'),
    },
    {
      icon: <Layers size={28} />,
      name: t('Bulk Carrier', 'ناقلة البضائع السائبة'),
      desc: t('For bulk cargo such as grain, coal, and cement.', 'لبضائع السائب مثل الحبوب، الفحم، والإسمنت.'),
    },
    {
      icon: <Package size={28} />,
      name: t('General Cargo Ship', 'سفينة البضائع العامة'),
      desc: t('Flexible vessels for diverse and non-standardized shipments.', 'سفن مرنة لشحنات متنوعة وغير موحدة.'),
    },
    {
      icon: <Droplets size={28} />,
      name: t('Tanker', 'ناقلة'),
      desc: t('For transporting liquids (oil, chemicals, gas).', 'لنقل السوائل (نفط، كيماويات، غاز).'),
    },
    {
      icon: <Snowflake size={28} />,
      name: t('Reefer Ship', 'سفينة ريفر'),
      desc: t('For temperature-sensitive cargo (food, medicine).', 'بضائع تحتاج تبريد (أطعمة، أدوية).'),
    },
    {
      icon: <Anchor size={28} />,
      name: t('Heavy Lift Vessel', 'سفينة الرافعة الثقيلة'),
      desc: t('For heavy and oversized non-conventional shipments.', 'للشحنات الثقيلة والضخمة غير التقليدية.'),
    },
  ];

  const specs20 = [
    { label: t('Interior Dimensions', 'الأبعاد الداخلية'), value: '6.06m × 2.44m × 2.59m' },
    { label: t('Approx. Volume', 'الحجم التقريبي'), value: '~33 m³' },
    { label: t('Net Load', 'الحمولة الصافية'), value: '21 – 28 t' },
  ];

  const specs40 = [
    { label: t('Interior Dimensions', 'الأبعاد الداخلية'), value: '12.19m × 2.44m × 2.59m' },
    { label: t('Approx. Volume', 'الحجم التقريبي'), value: '~67 m³' },
    { label: t('Net Load', 'الحمولة الصافية'), value: '26 – 29 t' },
  ];

  const items20 = [
    t('Heavy, high-density cargo (iron, marble, ceramics)', 'بضاعتك ثقيلة وكثافتها عالية (حديد، رخام، سيراميك)'),
    t('Shipments that rely on weight more than volume', 'تعتمد على الوزن أكثر من الحجم'),
    t('Smaller volume but heavy cargo', 'شحنة أقل حجماً لكن وزنها كبير'),
  ];

  const items40 = [
    t('Light, high-volume cargo (furniture, clothes, cartons)', 'بضاعتك خفيفة وكبيرة الحجم (أثاث، ملابس، كراتين)'),
    t('Shipments that rely on volume to save cost', 'تعتمد على الحجم لتوفير التكلفة'),
    t('Relatively large volume cargo', 'شحنة كبيرة الحجم نسبياً'),
  ];

  return (
    <div className="min-h-screen bg-white" dir={dir} lang={lang}>
      <Navbar />

      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-12 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent transition-colors"
          >
            <ArrowRight size={15} />
            {t('Back to Home', 'عودة للرئيسية')}
          </Link>
          <span className="mx-3 text-gray-200">|</span>
          <span className="text-[13px] text-gray-400">{t('Ocean Freight Guide', 'دليل الشحن البحري')}</span>
        </div>
      </div>

      <section className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <img
          src="/uploads/sea-freight.jpg"
          alt={t('Ocean Freight', 'الشحن البحري')}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-navy/90" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 text-center px-5 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-accent/20 text-accent-light text-[12px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5 border border-accent/30">
            {t('Ocean Freight Service', 'خدمة الشحن البحري')}
          </span>
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-extrabold text-white leading-[1.35] mb-5">
            {t('Your Comprehensive Guide to Ocean Freight', 'دليلك الشامل للشحن البحري')}
          </h1>
          <p className="text-[15px] md:text-[16px] text-blue-100/80 leading-relaxed max-w-xl mx-auto mb-8">
            {t(
              'From choosing the right container to ship types — everything you need to know to ship your cargo at the lowest cost and highest efficiency.',
              'من اختيار نوع الحاوية الصح إلى أنواع السفن — كل ما تحتاج معرفته لشحن بضاعتك بأقل تكلفة وأعلى كفاءة.'
            )}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25 active:scale-95"
          >
            <MessageCircle size={17} /> {t('Inquire Now via WhatsApp', 'استفسر الآن عبر واتساب')}
          </a>
        </motion.div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 md:p-10 text-center"
          >
            <p className="text-[16px] md:text-[17px] text-primary font-bold leading-[1.9] mb-4">
              {t(
                'Do you have a specific shipment and are not sure whether to ship it in a 20 or 40 ft container? 📦🚢',
                'عندك شحنة مُعينة ولا تعرف هل تشحنها في حاوية 20 أم حاوية 40؟ 📦🚢'
              )}
            </p>
            <p className="text-[14.5px] md:text-[15.5px] text-gray-600 leading-[1.9]">
              {t(
                'In ocean freight, choosing the right container type can save you significant costs and improve your shipping efficiency — and the wrong choice can cost you ',
                'في عالم الشحن البحري، اختيار نوع الحاوية الصح ممكن يوفر عليك تكلفة كبيرة ويحسّن كفاءة الشحن عندك — والاختيار الخاطئ ممكن يكلفك '
              )}
              <span className="text-accent font-bold">
                {t('thousands of dollars!', 'الاف الدولارات!')}
              </span>
              {' '}💰
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="text-center mb-12"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">
              {t('Container Comparison', 'مقارنة الحاويات')}
            </span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              {t('20 FT vs 40 FT Container', 'حاوية 20 قدم مقابل حاوية 40 قدم')}
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              {t('Choose the right container based on your cargo type, size, and weight.', 'اختار الحاوية المناسبة بناءً على طبيعة بضاعتك وحجمها ووزنها')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={tr}
              className="rounded-2xl border-2 border-primary/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary px-6 py-5 text-center">
                <p className="text-accent-light text-[12px] font-bold uppercase tracking-widest mb-1">{t('Container', 'حاوية')}</p>
                <h3 className="text-white text-[2rem] font-extrabold">{t('20 FT', '20 قدم')}</h3>
                <p className="text-blue-200/70 text-[13px] mt-1">20 FT Container</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4 mb-6">
                  {specs20.map(r => (
                    <div key={r.label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-[13.5px] text-gray-500 font-medium">{r.label}</span>
                      <span className="text-[14px] font-bold text-primary">{r.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="flex items-start gap-2.5">
                    <Scale size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-[13.5px] text-gray-600 leading-relaxed">
                      <span className="font-bold text-primary">{t('Best for:', 'الأنسب لـ:')}</span>{' '}
                      {t('Heavy, high-density cargo such as ', 'البضائع الثقيلة وكثافتها عالية مثل ')}
                      <span className="text-accent font-semibold">
                        {t('iron, marble, ceramics', 'الحديد، الرخام، السيراميك')}
                      </span>
                      {' '}— {t('relies on weight.', 'تعتمد على الوزن.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ ...tr, delay: 0.1 }}
              className="rounded-2xl border-2 border-accent/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-accent to-orange-500 px-6 py-5 text-center">
                <p className="text-white/80 text-[12px] font-bold uppercase tracking-widest mb-1">{t('Container', 'حاوية')}</p>
                <h3 className="text-white text-[2rem] font-extrabold">{t('40 FT', '40 قدم')}</h3>
                <p className="text-white/70 text-[13px] mt-1">40 FT Container</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4 mb-6">
                  {specs40.map(r => (
                    <div key={r.label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-[13.5px] text-gray-500 font-medium">{r.label}</span>
                      <span className="text-[14px] font-bold text-primary">{r.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex items-start gap-2.5">
                    <Maximize2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-[13.5px] text-gray-600 leading-relaxed">
                      <span className="font-bold text-primary">{t('Best for:', 'الأنسب لـ:')}</span>{' '}
                      {t('Light, high-volume cargo such as ', 'البضائع الخفيفة وكبيرة الحجم مثل ')}
                      <span className="text-accent font-semibold">
                        {t('furniture, clothes, cartons', 'الأثاث، الملابس، الكراتين')}
                      </span>
                      {' '}— {t('relies on volume to save cost.', 'تعتمد على الحجم لتوفير التكلفة.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="bg-gradient-to-br from-primary to-navy rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-[1.3rem] md:text-[1.5rem] font-extrabold mb-8 text-center">
              {t('When to Choose Each Type?', 'متى تختار كل نوع؟')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Scale size={18} className="text-accent-light" />
                  </div>
                  <h4 className="text-[1rem] font-bold">{t('Choose 20 FT if:', 'اختر حاوية 20 قدم إذا:')}</h4>
                </div>
                <ul className="space-y-2.5">
                  {items20.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13.5px] text-blue-100/85">
                      <ChevronRight size={15} className="text-accent-light mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Maximize2 size={18} className="text-accent-light" />
                  </div>
                  <h4 className="text-[1rem] font-bold">{t('Choose 40 FT if:', 'اختر حاوية 40 قدم إذا:')}</h4>
                </div>
                <ul className="space-y-2.5">
                  {items40.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13.5px] text-blue-100/85">
                      <ChevronRight size={15} className="text-accent-light mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="text-center mb-12"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">
              {t('Ship Types', 'أنواع السفن')}
            </span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              {t('Types of Ocean Freight Ships', 'أنواع سفن الشحن البحري')}
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              {t('Each ship type is designed for a specific commercial purpose — know the difference.', 'كل نوع من السفن مصمم لغرض تجاري محدد — اعرف الفرق')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {shipTypes.map((ship, i) => (
              <motion.div
                key={ship.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...tr, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-accent/20 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {ship.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-primary mb-3">{ship.name}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed">{ship.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={tr}
          className="max-w-2xl mx-auto px-5 text-center"
        >
          <div className="text-4xl mb-5">🚢</div>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-white mb-4 leading-tight">
            {t('Ready to ship your cargo from China?', 'جاهز لشحن بضاعتك من الصين؟')}
          </h2>
          <p className="text-blue-100/75 text-[15px] leading-relaxed mb-8">
            {t(
              'Our team helps you choose the right container and the optimal route for your shipment — contact us now and leave it to us.',
              'فريقنا يساعدك تختار الحاوية الصح والمسار الأمثل لشحنتك — تواصل معنا الآن وخليها علينا.'
            )}
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25 active:scale-95"
          >
            <MessageCircle size={18} />
            {t('Contact Us via WhatsApp', 'تواصل معنا عبر واتساب')}
          </a>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-blue-200/60 hover:text-white transition-colors font-medium"
            >
              <ArrowRight size={14} />
              {t('Back to Home Page', 'عودة للصفحة الرئيسية')}
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
