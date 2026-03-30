import { create } from 'zustand';

export type Lang = 'en' | 'ar';

interface LangState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  dir: () => 'ltr' | 'rtl';
}

export const useLang = create<LangState>((set, get) => ({
  lang: 'ar',
  setLang: (lang) => {
    set({ lang });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  },
  toggle: () => {
    const next = get().lang === 'en' ? 'ar' : 'en';
    get().setLang(next);
  },
  dir: () => get().lang === 'ar' ? 'rtl' : 'ltr',
}));

export function t(en: string, ar: string): string {
  return useLang.getState().lang === 'ar' ? ar : en;
}

// Hook version for reactive updates
export function useT() {
  const lang = useLang(s => s.lang);
  return (en: string, ar: string) => lang === 'ar' ? ar : en;
}
