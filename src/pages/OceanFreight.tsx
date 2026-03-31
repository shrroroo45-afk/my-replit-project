import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Boxes, Car, Layers, Package,
  Droplets, Snowflake, Anchor, MessageCircle, ChevronRight,
  Scale, Maximize2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const shipTypes = [
  {
    icon: <Boxes size={28} />,
    name: 'السفينة الحاوية',
    name_en: 'Container Ship',
    desc: 'العمود الفقري للتجارة العالمية، لنقل الحاويات القياسية.',
  },
  {
    icon: <Car size={28} />,
    name: 'سفينة رو-رو',
    name_en: 'Ro-Ro Ship',
    desc: 'للمركبات والمعدات المتحركة (سيارات، شاحنات).',
  },
  {
    icon: <Layers size={28} />,
    name: 'ناقلة البضائع السائبة',
    name_en: 'Bulk Carrier',
    desc: 'لبضائع السائب مثل الحبوب، الفحم، والإسمنت.',
  },
  {
    icon: <Package size={28} />,
    name: 'سفينة البضائع العامة',
    name_en: 'General Cargo Ship',
    desc: 'سفن مرنة لشحنات متنوعة وغير موحدة.',
  },
  {
    icon: <Droplets size={28} />,
    name: 'ناقلة',
    name_en: 'Tanker',
    desc: 'لنقل السوائل (نفط، كيماويات، غاز).',
  },
  {
    icon: <Snowflake size={28} />,
    name: 'سفينة ريفر',
    name_en: 'Reefer Ship',
    desc: 'بضائع تحتاج تبريد (أطعمة، أدوية).',
  },
  {
    icon: <Anchor size={28} />,
    name: 'سفينة الرافعة الثقيلة',
    name_en: 'Heavy Lift Vessel',
    desc: 'للشحنات الثقيلة والضخمة غير التقليدية.',
  },
];

export default function OceanFreight() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waLink = `https://wa.me/962797540300?text=${encodeURIComponent('مرحبا، أريد الاستفسار عن خدمات الشحن البحري')}`;

  return (
    <div className="min-h-screen bg-white" dir="rtl" lang="ar">
      <Navbar />

      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-12 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent transition-colors"
          >
            <ArrowRight size={15} />
            عودة للرئيسية
          </Link>
          <span className="mx-3 text-gray-200">|</span>
          <span className="text-[13px] text-gray-400">دليل الشحن البحري</span>
        </div>
      </div>

      <section className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <img
          src="/uploads/sea-freight.jpg"
          alt="الشحن البحري"
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
            خدمة الشحن البحري
          </span>
          <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-extrabold text-white leading-[1.25] mb-5">
            دليلك الشامل للشحن البحري
          </h1>
          <p className="text-[15px] md:text-[16px] text-blue-100/80 leading-relaxed max-w-xl mx-auto mb-8">
            من اختيار نوع الحاوية الصح إلى أنواع السفن — كل ما تحتاج معرفته لشحن بضاعتك بأقل تكلفة وأعلى كفاءة.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25 active:scale-95"
          >
            <MessageCircle size={17} /> استفسر الآن عبر واتساب
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
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 md:p-10"
          >
            <div className="text-3xl mb-5 text-center">📦🚢</div>
            <p className="text-[16px] md:text-[17px] text-primary font-bold leading-[1.8] text-center mb-4">
              عندك شحنة مُعينة ومش عارف تشحنها في حاوية 20 ولا حاوية 40؟
            </p>
            <p className="text-[14.5px] md:text-[15.5px] text-gray-600 leading-[1.9] text-center">
              في عالم الشحن البحري، اختيار نوع الحاوية الصح ممكن يوفر عليك تكلفة كبيرة ويحسّن كفاءة الشحن عندك —
              والاختيار الخاطئ ممكن يكلفك <span className="text-accent font-bold">آلاف الدولارات!</span> 💰
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
            className="text-center mb-12"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">مقارنة الحاويات</span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              حاوية 20 قدم مقابل حاوية 40 قدم
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              اختار الحاوية المناسبة بناءً على طبيعة بضاعتك وحجمها ووزنها
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-primary/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary px-6 py-5 text-center">
                <p className="text-accent-light text-[12px] font-bold uppercase tracking-widest mb-1">حاوية</p>
                <h3 className="text-white text-[2rem] font-extrabold">20 قدم</h3>
                <p className="text-blue-200/70 text-[13px] mt-1">20 FT Container</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'الأبعاد الداخلية', value: '6.06م × 2.44م × 2.59م' },
                    { label: 'الحجم التقريبي', value: '~33 م³' },
                    { label: 'الحمولة الصافية', value: '21 – 28 طن' },
                  ].map(r => (
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
                      <span className="font-bold text-primary">الأنسب لـ:</span> البضائع الثقيلة وعالية الكثافة مثل{' '}
                      <span className="text-accent font-semibold">الحديد، الرخام، السيراميك</span> — تعتمد على الوزن لا الحجم.
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
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-accent/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-accent to-orange-500 px-6 py-5 text-center">
                <p className="text-white/80 text-[12px] font-bold uppercase tracking-widest mb-1">حاوية</p>
                <h3 className="text-white text-[2rem] font-extrabold">40 قدم</h3>
                <p className="text-white/70 text-[13px] mt-1">40 FT Container</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'الأبعاد الداخلية', value: '12.19م × 2.44م × 2.59م' },
                    { label: 'الحجم التقريبي', value: '~67 م³' },
                    { label: 'الحمولة الصافية', value: '26 – 29 طن' },
                  ].map(r => (
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
                      <span className="font-bold text-primary">الأنسب لـ:</span> البضائع الخفيفة وكبيرة الحجم مثل{' '}
                      <span className="text-accent font-semibold">الأثاث، الملابس، الكراتين</span> — تعتمد على الحجم لتوفير التكلفة.
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
            className="bg-gradient-to-br from-primary to-navy rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-[1.3rem] md:text-[1.5rem] font-extrabold mb-8 text-center">
              متى تختار كل نوع؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Scale size={18} className="text-accent-light" />
                  </div>
                  <h4 className="text-[1rem] font-bold">اختر حاوية 20 قدم إذا:</h4>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'بضاعتك ثقيلة وكثيفة (حديد، رخام، سيراميك)',
                    'تعتمد على الوزن أكثر من الحجم',
                    'شحنة أقل حجماً لكن وزنها كبير',
                  ].map(i => (
                    <li key={i} className="flex items-start gap-2 text-[13.5px] text-blue-100/85">
                      <ChevronRight size={15} className="text-accent-light mt-0.5 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Maximize2 size={18} className="text-accent-light" />
                  </div>
                  <h4 className="text-[1rem] font-bold">اختر حاوية 40 قدم إذا:</h4>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'بضاعتك خفيفة وحجمها كبير (أثاث، ملابس، كراتين)',
                    'تعتمد على الحجم لتوفير التكلفة',
                    'شحنة كبيرة الحجم نسبياً',
                  ].map(i => (
                    <li key={i} className="flex items-start gap-2 text-[13.5px] text-blue-100/85">
                      <ChevronRight size={15} className="text-accent-light mt-0.5 flex-shrink-0" />
                      {i}
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
            className="text-center mb-12"
          >
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">أنواع السفن</span>
            <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
              أنواع سفن الشحن البحري
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">
              كل نوع من السفن مصمم لغرض تجاري محدد — اعرف الفرق
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
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-accent/20 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {ship.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-primary mb-1">{ship.name}</h3>
                <p className="text-[12px] text-accent font-semibold mb-3 uppercase tracking-wide">{ship.name_en}</p>
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
          className="max-w-2xl mx-auto px-5 text-center"
        >
          <div className="text-4xl mb-5">🚢</div>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-white mb-4 leading-tight">
            جاهز تشحن بضاعتك من الصين؟
          </h2>
          <p className="text-blue-100/75 text-[15px] leading-relaxed mb-8">
            فريقنا يساعدك تختار الحاوية الصح والمسار الأمثل لشحنتك — تواصل معنا الآن وخليها علينا.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/25 active:scale-95"
          >
            <MessageCircle size={18} />
            تواصل معنا عبر واتساب
          </a>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-blue-200/60 hover:text-white transition-colors font-medium"
            >
              <ArrowRight size={14} />
              عودة للصفحة الرئيسية
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
