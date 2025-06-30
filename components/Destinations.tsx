// components/Destinations.tsx
import React from 'react';

const destinations = [
  {
    title: 'Dubaï',
    description:
      'Découvrez le luxe et la modernité de cette métropole du désert avec ses gratte-ciels impressionnants et ses expériences uniques.',
    image:
      'https://readdy.ai/api/search-image?query=Dubai%20skyline%20with%20Burj%20Khalifa%20and%20modern%20architecture%2C%20beautiful%20evening%20lighting%2C%20luxury%20travel%20destination%2C%20professional%20travel%20photography&width=600&height=400&seq=dubai123&orientation=landscape',
  },
  {
    title: 'Zanzibar',
    description:
      'Plages paradisiaques aux eaux turquoise, culture riche et patrimoine historique font de cette île un joyau de l\'océan Indien.',
    image:
      'https://readdy.ai/api/search-image?query=Zanzibar%20beach%20paradise%20with%20turquoise%20water%2C%20white%20sand%2C%20palm%20trees%2C%20tropical%20vacation%20destination%2C%20professional%20travel%20photography&width=600&height=400&seq=zanzibar123&orientation=landscape',
  },
  {
    title: 'Turquie',
    description:
      'Un pont entre l\'Europe et l\'Asie offrant une riche histoire, une cuisine délicieuse et des paysages à couper le souffle.',
    image:
      'https://readdy.ai/api/search-image?query=Istanbul%20Turkey%20with%20Hagia%20Sophia%20and%20Blue%20Mosque%2C%20beautiful%20cultural%20destination%20with%20historic%20architecture%2C%20professional%20travel%20photography&width=600&height=400&seq=turkey123&orientation=landscape',
  },
  {
    title: 'Afrique du Sud',
    description:
      'Des safaris inoubliables, des villes dynamiques et des paysages spectaculaires font de ce pays une destination incontournable.',
    image:
      'https://readdy.ai/api/search-image?query=South%20Africa%20landscape%20with%20Table%20Mountain%2C%20Cape%20Town%2C%20wildlife%20safari%20scenes%2C%20beautiful%20natural%20scenery%2C%20professional%20travel%20photography&width=600&height=400&seq=southafrica123&orientation=landscape',
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Destinations Populaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos destinations les plus prisées et laissez-vous inspirer pour votre prochain voyage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="destination-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{dest.title}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <a
                  href="#contact"
                  className="inline-block text-primary font-medium hover:text-gold transition-colors"
                >
                  En savoir plus <i className="ri-arrow-right-line align-middle ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
