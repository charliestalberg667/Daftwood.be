export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              À propos de Daftwood Painting
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Avec plus de 15 ans d'expérience dans l'industrie de la peinture, Daftwood transforme les propriétés et dépasse les attentes des clients. Ce qui a commencé comme une petite entreprise familiale est devenu un nom de confiance dans la communauté, reconnu pour notre attention aux détails et notre engagement envers la qualité.
              </p>
              <p>
                Notre fondateur, Fabrice, supervise personnellement chaque projet pour garantir les normes les plus élevées. Nous croyons qu'une nouvelle couche de peinture peut faire plus que changer l'apparence d'un espace : elle peut transformer la façon dont vous ressentez votre maison ou votre entreprise.
              </p>
              <div className="bg-daft-light-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-daft-dark mb-2">Notre mission</h3>
                <p className="text-daft-dark">
                  Fournir des services de peinture exceptionnels qui améliorent la beauté et la valeur des propriétés de nos clients, tout en maintenant les normes les plus élevées de professionnalisme, d'intégrité et de service client.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pourquoi nous choisir</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Professionnels expérimentés :</strong> Notre équipe est composée de peintres qualifiés avec des années d'expérience
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Matériaux de qualité :</strong> Nous utilisons uniquement des peintures et des matériaux de qualité supérieure provenant de marques de confiance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Satisfaction garantie :</strong> Nous ne sommes pas satisfaits tant que vous n'êtes pas entièrement satisfait du résultat
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Devis gratuits :</strong> Des devis sans engagement pour vous aider à planifier votre projet
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-daft-dark text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Plus de 15 ans d'excellence</h3>
              <p className="text-gray-300 mb-4">
                Au service de la communauté avec fierté et transformation des espaces depuis 2008
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-daft-blue">1,000+</p>
                  <p className="text-sm text-gray-400">Projets achevés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-daft-blue">98%</p>
                  <p className="text-sm text-gray-400">Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
