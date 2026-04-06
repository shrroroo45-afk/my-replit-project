import { motion } from 'framer-motion';
import { Home, Calculator, ShieldCheck, BadgeCheck, MessageCircle } from 'lucide-react';
import { useT, useLang } from '../lib/i18n';

export default function DoorToDoor() {
  const t = useT();
  const lang = useLang(s => s.lang);

  const features = [
    {
      icon: <Calculator size={20} />,
      title: t('Complete Cost Before You Buy', 'التكلفة الكاملة قبل الشراء'),
      desc: t('We calculate every expense upfront — product price, shipping, customs, and last-mile delivery — so you know the exact total before committing.', 'نحسب كل مصروف مسبقاً — سعر البضاعة، الشحن، الجمارك، والتوصيل — حتى تعرف الرقم الحقيقي قبل ما تشتري.'),
    },
    {
      icon: <Home size={20} />,
      title: t('Factory Door to Your Door', 'من باب المصنع لباب بيتك'),
      desc: t('From the supplier\'s warehouse in China all the way to your address in Jordan — one quote covers the entire journey, no surprises.', 'من مستودع المورد في الصين حتى عنوانك في الأردن — عرض واحد يغطي كل الرحلة، بدون مفاجآت.'),
    },
    {
      icon: <ShieldCheck size={20} />,
      title: t('No Hidden Fees', 'بدون رسوم مخفية'),
      desc: t('Customs duties, handling charges, and local delivery — all declared upfront in a single transparent cost breakdown.', 'الجمارك، رسوم الاستلام، والتوصيل المحلي — كلها معلنة مسبقاً في تفصيل واضح وشفاف.'),
    },
    {
      icon: <BadgeCheck size={20} />,
      title: t('Decide with Confidence', 'قرر بثقة كاملة'),
      desc: t('Compare products from China knowing the actual landed cost. Make smarter buying decisions before spending a single dinar.', 'قارن المنتجات من الصين وأنت عارف التكلفة الفعلية. خذ قرارات شراء أذكى قبل ما تصرف دينار.'),
    },
  ];

  const waMsg = encodeURIComponent(
    t(
      'Hello Avatar Express, I would like a complete Door to Door cost calculation from China to Jordan.',
      'مرحبا Avatar Express، أريد حساب تكلفة door to door كاملة من الصين للأردن.'
    )
  );

  return (
    <section id="door-to-door" className="py-16 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">
            {t('Added Value Service', 'خدمة ذات قيمة مضافة')}
          </span>
          <h2 className="text-[1.75rem] md:text-[2.2rem] font-extrabold text-primary mt-2 leading-tight">
            {lang === 'ar' ? (
              <>
                توصيل من الباب للباب
                <span className="block text-[1rem] md:text-[1.1rem] font-medium text-accent/80 mt-1 tracking-wide">Door to Door</span>
              </>
            ) : (
              'Door to Door'
            )}
            <br className="hidden sm:block" />
            {t('Full Cost Calculation', 'حساب التكلفة الكاملة')}
          </h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
            {t(
              'Know the full delivered cost before you purchase anything from China — factory price, shipping, customs, and final delivery, all in one number.',
              'اعرف التكلفة الكاملة قبل ما تشتري أي شيء من الصين — سعر المصنع، الشحن، الجمارك، والتوصيل النهائي، كلها في رقم واحد.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60">
              <img
                src="/uploads/door-to-door.jpg"
                alt={t('Door to Door Delivery', 'توصيل من الباب للباب')}
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 start-5 end-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg inline-block">
                  <p className="text-[13px] font-bold text-primary">
                    {t('Example: Product costs $50 at factory', 'مثال: منتج بسعر 50$ في المصنع')}
                  </p>
                  <p className="text-[12px] text-accent font-semibold mt-0.5">
                    {t('→ We tell you the exact total to your door before you buy', '→ نعطيك التكلفة الكاملة لبابك قبل ما تشتري')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-accent flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-primary">{f.title}</h4>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={`https://wa.me/962797540300?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-accent text-white rounded-xl font-bold text-[15px] hover:bg-accent-light transition-all shadow-lg shadow-accent/20 active:scale-95"
            >
              <MessageCircle size={18} />
              {t('Calculate My Full Cost Now', 'احسب تكلفتي الكاملة الآن')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
