import { Inter } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { Providers } from '@/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = params;
  const messages = getMessages();

  return (
    <html lang={locale} className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
