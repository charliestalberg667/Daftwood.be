import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported languages for the app
  locales: ['en', 'fr', 'nl'],
  
  // Default language if no match is found
  defaultLocale: 'en',
  
  // Optional: Disable automatic locale detection and always redirect to the default locale
  // localeDetection: false,
});

export const config = {
  // Match all paths except:
  // - api routes
  // - static files (e.g., /_next/static, /favicon.ico, etc.)
  // - public folder
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\..*).*)'],
};
