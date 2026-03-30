import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const msg = `مرحبا Avatar Express!%0Aالاسم: ${form.name}%0Aالهاتف: ${form.phone}%0Aنوع الشحنة: ${form.type}%0Aالرسالة: ${form.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/962776000000?text=${msg}`, '_blank');
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 500);
  };

  const inp = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-dark placeholder-gray-400 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all';

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-accent text-[13px] font-bold">تواصل معنا</span>
          <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-dark mt-2">نحن هنا لمساعدتك</h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-md mx-auto">تواصل معنا الآن واحصل على عرض سعر مجاني خلال ساعة</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-3">
            {[
              { icon: <Phone size={17} />, label: 'اتصل بنا', value: '+962 77 600 0000', href: 'tel:+962776000000' },
              { icon: <MessageCircle size={17} />, label: 'واتساب', value: 'راسلنا مباشرة', href: 'https://wa.me/962776000000', ext: true, green: true },
              { icon: <Mail size={17} />, label: 'البريد الإلكتروني', value: 'info@avatarexpress.jo', href: 'mailto:info@avatarexpress.jo' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.ext ? '_blank' : undefined} rel={c.ext ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:border-primary/15 transition-all group">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.green ? 'bg-green-50 text-wa' : 'bg-primary-50 text-primary'}`}>{c.icon}</div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">{c.label}</p>
                  <p className="text-[13.5px] font-bold text-dark group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary flex-shrink-0"><MapPin size={17} /></div>
              <div><p className="text-[11px] text-gray-400 font-medium">الموقع</p><p className="text-[13.5px] font-bold text-dark">عمّان، الأردن</p></div>
            </div>
            <div className="flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary flex-shrink-0"><Clock size={17} /></div>
              <div><p className="text-[11px] text-gray-400 font-medium">ساعات العمل</p><p className="text-[13.5px] font-bold text-dark">الأحد - الخميس: 9 ص - 6 م</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-[17px] font-bold text-dark mb-1">اطلب عرض سعر</h3>
              <p className="text-[13px] text-gray-400 mb-6">سنرد عليك خلال ساعة عبر الواتساب</p>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle2 size={48} className="text-wa mx-auto mb-3" />
                  <h4 className="text-[16px] font-bold text-dark mb-1">تم الإرسال!</h4>
                  <p className="text-[13px] text-gray-400">سنتواصل معك قريباً عبر الواتساب</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="الاسم الكامل" className={inp} />
                    <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="رقم الهاتف" className={inp} />
                  </div>
                  <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})} className={`${inp} appearance-none cursor-pointer`}>
                    <option value="">نوع الشحنة</option>
                    <option value="شحن جوي">شحن جوي</option>
                    <option value="شحن بحري">شحن بحري</option>
                    <option value="توصيل حتى الباب">توصيل حتى الباب</option>
                    <option value="تغليف وتعبئة">تغليف وتعبئة</option>
                    <option value="تخليص جمركي">تخليص جمركي</option>
                    <option value="غير متأكد">غير متأكد — أحتاج استشارة</option>
                  </select>
                  <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="أخبرنا عن شحنتك (اختياري)" className={`${inp} resize-none`} />
                  <button type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-bold text-[14px] hover:bg-primary-light transition-colors disabled:opacity-60 shadow-md shadow-primary/10">
                    {sending ? <><Loader2 size={16} className="animate-spin" /> جاري الإرسال...</> : <><Send size={16} /> إرسال عبر الواتساب</>}
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
