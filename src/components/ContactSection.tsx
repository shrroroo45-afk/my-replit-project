import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function ContactSection() {
  const t = useT();
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const msg = encodeURIComponent(t(
      `Hello Avatar Express!\nName: ${form.name}\nPhone: ${form.phone}\nType: ${form.type}\nMessage: ${form.message}`,
      `مرحبا Avatar Express!\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nنوع الشحنة: ${form.type}\nالرسالة: ${form.message}`
    ));
    setTimeout(() => {
      window.open(`https://wa.me/962797540300?text=${msg}`, '_blank');
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 500);
  };

  const inp = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all';

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em]">{t('Contact Us', 'تواصل معنا')}</span>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-extrabold text-primary mt-2 leading-tight">{t('Get in Touch', 'تواصل معنا')}</h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">{t('Have a question or need a quote? We respond within 1 hour.', 'عندك سؤال أو تحتاج عرض سعر؟ نرد خلال ساعة.')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-3">
            {[
              { icon: <Phone size={17} />, label: t('Phone 1', 'هاتف 1'), value: '+962 79 754 0300', href: 'tel:+962797540300', color: 'bg-primary-50 text-accent' },
              { icon: <Phone size={17} />, label: t('Phone 2', 'هاتف 2'), value: '+962 79 144 0828', href: 'tel:+962791440828', color: 'bg-primary-50 text-accent' },
              { icon: <MessageCircle size={17} />, label: t('WhatsApp', 'واتساب'), value: t('Message Us', 'راسلنا'), href: 'https://wa.me/962797540300', ext: true, color: 'bg-green-50 text-wa' },
              { icon: <Mail size={17} />, label: t('Email', 'البريد'), value: 'info@avatarexpress.jo', href: 'mailto:info@avatarexpress.jo', color: 'bg-primary-50 text-accent' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.ext ? '_blank' : undefined} rel={c.ext ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-white p-4 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 transition-all group">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.color}`}>{c.icon}</div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">{c.label}</p>
                  <p className="text-[13.5px] font-bold text-primary group-hover:text-accent transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-white p-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-accent flex-shrink-0"><MapPin size={17} /></div>
              <div><p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">{t('Location', 'الموقع')}</p><p className="text-[13.5px] font-bold text-primary">{t('Amman, Jordan', 'عمان، الأردن')}</p></div>
            </div>
            <div className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-white p-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-accent flex-shrink-0"><Clock size={17} /></div>
              <div><p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">{t('Hours', 'الساعات')}</p><p className="text-[13.5px] font-bold text-primary">{t('Sun \u2013 Thu, 9 AM \u2013 6 PM', 'الأحد - الخميس, 9 ص - 6 م')}</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-primary mb-1">{t('Request a Quote', 'اطلب عرض سعر')}</h3>
              <p className="text-[13px] text-gray-400 mb-6">{t('Fill in your details and we\'ll get back to you fast.', 'املأ بياناتك وسنرد عليك بسرعة.')}</p>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-14">
                  <CheckCircle2 size={48} className="text-wa mx-auto mb-3" />
                  <h4 className="text-[16px] font-bold text-primary mb-1">{t('Request Sent!', 'تم الإرسال!')}</h4>
                  <p className="text-[13px] text-gray-400">{t('We\'ll respond shortly via WhatsApp.', 'سنرد عليك قريباً عبر الواتساب.')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder={t('Full Name', 'الاسم الكامل')} className={inp} />
                    <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder={t('Phone Number', 'رقم الهاتف')} className={inp} />
                  </div>
                  <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})} className={`${inp} appearance-none cursor-pointer`}>
                    <option value="">{t('Select Shipment Type', 'اختر نوع الشحنة')}</option>
                    <option value="Air Freight">{t('Air Freight', 'شحن جوي')}</option>
                    <option value="Sea Freight">{t('Sea Freight', 'شحن بحري')}</option>
                    <option value="Land Freight">{t('Land Freight', 'شحن بري')}</option>
                    <option value="Door to Door">{t('Door to Door', 'توصيل حتى الباب')}</option>
                    <option value="Customs">{t('Customs Clearance', 'تخليص جمركي')}</option>
                    <option value="Other">{t('Other / Not Sure', 'أخرى / غير متأكد')}</option>
                  </select>
                  <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder={t('Tell us about your shipment (optional)', 'أخبرنا عن شحنتك (اختياري)')} className={`${inp} resize-none`} />
                  <button type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-bold text-[14px] hover:bg-primary-dark transition-colors disabled:opacity-60 shadow-md shadow-primary/10">
                    {sending ? <><Loader2 size={16} className="animate-spin" /> {t('Sending...', 'جاري الإرسال...')}</> : <><Send size={16} /> {t('Submit Request', 'إرسال الطلب')}</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
