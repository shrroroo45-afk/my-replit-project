import { motion } from 'framer-motion';
import { Plane, Truck, MapPin, FileCheck, Boxes, ArrowRight } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Services() {
  const t = useT();

  const services = [
    {
      icon: <Plane size={28} />,
      title: t('Air & Sea Freight', 'شحن جوي وبحري'),
      desc: t('Fast and economical shipping for parcels and cargo. Express air delivery in 7\u201312 days or cost-effective sea freight for larger shipments.', 'شحن سريع واقتصادي للطرود والبضائع. توصيل جوي سريع خلال 7-12 يوم أو شحن بحري اقتصادي للشحنات الكبيرة.'),
      img: '/uploads/air-freight.jpg',
    },
    {
      icon: <Truck size={28} />,
      title: t('Land Freight', 'شحن بري'),
      desc: t('Reliable overland transport between cities and countries. Safe handling and on-time delivery for all cargo types.', 'نقل بري موثوق بين المدن والدول. تعامل آمن وتسليم في الوقت المحدد لجميع أنواع البضائع.'),
      img: '/uploads/land-freight.jpg',
    },
    {
      icon: <MapPin size={28} />,
      title: t('Shipment Tracking', 'تتبع الشحنات'),
      desc: t('Monitor your shipment in real-time, every step of the way. Full visibility from pickup to final delivery.', 'تابع شحنتك لحظة بلحظة. رؤية كاملة من الاستلام حتى التسليم النهائي.'),
      img: '/uploads/tracking.jpg',
    },
    {
      icon: <FileCheck size={28} />,
      title: t('Customs Clearance', 'تخليص جمركي'),
      desc: t('We handle all customs documentation and procedures. Fast processing with no delays or complications.', 'نتولى جميع إجراءات التخليص الجمركي. معالجة سريعة بدون تأخير أو تعقيدات.'),
      img: '/uploads/customs.jpg',
    },
    {
      icon: <Boxes size={28} />,
      title: t('Logistics Solutions', 'حلول لوجستية'),
      desc: t('Integrated warehousing, transport, and delivery services. Complete supply chain management for your business.', 'خدمات تخزين ونقل وتسليم متكاملة. إدارة سلسلة التوريد الكاملة لعملك.'),
      img: '/uploads/logistics.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Our Services', 'خدماتنا')}</span>
          <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
            {t('Comprehensive Shipping', 'حلول شحن ولوجستيك')}<br className="hidden sm:block" /> {t('& Logistics Solutions', 'شاملة ومتكاملة')}
          </h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">
            {t('From express air freight to integrated logistics \u2014 tailored solutions for every shipping need.', 'من الشحن الجوي السريع إلى الحلول اللوجستية \u2014 حلول مخصصة لكل احتياجاتك.')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300">
              <div className={`h-60 lg:h-auto min-h-[240px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-accent mb-5">{s.icon}</div>
                <h3 className="text-[1.25rem] md:text-[1.4rem] font-extrabold text-primary mb-3">{s.title}</h3>
                <p className="text-[14.5px] text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <a href={`https://wa.me/962776000000?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(s.title)}`}
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
