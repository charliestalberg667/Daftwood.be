"use client";

import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-dp-black shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Daftwood
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-daft-blue px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-daft-blue px-3 py-2 rounded-md text-sm font-medium">À propos</a>
            <a
              href="#contact"
              className="bg-dp-gold text-dp-black hover:bg-dp-neon-pink px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
