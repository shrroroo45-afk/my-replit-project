import { motion } from 'framer-motion';
import { Plane, ScanSearch, FileCheck, Boxes, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLang, useT } from '../lib/i18n';

export default function ServicesDetail() {
  const { lang } = useLang();
  const t = useT();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const services = [
    { icon: <Plane size={28} />, title: t('Air & Sea Freight', 'شحن جوي وبحري'), desc: t('Fast and economical shipping for parcels and cargo. Choose express air or economy sea based on your timeline and budget.', 'شحن سريع واقتصادي للطرود والبضائع. اختر الشحن الجوي السريع أو البحري الاقتصادي حسب جدولك وميزانيتك.'), features: [t('Express air: 7-12 days', 'جوي سريع: 7-12 يوم'), t('Economy sea: 25-35 days', 'بحري اقتصادي: 25-35 يوم'), t('Full insurance', 'تأمين شامل'), t('Real-time tracking', 'تتبع مباشر')], img: '/uploads/service-air.jpg' },
    { icon: <ScanSearch size={28} />, title: t('Shipment Tracking', 'تتبع الشحنات'), desc: t('Monitor your shipment in real-time from pickup to delivery. Get instant updates at every checkpoint.', 'تابع شحنتك لحظة بلحظة من الاستلام حتى التسليم. احصل على تحديثات فورية عند كل نقطة.'), features: [t('Real-time GPS', 'تتبع GPS مباشر'), t('SMS & email alerts', 'إشعارات SMS وإيميل'), t('Online portal', 'بوابة تتبع إلكترونية'), t('Delivery confirmation', 'تأكيد التسليم')], img: '/uploads/service-sea.jpg' },
    { icon: <FileCheck size={28} />, title: t('Customs Clearance', 'تخليص جمركي'), desc: t('We handle all customs documentation and regulatory procedures for fast, smooth clearance.', 'نتولى جميع المستندات والإجراءات الجمركية لضمان تخليص سريع وسلس بدون تأخير.'), features: [t('Documentation', 'إعداد المستندات'), t('Duty calculation', 'حساب الرسوم والضرائب'), t('Compliance', 'الامتثال التنظيمي'), t('Express processing', 'معالجة سريعة')], img: '/uploads/warehouse.jpg' },
    { icon: <Boxes size={28} />, title: t('Logistics Solutions', 'حلول لوجستية متكاملة'), desc: t('Warehousing, distribution, and last-mile delivery tailored to your supply chain needs.', 'خدمات تخزين وتوزيع وتوصيل الميل الأخير مصممة خصيصاً لسلسلة التوريد الخاصة بك.'), features: [t('Warehouse storage', 'تخزين في المستودعات'), t('Inventory management', 'إدارة المخزون'), t('Distribution network', 'شبكة توزيع'), t('Last-mile delivery', 'توصيل الميل الأخير')], img: '/uploads/logistics-worker.jpg' },
  ];
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-accent text-[12px] font-bold uppercase tracking-[0.15em] mb-2">{t('Our Services', 'خدماتنا')}</p>
          <h2 className="text-[1.65rem] md:text-[2rem] font-extrabold text-navy leading-tight">{t('Comprehensive Shipping & Logistics Solutions', 'حلول شحن ولوجستيات شاملة')}</h2>
          <p className="text-gray-500 text-[14px] mt-3 max-w-lg mx-auto">{t('End-to-end logistics services designed for businesses and individuals.', 'خدمات لوجستية متكاملة من البداية للنهاية مصممة للأعمال والأفراد.')}</p>
        </motion.div>
        <div className="space-y-5">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300">
              <div className={`lg:col-span-2 h-52 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className={`lg:col-span-3 p-7 md:p-9 flex flex-col justify-center bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary">{s.icon}</div>
                  <h3 className="text-[1.1rem] md:text-[1.25rem] font-extrabold text-navy">{s.title}</h3>
                </div>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[12px] text-gray-600 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <a href={`https://wa.me/962797540300?text=${encodeURIComponent(s.title)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary hover:text-accent transition-colors w-fit">
                  {t('Request a Quote', 'اطلب عرض سعر')} <Arrow size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
