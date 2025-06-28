import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
