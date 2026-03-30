import { motion } from 'framer-motion';
import { Package, Tag, ShoppingBag, Star, MessageCircle } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function CustomPackaging() {
  const t = useT();

  const features = [
    {
      icon: <Package size={20} />,
      title: t('Professional Packaging', 'تغليف احترافي'),
      desc: t('Premium repackaging that reflects your brand quality and leaves a lasting impression on your customers.', 'إعادة تغليف بجودة عالية تعكس احترافية علامتك وتترك انطباعاً قوياً لدى عملائك.'),
    },
    {
      icon: <Tag size={20} />,
      title: t('Private Label Support', 'دعم العلامة التجارية الخاصة'),
      desc: t('Add your brand name, logo, and custom labels to any product imported from China — your brand, your identity.', 'أضف اسم وشعار علامتك التجارية لأي منتج تستورده من الصين — علامتك، هويتك.'),
    },
    {
      icon: <ShoppingBag size={20} />,
      title: t('Ready to Sell', 'جاهز للبيع فوراً'),
      desc: t('Products arrive shelf-ready and sale-ready — no extra steps needed before listing or delivering to customers.', 'تصلك المنتجات جاهزة للعرض والبيع فوراً، بدون أي خطوات إضافية قبل التسليم.'),
    },
    {
      icon: <Star size={20} />,
      title: t('High Quality', 'جودة عالية'),
      desc: t('Every repackaged product goes through quality checks to ensure it meets your standards before shipping.', 'كل منتج يمر بفحص الجودة قبل الشحن لضمان مطابقته لمعاييرك.'),
    },
  ];

  const waMsg = encodeURIComponent(
    t(
      'Hello Avatar Express, I would like to know more about your Custom Packaging & Private Label service.',
      'مرحبا Avatar Express، أريد الاستفسار عن خدمة التغليف المخصص والعلامة التجارية الخاصة.'
    )
  );

  return (
    <section id="custom-packaging" className="py-16 md:py-28 bg-white">
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
            {t('Custom Packaging', 'التغليف والتخصيص')}<br className="hidden sm:block" />
            {t('& Branding', 'حسب الطلب')}
          </h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
            {t(
              'Import products from China and sell them under your own brand. We repackage and label your goods professionally before they reach your door.',
              'استورد منتجاتك من الصين وبِعها تحت علامتك التجارية. نعيد تغليف بضاعتك وتخصيصها باحترافية قبل أن تصلك.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60">
              <img
                src="/uploads/packaging.jpg"
                alt={t('Custom Packaging & Branding', 'التغليف والتخصيص')}
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 start-5 end-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg inline-block">
                  <p className="text-[13px] font-bold text-primary">
                    {t('Example: 20 perfume boxes imported from China', 'مثال: 20 علبة عطر مستوردة من الصين')}
                  </p>
                  <p className="text-[12px] text-accent font-semibold mt-0.5">
                    {t('→ Repackaged with your brand & logo, ready to sell', '→ معاد تغليفها بشعارك وعلامتك، جاهزة للبيع')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-100"
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
              {t('Contact Us to Customize Your Order', 'تواصل معنا لتخصيص طلبك')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
