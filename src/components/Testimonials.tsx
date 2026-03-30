import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function Testimonials() {
  const t = useT();
  const reviews = [
    { name: t('Ahmad Z.', 'أحمد ز.'), role: t('E-commerce Store Owner', 'صاحب متجر إلكتروني'), text: t('Avatar Express has been our shipping partner for over a year. Every shipment arrives on time and in perfect condition.', 'Avatar Express شريكنا في الشحن منذ أكثر من سنة. كل شحنة تصل في وقتها وبحالة ممتازة.') },
    { name: t('Sara H.', 'سارة ح.'), role: t('Instagram Shop Owner', 'صاحبة متجر انستغرام'), text: t('Fast, reliable, and easy to communicate with. Best shipping company from China I\'ve used.', 'سريعة وموثوقة وسهلة التواصل. أفضل شركة شحن من الصين تعاملت معها.') },
    { name: t('Mohammad K.', 'محمد خ.'), role: t('Import Business', 'مستورد'), text: t('Professional and transparent. No hidden fees, clear timelines, and they handle customs perfectly.', 'احترافية وشفافية. بدون رسوم مخفية، مواعيد واضحة، ويتعاملون مع الجمارك بشكل مثالي.') },
    { name: t('Lina M.', 'لينا م.'), role: t('TikTok Shop Owner', 'صاحبة متجر تيك توك'), text: t('The custom packaging service transformed my brand. Amazing experience!', 'خدمة التغليف المخصص غيّرت علامتي التجارية. تجربة رائعة!') },
  ];

  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx(p => (p + 1) % reviews.length), [reviews.length]);
  const prev = useCallback(() => setIdx(p => (p - 1 + reviews.length) % reviews.length), [reviews.length]);
  useEffect(() => { const timer = setInterval(next, 6000); return () => clearInterval(timer); }, [next]);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Client Testimonials', 'آراء العملاء')}</span>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-primary mt-2 leading-tight">{t('Trusted by Businesses', 'موثوق من الشركات')}<br className="hidden sm:block" /> {t('Across Jordan', 'في كل الأردن')}</h2>
        </motion.div>
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-12 min-h-[250px] flex items-center relative">
          <Quote size={48} className="absolute top-6 left-6 text-primary/5" />
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="text-center w-full">
              <div className="flex justify-center gap-0.5 mb-5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-gold text-gold" />)}</div>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed italic mb-6 max-w-xl mx-auto">"{reviews[idx].text}"</p>
              <p className="text-[14px] font-bold text-primary">{reviews[idx].name}</p>
              <p className="text-[12px] text-accent font-semibold">{reviews[idx].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-3 mt-5">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"><ChevronLeft size={15} className="text-gray-400" /></button>
          <div className="flex gap-1.5">{reviews.map((_, i) => <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-7 bg-accent' : 'w-1.5 bg-gray-200'}`} />)}</div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"><ChevronRight size={15} className="text-gray-400" /></button>
        </div>
      </div>
    </section>
  );
}
