import { Metadata } from 'next';
import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Daftwood | Professional Painting Services',
  description: 'Professional painting services for residential and commercial properties. Quality workmanship guaranteed. Contact us for a free quote today!',
  keywords: 'painting services, house painting, commercial painting, interior painting, exterior painting, professional painters',
  openGraph: {
    title: 'Daftwood | Professional Painting Services',
    description: 'Transform your property with our expert painting services. Quality workmanship guaranteed.',
    url: 'https://daftwood.com',
    siteName: 'Daftwood',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daftwood Painting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daftwood | Professional Painting Services',
    description: 'Transform your property with our expert painting services. Quality workmanship guaranteed.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://daftwood.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Daftwood',
    image: 'https://daftwood.com/logo.jpg',
    '@id': 'https://daftwood.com',
    url: 'https://daftwood.com',
    telephone: '+1234567890',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Painters Lane',
      addressLocality: 'Cityville',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/daftwood',
      'https://www.instagram.com/daftwood',
      'https://www.twitter.com/daftwood'
    ]
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://daftwood.com" key="canonical" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
