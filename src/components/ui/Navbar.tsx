"use client";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Daftwood
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-daft-blue px-3 py-2 rounded-md text-sm font-medium">{t('services')}</a>
            <a href="#about" className="text-gray-700 hover:text-daft-blue px-3 py-2 rounded-md text-sm font-medium">{t('about')}</a>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('nl')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  locale === 'nl'
                    ? 'bg-daft-blue text-white shadow'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                NL
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  locale === 'fr'
                    ? 'bg-daft-blue text-white shadow'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                FR
              </button>
            </div>

            <a 
              href="#contact" 
              className="bg-daft-dark text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
