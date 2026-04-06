import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'شحن جوي وبحري',
    titleEn: 'Air & Sea Freight',
    desc: 'شحن سريع واقتصادي للطرود والبضائع من الصين إلى الأردن. نوفر خيارات الشحن الجوي السريع (7-12 يوم) والبحري الاقتصادي (25-35 يوم) لتناسب احتياجاتك وميزانيتك.',
    features: ['شحن جوي سريع خلال 7-12 يوم', 'شحن بحري اقتصادي', 'تأمين كامل على الشحنات', 'تتبع مباشر لحظة بلحظة'],
    img: '/uploads/svc-air.jpg',
  },
  {
    title: 'شحن بري',
    titleEn: 'Land Freight',
    desc: 'نقل بري موثوق بين المدن والدول مع أسطول حديث ومتابعة مستمرة. حلول مرنة للشحنات الكبيرة والصغيرة مع ضمان السلامة والوصول في الوقت المحدد.',
    features: ['نقل آمن وموثوق', 'أسطول حديث ومتنوع', 'تغطية واسعة', 'أسعار تنافسية'],
    img: '/uploads/svc-land.jpg',
  },
  {
    title: 'تتبع الشحنات',
    titleEn: 'Shipment Tracking',
    desc: 'متابعة شحنتك لحظة بلحظة من الاستلام حتى التسليم. نظام تتبع متقدم يبقيك على اطلاع دائم بحالة شحنتك مع إشعارات فورية عند كل مرحلة.',
    features: ['تتبع مباشر 24/7', 'إشعارات فورية', 'تحديثات عبر واتساب', 'شفافية كاملة'],
    img: '/uploads/svc-sea.jpg',
  },
  {
    title: 'تخليص جمركي',
    titleEn: 'Customs Clearance',
    desc: 'نتولى جميع إجراءات التخليص الجمركي بسرعة واحترافية. فريقنا المتخصص يضمن تسهيل الإجراءات دون تأخير مع الالتزام الكامل بالأنظمة والقوانين.',
    features: ['إنجاز سريع للمعاملات', 'فريق متخصص', 'التزام بالأنظمة', 'بدون رسوم مخفية'],
    img: '/uploads/svc-customs.jpg',
  },
  {
    title: 'حلول لوجستية متكاملة',
    titleEn: 'Logistics Solutions',
    desc: 'خدمات تخزين ونقل وتسليم متكاملة تغطي سلسلة التوريد بالكامل. من المستودع إلى باب العميل — نقدم حلولاً مخصصة تناسب حجم عملك.',
    features: ['تخزين آمن', 'إدارة المخزون', 'توزيع وتسليم', 'حلول مخصصة'],
    img: '/uploads/svc-logistics.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary text-[13px] font-bold uppercase tracking-[0.15em] mb-2">Our Services — خدماتنا</p>
          <h2 className="text-[1.65rem] md:text-[2rem] font-extrabold text-navy leading-tight">خدمات شحن وحلول لوجستية شاملة</h2>
          <p className="text-gray-400 text-[14.5px] mt-3 max-w-lg mx-auto">Comprehensive shipping and logistics solutions tailored to your business needs</p>
        </motion.div>

        <div className="space-y-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-100/80 hover:border-primary/10 transition-all duration-300`}>
              <div className={`lg:col-span-2 h-52 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className={`lg:col-span-3 p-7 md:p-9 flex flex-col justify-center bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1">{s.titleEn}</p>
                <h3 className="text-[1.2rem] md:text-[1.35rem] font-extrabold text-navy mb-3">{s.title}</h3>
                <p className="text-[14px] text-gray-500 leading-[1.7] mb-5">{s.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-[13px] text-gray-600 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <a href={`https://wa.me/962797540300?text=مرحبا، أريد الاستفسار عن خدمة: ${s.title}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors w-fit">
                  اطلب عرض سعر <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
