import type { Metadata, Viewport } from 'next';
import { Inter, Space_Mono } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
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
    default: 'Daftwood | Services de peinture professionnels',
    template: '%s | Daftwood',
  },
  description:
    "Services de peinture professionnels pour propriétés résidentielles et commerciales. Travail de qualité garanti. Contactez-nous pour un devis gratuit !",
  keywords: [
    'services de peinture',
    'peinture maison',
    'peinture commerciale',
    'peinture intérieure',
    'peinture extérieure',
    'peintres professionnels',
  ],
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
    <html lang="fr" className={`${inter.variable} ${mono.variable} font-sans`}>
      <body className="min-h-screen bg-dp-black text-dp-silver antialiased">
        {children}
      </body>
    </html>
  );
}
