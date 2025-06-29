import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://daftwood.com'),
  title: {
    default: 'Daftwood | Professional Painting Services',
    template: '%s | Daftwood',
  },
  description: 'Professional painting services for residential and commercial properties. Quality workmanship guaranteed. Contact us for a free quote today!',
  keywords: ['painting services', 'house painting', 'commercial painting', 'interior painting', 'exterior painting', 'professional painters'],
  authors: [{ name: 'Daftwood' }],
  creator: 'Daftwood',
  publisher: 'Daftwood',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

// Define the locales you support
const locales = ['en', 'fr', 'nl'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
