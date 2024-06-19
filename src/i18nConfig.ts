const i18nConfig = {
  locales: ['en-US', 'pl-PL', 'es-ES'],
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
  spanish: {
    language: 'Spanish',
    tag: 'es-ES',
  },
  french: {
    language: 'French',
    tag: 'fr-FR',
  },
};

export { i18nConfig, locale };
