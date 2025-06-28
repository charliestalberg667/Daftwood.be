import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Locale = 'en' | 'nl' | 'fr';
const locales: Locale[] = ['en', 'nl', 'fr'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale: locale as Locale,
    now: new Date(),
    timeZone: 'Europe/Brussels',
  };
});
