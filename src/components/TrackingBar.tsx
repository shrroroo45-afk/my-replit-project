import { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { useT } from '../lib/i18n';

export default function TrackingBar() {
  const [trackId, setTrackId] = useState('');
  const t = useT();

  const handleTrack = () => {
    if (trackId.trim()) {
      window.open(`https://wa.me/962797540300?text=Hello%2C%20I%20want%20to%20track%20shipment%3A%20${trackId}`, '_blank');
    }
  };

  return (
    <section className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center gap-2 text-primary font-bold text-[14px] whitespace-nowrap">
            <Package size={18} className="text-accent" />
            {t('Track Your Shipment', 'تتبع شحنتك')}
          </div>
          <div className="flex flex-1 max-w-md gap-2">
            <input type="text" value={trackId} onChange={e => setTrackId(e.target.value)}
              placeholder={t('Enter tracking number', 'أدخل رقم التتبع')}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
              onKeyDown={e => e.key === 'Enter' && handleTrack()} />
            <button onClick={handleTrack}
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-bold text-[13px] hover:bg-primary-dark transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Search size={14} /> {t('Track', 'تتبع')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
