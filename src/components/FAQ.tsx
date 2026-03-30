import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function FAQ() {
  const t = useT();
  const faqs = [
    { q: t('How long does international shipping take?', 'كم تستغرق مدة الشحن الدولي؟'), a: t('Air freight: 7\u201312 business days. Sea freight: 25\u201335 business days. Express options available.', 'الشحن الجوي: 7-12 يوم عمل. الشحن البحري: 25-35 يوم عمل. خيارات سريعة متاحة.') },
    { q: t('What are your shipping rates?', 'ما هي أسعار الشحن؟'), a: t('Rates depend on weight, dimensions, and method. Contact us for a free quote. No hidden fees.', 'الأسعار تعتمد على الوزن والأبعاد والطريقة. تواصل معنا لعرض سعر مجاني. بدون رسوم مخفية.') },
    { q: t('Do you offer door-to-door delivery?', 'هل توفرون توصيل حتى الباب؟'), a: t('Yes. Complete service from supplier pickup to delivery at your address including customs.', 'نعم. خدمة كاملة من استلام المورد حتى التوصيل لعنوانك شامل التخليص.') },
    { q: t('How can I track my shipment?', 'كيف أتتبع شحنتي؟'), a: t('Every shipment includes tracking. Contact us via WhatsApp or use our tracking bar.', 'كل شحنة تتضمن رقم تتبع. تواصل معنا عبر الواتساب أو استخدم شريط التتبع.') },
    { q: t('Do you handle customs clearance?', 'هل تتولون التخليص الجمركي؟'), a: t('Yes. We manage all documentation and procedures for smooth clearance.', 'نعم. نتولى جميع المستندات والإجراءات لتخليص سلس.') },
    { q: t('Is my shipment insured?', 'هل شحنتي مؤمنة؟'), a: t('All shipments are fully insured against loss and damage.', 'جميع الشحنات مؤمنة بالكامل ضد الفقدان والتلف.') },
    { q: t('Do you serve individuals and businesses?', 'هل تخدمون الأفراد والشركات؟'), a: t('Yes. We serve e-commerce businesses, importers, and individuals.', 'نعم. نخدم المتاجر الإلكترونية والمستوردين والأفراد.') },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('FAQ', 'أسئلة شائعة')}</span>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-primary mt-2 leading-tight">{t('Frequently Asked Questions', 'الأسئلة الأكثر شيوعاً')}</h2>
        </motion.div>
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              <div className={`rounded-xl border overflow-hidden transition-all duration-200 ${openIdx === i ? 'border-accent/20 bg-accent-50 shadow-sm' : 'border-gray-100 bg-white'}`}>
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-4 md:p-5 text-start">
                  <span className="text-[14px] font-semibold text-primary pe-4">{faq.q}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180 text-accent' : 'text-gray-300'}`} />
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="px-4 md:px-5 pb-4 md:pb-5 text-[13.5px] text-gray-500 leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
