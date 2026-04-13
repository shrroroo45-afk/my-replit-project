import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Plane, FileText, PackageCheck, ClipboardList,
  Truck, ShieldCheck, ArrowRight, MessageCircle,
  Clock, Scale, Box, ChevronRight, BadgeCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useT, useLang } from '../lib/i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tr = { duration: 0.55, ease: 'easeOut' as const };

export default function AirFreight() {
  const t = useT();
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const waMsg = encodeURIComponent(t(
    'Hello, I would like to inquire about air freight services',
    'مرحبا، أريد الاستفسار عن خدمات الشحن الجوي'
  ));
  const waLink = `https://wa.me/962797540300?text=${waMsg}`;

  const steps = [
    {
      num: 1,
      title: t('Shipment Preparation', 'إعداد الشحنة'),
      desc: t('Prepare the goods and all required documents from the origin country.', 'تجهيز البضاعة والمستندات من المصدر.'),
      icon: <PackageCheck size={20} />,
    },
    {
      num: 2,
      title: t('Export Customs Clearance', 'التخليص الجمركي للتصدير'),
      desc: t('Complete all export formalities and procedures in the country of origin.', 'إنهاء الإجراءات الجمركية في بلد المنشأ.'),
      icon: <ShieldCheck size={20} />,
    },
    {
      num: 3,
      title: t('Air Handling & AWB', 'مناولة الطيران'),
      desc: t('Issue the Air Waybill (AWB) and hand over the shipment to the airport.', 'إصدار بوليصة الشحن الجوي (AWB) وتسليم الشحنة للمطار.'),
      icon: <FileText size={20} />,
    },
    {
      num: 4,
      title: t('Air Transport', 'النقل الجوي'),
      desc: t('The international flight departs with your cargo on board.', 'انطلاق الرحلة الدولية وبضاعتك على متنها.'),
      icon: <Plane size={20} />,
    },
    {
      num: 5,
      title: t('Arrival & Ground Handling', 'الوصول والمناولة الأرضية'),
      desc: t('Unloading the shipment and temporary storage upon arrival.', 'تفريغ الشحنة وتخزينها المؤقت عند الوصول.'),
      icon: <Truck size={20} />,
    },
    {
      num: 6,
      title: t('Import Customs Clearance', 'التخليص الجمركي للاستيراد'),
      desc: t('Assessment of duties and taxes at the Jordanian customs.', 'تقييم الرسوم والضرائب الجمركية في الأردن.'),
      icon: <ClipboardList size={20} />,
    },
    {
      num: 7,
      title: t('Final Delivery', 'التسليم النهائي'),
      desc: t('Release of the shipment and delivery to the importer\'s warehouse.', 'الإفراج عن الشحنة وتوصيلها لمستودع المستورد.'),
      icon: <BadgeCheck size={20} />,
    },
  ];

  const documents = [
    { icon: <FileText size={22} />, name: t('Air Waybill (AWB)', 'بوليصة الشحن (AWB)') },
    { icon: <ClipboardList size={22} />, name: t('Commercial Invoice', 'الفاتورة التجارية') },
    { icon: <PackageCheck size={22} />, name: t('Packing List', 'قائمة التعبئة') },
    { icon: <ShieldCheck size={22} />, name: t('Import Declaration', 'بيان الاستيراد') },
    { icon: <ChevronRight size={22} />, name: t('Delivery Order', 'أمر التسليم') },
    { icon: <BadgeCheck size={22} />, name: t('Certificate of Origin', 'شهادة المنشأ') },
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
          <span className="text-[13px] text-gray-400">{t('Air Freight Guide', 'دليل الشحن الجوي')}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
        <img
          src="/uploads/air-freight.jpg"
          alt={t('Air Freight', 'الشحن الجوي')}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-navy/90" />

        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 60 : -60, y: 40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="relative z-10 text-center px-5 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-accent/20 text-accent-light text-[12px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5 border border-accent/30">
            {t('Air Freight Service', 'خدمة الشحن الجوي')}
          </span>
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-extrabold text-white leading-[1.35] mb-5">
            {t('Fast & Safe Air Freight to All Destinations ✈️', 'شحن جوي سريع وآمن إلى جميع الوجهات ✈️')}
          </h1>
          <p className="text-[15px] md:text-[16px] text-blue-100/80 leading-relaxed max-w-xl mx-auto mb-8">
            {t(
              'Your shipment from China to Jordan in 7–12 days — full customs clearance and door-to-door service.',
              'شحنتك من الصين إلى الأردن خلال 7-12 يوم — شامل التخليص الجمركي والتوصيل.'
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

      {/* ── Section B: Save Your Time ── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="relative bg-white rounded-2xl border border-primary/20 shadow-lg p-7 md:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: '0 0 0 2px rgba(var(--color-accent),0.18), 0 8px 32px rgba(var(--color-primary),0.08)' }} />
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-extrabold text-primary mb-3 leading-tight">
                  {t('Save Your Time ⏱️', 'وفر وقتك ⏱️')}
                </h2>
                <p className="text-[15px] text-gray-700 font-semibold leading-[1.85] mb-4">
                  {t(
                    'Purchase from China and ship by air — all-inclusive customs clearance.',
                    'الشراء من الصين والشحن طيران شامل التخليص الجمركي.'
                  )}
                </p>
                <div className="bg-primary-50 rounded-xl px-5 py-4 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <BadgeCheck size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      <span className="font-bold text-primary">
                        {t('Additional Service: ', 'خدمة إضافية: ')}
                      </span>
                      {t(
                        'Purchasing on your behalf to save cost and get the fastest service.',
                        'الشراء من خلالنا لتوفير السعر والخدمة الأسرع.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section C: Volumetric Weight ── */}
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
              {t('Volumetric Weight', 'الوزن الحجمي')}
            </span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              {t('Actual Weight vs Volumetric Weight', 'الوزن الفعلي مقابل الوزن الحجمي')}
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">
              {t(
                'Airlines charge based on whichever is greater — understand the difference before you ship.',
                'شركات الطيران تحتسب الأعلى بين الاثنين — افهم الفرق قبل شحنتك.'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={tr}
              className="rounded-2xl border-2 border-primary/20 bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-4">
                <Scale size={24} />
              </div>
              <h3 className="text-[1.1rem] font-extrabold text-primary mb-2">
                {t('Actual Weight', 'الوزن الفعلي')}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                {t(
                  'The real weight of the shipment as measured on a scale.',
                  'الوزن الحقيقي للشحنة كما يُقاس على الميزان.'
                )}
              </p>
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="text-[13px] text-gray-600">
                  <span className="font-bold text-primary">{t('Example: ', 'مثال: ')}</span>
                  {t('Small heavy items like machine parts or metals.', 'قطع ثقيلة صغيرة مثل قطع الآلات أو المعادن.')}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ ...tr, delay: 0.1 }}
              className="rounded-2xl border-2 border-accent/30 bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Box size={24} />
              </div>
              <h3 className="text-[1.1rem] font-extrabold text-primary mb-2">
                {t('Volumetric Weight', 'الوزن الحجمي')}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                {t(
                  'An estimated weight based on the space the shipment occupies in the aircraft.',
                  'وزن تقديري مبني على المساحة التي تشغلها الشحنة في الطائرة.'
                )}
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-[13px] text-gray-600">
                  <span className="font-bold text-primary">{t('Example: ', 'مثال: ')}</span>
                  {t('Large light items like pillows, inflatable products, or foam.', 'منتجات كبيرة وخفيفة مثل الوسائد والمنتجات المنفوخة والإسفنج.')}
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-accent-light text-[12px] font-bold uppercase tracking-widest mb-2">
                  {t('Formula', 'المعادلة')}
                </p>
                <h3 className="text-[1.3rem] font-extrabold mb-4 leading-tight">
                  {t('How to Calculate Volumetric Weight', 'كيف تحسب الوزن الحجمي؟')}
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 text-center mb-4">
                  <p className="text-white/70 text-[12px] mb-2 uppercase tracking-wide">{t('Volumetric Weight', 'الوزن الحجمي')}</p>
                  <p className="text-[1.5rem] font-extrabold text-accent-light leading-tight">
                    (L × W × H) ÷ 6000
                  </p>
                  <p className="text-white/60 text-[12px] mt-2">
                    {t('Dimensions in cm / Result in kg', 'الأبعاد بالسنتيمتر / النتيجة بالكيلوغرام')}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-accent-light text-[12px] font-bold uppercase tracking-widest mb-2">
                  {t('Golden Rule', 'القاعدة الذهبية')}
                </p>
                <h3 className="text-[1.3rem] font-extrabold mb-4 leading-tight">
                  {t('The Carrier\'s Rule', 'قاعدة الناقل')}
                </h3>
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-5">
                  <p className="text-[15px] text-white leading-relaxed font-semibold">
                    {t(
                      'The chargeable weight is always the GREATER of the actual weight and the volumetric weight.',
                      'الأكبر بين الوزن الفعلي والحجمي هو المعتمد للاحتساب.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section D: 7-Step Journey ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="text-center mb-14"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">
              {t('How It Works', 'آلية الاستيراد')}
            </span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              {t('Your Shipment Journey ✈️', 'رحلة شحنتك ✈️')}
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              {t(
                'From preparation to final delivery — 7 clear steps.',
                'من الإعداد حتى التسليم النهائي — 7 خطوات واضحة.'
              )}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute start-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary/30 to-transparent hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ ...tr, delay: i * 0.07 }}
                  className="flex items-start gap-5 sm:gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border-2 border-accent/25 shadow-sm flex flex-col items-center justify-center text-accent relative z-10">
                    {step.icon}
                    <span className="text-[10px] font-bold text-primary/60 leading-none mt-0.5">{step.num}</span>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-1 hover:border-accent/20 hover:shadow-md transition-all duration-300">
                    <h3 className="text-[15px] font-extrabold text-primary mb-1">{step.title}</h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section E: Required Documents ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={tr}
            className="text-center mb-12"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">
              {t('Required Documents', 'المستندات المطلوبة')}
            </span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              {t('Documents You Need to Ship', 'المستندات التي تحتاجها للشحن')}
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              {t(
                'Ensure all documents are ready before shipping to avoid any delays.',
                'تأكد من جاهزية جميع المستندات قبل الشحن لتجنب أي تأخير.'
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc, i) => (
              <motion.div
                key={doc.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ...tr, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:border-accent/20 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {doc.icon}
                </div>
                <p className="text-[14.5px] font-bold text-primary">{doc.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-primary">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={tr}
          className="max-w-2xl mx-auto px-5 text-center"
        >
          <div className="text-4xl mb-5">✈️</div>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-white mb-4 leading-tight">
            {t('Ready to Start Shipping by Air?', 'جاهز لبدء الشحن الجوي؟')}
          </h2>
          <p className="text-blue-100/75 text-[15px] leading-relaxed mb-8">
            {t(
              'Our team handles everything — from purchase to your doorstep. Contact us now.',
              'فريقنا يتولى كل شيء — من الشراء حتى باب منزلك. تواصل معنا الآن.'
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
