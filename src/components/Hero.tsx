import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative text-white pt-32 pb-20">
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Beautifully painted building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ">
            Transformez votre propriété avec des services de peinture professionnels
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Des services de peinture professionnels, fiables et de haute qualité pour les propriétés résidentielles et commerciales de votre région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-daft-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Obtenez votre devis gratuit
            </a>
            <a 
              href="tel:+1234567890" 
              className="bg-daft-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              Appelez maintenant : 04 77 26 26 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
