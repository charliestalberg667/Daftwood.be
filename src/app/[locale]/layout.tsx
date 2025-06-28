import { Inter } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { Providers } from '@/providers';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();

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
