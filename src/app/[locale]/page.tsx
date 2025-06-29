import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="pt-16">
      <Hero />
      <Services />
      <About />
      <ContactSection />
    </main>
  );
}
