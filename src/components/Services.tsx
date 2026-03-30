import { motion } from 'framer-motion';
import { Plane, Truck, MapPin, FileCheck, Boxes, ArrowRight, MessageCircle } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Services() {
  const t = useT();

  const services = [
    {
      icon: <Plane size={26} />,
      title: t('Air & Sea Freight', 'شحن جوي وبحري'),
      desc: t('Fast and economical shipping for parcels and cargo. Express air delivery in 7–12 days or cost-effective sea freight for larger shipments.', 'شحن سريع واقتصادي للطرود والبضائع. توصيل جوي سريع خلال 7-12 يوم أو شحن بحري اقتصادي للشحنات الكبيرة.'),
      img: '/uploads/air-freight.jpg',
      tag: t('7–12 Days', '7-12 يوم'),
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

        <div className="grid grid-cols-1 gap-5 md:hidden">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm active:shadow-md transition-all">
              <div className="relative h-[200px]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute top-3 end-3 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {s.tag}
                </div>
                <div className="absolute bottom-3 start-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  {s.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-extrabold text-primary mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t(`Hello, I'm interested in ${s.title}`, `مرحبا، أريد الاستفسار عن ${s.title}`))}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-bold text-[13px] w-full justify-center">
                  <MessageCircle size={14} /> {t('Ask via WhatsApp', 'استفسر عبر الواتساب')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block space-y-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300">
              <div className={`h-64 lg:h-auto min-h-[260px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-accent mb-5">{s.icon}</div>
                <div className="mb-3">
                  <span className="bg-accent/10 text-accent text-[11px] font-bold px-2.5 py-1 rounded-full">{s.tag}</span>
                </div>
                <h3 className="text-[1.25rem] md:text-[1.4rem] font-extrabold text-primary mb-3">{s.title}</h3>
                <p className="text-[14.5px] text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <a href={`https://wa.me/962797540300?text=${encodeURIComponent(t(`Hello, I'm interested in ${s.title}`, `مرحبا، أريد الاستفسار عن ${s.title}`))}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-accent hover:text-primary transition-colors w-fit">
                  {t('Learn More', 'اعرف المزيد')} <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
