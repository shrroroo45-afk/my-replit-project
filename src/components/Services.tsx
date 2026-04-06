import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, MapPin, FileCheck, Boxes, Home, ArrowRight, MessageCircle, X, Calculator } from 'lucide-react';
import { useT } from '../lib/i18n';

function ChoiceModal({ onClose }: { onClose: () => void }) {
  const t = useT();
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 end-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X size={16} />
          </button>

          <p className="text-accent text-[11px] font-bold uppercase tracking-widest mb-2 text-center">
            {t('Choose Freight Type', 'اختر نوع الشحن')}
          </p>
          <h3 className="text-[1.25rem] font-extrabold text-primary text-center mb-7">
            {t('Which service are you looking for?', 'ما الخدمة التي تبحث عنها؟')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/air-freight"
              onClick={onClose}
              className="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 block"
            >
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src="/uploads/svc-air.jpg"
                  alt={t('Air Freight', 'الشحن الجوي')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 start-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  <Plane size={20} />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-[15px] font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('Air Freight', 'الشحن الجوي')}
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                  {t('Fast delivery in 7–12 days. All-inclusive customs clearance.', 'توصيل سريع خلال 7-12 يوم. شامل التخليص الجمركي.')}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-accent">
                  {t('Learn More', 'اعرف المزيد')} <ArrowRight size={13} />
                </span>
              </div>
            </Link>

            <Link
              to="/ocean-freight"
              onClick={onClose}
              className="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 block"
            >
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src="/uploads/svc-sea.jpg"
                  alt={t('Ocean Freight', 'الشحن البحري')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 start-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  <Ship size={20} />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-[15px] font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('Ocean Freight', 'الشحن البحري')}
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                  {t('Cost-effective sea shipping for large bulk cargo.', 'شحن بحري اقتصادي للشحنات الكبيرة والضخمة.')}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-accent">
                  {t('Learn More', 'اعرف المزيد')} <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
  );
}

const doorSteps = [
  { en: 'Factory Price', ar: 'سعر المصنع' },
  { en: 'Shipping Cost', ar: 'تكلفة الشحن' },
  { en: 'Customs & Duties', ar: 'الجمارك والرسوم' },
  { en: 'Last-Mile Delivery', ar: 'التوصيل لبابك' },
];

export default function Services() {
  const t = useT();
  const [showChoice, setShowChoice] = useState(false);

  const services = [
    {
      icon: <Home size={26} />,
      title: t('Door to Door', 'توصيل باب لباب'),
      desc: t(
        'Before you spend a single dollar, we give you the complete landed cost — from the factory gate in China to your door in Jordan. No surprises, no hidden fees.',
        'قبل ما تصرف قرشاً واحداً، نعطيك التكلفة الكاملة للبضاعة — من باب المصنع في الصين وحتى باب بيتك في الأردن. بدون مفاجآت، بدون رسوم مخفية.'
      ),
      img: '/uploads/service-door.jpg',
      tag: t('Full Cost', 'تكلفة كاملة'),
      isDoor: true,
    },
    {
      icon: <Plane size={26} />,
      title: t('Air & Sea Freight', 'شحن جوي وبحري'),
      desc: t('Fast and economical shipping for parcels and cargo. Express air delivery in 7–12 days or cost-effective sea freight for larger shipments.', 'شحن سريع واقتصادي للطرود والبضائع. توصيل جوي سريع خلال 7-12 يوم أو شحن بحري اقتصادي للشحنات الكبيرة.'),
      img: '/uploads/air-freight.jpg',
      tag: t('7–12 Days', '7-12 يوم'),
      hasChoice: true,
    },
    {
      icon: <Truck size={26} />,
      title: t('Land Freight', 'شحن بري'),
      desc: t('Reliable overland transport between cities and countries. Safe handling and on-time delivery for all cargo types.', 'نقل بري موثوق بين المدن والدول. تعامل آمن وتسليم في الوقت المحدد لجميع أنواع البضائع.'),
      img: '/uploads/land-freight.jpg',
      tag: t('All Sizes', 'جميع الأحجام'),
    },
    {
      icon: <MapPin size={26} />,
      title: t('Shipment Tracking', 'تتبع الشحنات'),
      desc: t('Monitor your shipment in real-time, every step of the way. Full visibility from pickup to final delivery.', 'تابع شحنتك لحظة بلحظة. رؤية كاملة من الاستلام حتى التسليم النهائي.'),
      img: '/uploads/tracking.jpg',
      tag: t('Real-Time', 'مباشر'),
    },
    {
      icon: <FileCheck size={26} />,
      title: t('Customs Clearance', 'تخليص جمركي'),
      desc: t('We handle all customs documentation and procedures. Fast processing with no delays or complications.', 'نتولى جميع إجراءات التخليص الجمركي. معالجة سريعة بدون تأخير أو تعقيدات.'),
      img: '/uploads/customs.jpg',
      tag: t('Hassle-Free', 'بدون تعقيد'),
    },
    {
      icon: <Boxes size={26} />,
      title: t('Logistics Solutions', 'حلول لوجستية'),
      desc: t('Integrated warehousing, transport, and delivery services. Complete supply chain management for your business.', 'خدمات تخزين ونقل وتسليم متكاملة. إدارة سلسلة التوريد الكاملة لعملك.'),
      img: '/uploads/logistics.jpg',
      tag: t('Full Service', 'خدمة كاملة'),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-28 bg-white">
      <AnimatePresence>
        {showChoice && <ChoiceModal onClose={() => setShowChoice(false)} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Our Services', 'خدماتنا')}</span>
          <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
            {t('Comprehensive Shipping', 'حلول شحن ولوجستيك')}<br className="hidden sm:block" /> {t('& Logistics Solutions', 'شاملة ومتكاملة')}
          </h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">
            {t('From express air freight to integrated logistics — tailored solutions for every shipping need.', 'من الشحن الجوي السريع إلى الحلول اللوجستية — حلول مخصصة لكل احتياجاتك.')}
          </p>
        </motion.div>

        {/* Mobile layout */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl overflow-hidden border bg-white shadow-sm active:shadow-md transition-all ${s.isDoor ? 'border-green-200' : 'border-gray-100'}`}>
              <div className="relative h-[200px]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className={`absolute top-3 end-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full ${s.isDoor ? 'bg-green-500' : 'bg-accent'}`}>
                  {s.tag}
                </div>
                <div className="absolute bottom-3 start-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  {s.icon}
                </div>
                {s.isDoor && (
                  <div className="absolute top-3 start-3 bg-white/90 backdrop-blur-sm text-green-700 text-[10px] font-black px-2 py-1 rounded-full">
                    ✦ {t('Most Popular', 'الأكثر طلباً')}
                  </div>
                )}
              </div>
              <div className={`p-5 ${s.isDoor ? 'bg-gradient-to-b from-green-50/50 to-white' : ''}`}>
                <h3 className="text-[16px] font-extrabold text-primary mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                {s.isDoor && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doorSteps.map((step, j) => (
                      <span key={j} className="flex items-center gap-1 bg-primary/5 text-primary text-[11px] font-bold px-2 py-1 rounded-lg">
                        <Calculator size={10} /> {t(step.en, step.ar)}
                      </span>
                    ))}
                  </div>
                )}
                {s.isDoor ? (
                  <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t("Hello, I'd like a Door to Door cost calculation from China to my door", 'مرحبا، أريد حساب التكلفة الكاملة door to door من الصين لبابي'))}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-[13px] w-full justify-center transition-colors">
                    <MessageCircle size={14} /> {t('Get Full Cost Now', 'احسب تكلفتك الآن')}
                  </a>
                ) : s.hasChoice ? (
                  <button
                    onClick={() => setShowChoice(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl font-bold text-[13px] w-full justify-center"
                  >
                    <Plane size={14} /> {t('Learn More', 'اعرف المزيد')}
                  </button>
                ) : (
                  <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t(`Hello, I'm interested in ${s.title}`, `مرحبا، أريد الاستفسار عن ${s.title}`))}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-bold text-[13px] w-full justify-center">
                    <MessageCircle size={14} /> {t('Ask via WhatsApp', 'استفسر عبر الواتساب')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block space-y-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border transition-all duration-300 relative
                ${s.isDoor
                  ? 'border-green-200 bg-gradient-to-br from-white to-green-50/40 hover:shadow-2xl hover:shadow-green-100/60'
                  : 'border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100/80'}`}>
              {s.isDoor && (
                <div className="absolute top-5 start-5 z-10">
                  <span className="bg-green-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ✦ {t('Most Popular', 'الأكثر طلباً')}
                  </span>
                </div>
              )}
              <div className={`h-64 lg:h-auto min-h-[260px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${s.isDoor ? 'bg-green-100 text-green-600' : 'bg-primary-50 text-accent'}`}>
                  {s.icon}
                </div>
                <div className="mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.isDoor ? 'bg-green-500/15 text-green-700' : 'bg-accent/10 text-accent'}`}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-[1.25rem] md:text-[1.4rem] font-extrabold text-primary mb-3">{s.title}</h3>
                <p className="text-[14.5px] text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                {s.isDoor && (
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {doorSteps.map((step, j) => (
                      <div key={j} className="flex items-center gap-2 bg-white border border-green-100 rounded-xl px-3 py-2.5 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[11px] font-black flex-shrink-0">{j + 1}</div>
                        <span className="text-[12px] font-semibold text-gray-700">{t(step.en, step.ar)}</span>
                      </div>
                    ))}
                  </div>
                )}
                {s.isDoor ? (
                  <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t("Hello, I'd like a Door to Door cost calculation from China to my door", 'مرحبا، أريد حساب التكلفة الكاملة door to door من الصين لبابي'))}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-[14px] transition-colors w-fit shadow-lg shadow-green-200">
                    <MessageCircle size={16} /> {t('Get Full Cost Now', 'احسب تكلفتك الآن')}
                  </a>
                ) : s.hasChoice ? (
                  <button
                    onClick={() => setShowChoice(true)}
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-accent hover:text-primary transition-colors w-fit"
                  >
                    {t('Learn More', 'اعرف المزيد')} <ArrowRight size={15} />
                  </button>
                ) : (
                  <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t(`Hello, I'm interested in ${s.title}`, `مرحبا، أريد الاستفسار عن ${s.title}`))}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-bold text-accent hover:text-primary transition-colors w-fit">
                    {t('Learn More', 'اعرف المزيد')} <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
