import createMiddleware from 'next-intl/middleware';
 
const locales = ['en', 'nl', 'fr'] as const;
 
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl|fr)/:path*']
};
