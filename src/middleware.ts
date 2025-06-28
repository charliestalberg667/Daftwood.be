import createMiddleware from 'next-intl/middleware';
 
const locales = ['en', 'nl', 'fr'] as const;
 
export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\..*).*)',
    '/',
    '/en/:path*',
    '/nl/:path*',
    '/fr/:path*'
  ]
};
