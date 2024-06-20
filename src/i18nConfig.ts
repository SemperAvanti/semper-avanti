const i18nConfig = {
  locales: ['en-US', 'pl-PL'],
  defaultLocale: 'en-US',
};

interface Locale {
  language: string;
  tag: string;
}

const locale: Record<string, Locale> = {
  english: {
    language: 'English',
    tag: 'en-US',
  },
  polish: {
    language: 'Polish',
    tag: 'pl-PL',
  },
};

export { i18nConfig, locale };
