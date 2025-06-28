export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              About Daftwood Painting
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                With over 15 years of experience in the painting industry, Daftwood has been transforming properties and exceeding customer expectations. What started as a small family business has grown into a trusted name in the community, known for our attention to detail and commitment to quality.
              </p>
              <p>
                Our founder, Fabrice, personally oversees every project to ensure the highest standards are met. We believe that a fresh coat of paint can do more than just change the look of a space—it can transform how you feel about your home or business.
              </p>
              <div className="bg-daft-light-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-daft-dark mb-2">Our Mission</h3>
                <p className="text-daft-dark">
                  To deliver exceptional painting services that enhance the beauty and value of our clients' properties, while maintaining the highest standards of professionalism, integrity, and customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Experienced Professionals:</strong> Our team consists of skilled painters with years of experience
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Quality Materials:</strong> We use only premium paints and materials from trusted brands
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Satisfaction Guaranteed:</strong> We're not satisfied until you are completely happy with the results
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-daft-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">
                    <strong>Free Estimates:</strong> No-obligation quotes to help you plan your project
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-daft-dark text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">15+ Years of Excellence</h3>
              <p className="text-gray-300 mb-4">
                Serving the community with pride and transforming spaces since 2008
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-daft-blue">1,000+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-daft-blue">98%</p>
                  <p className="text-sm text-gray-400">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
