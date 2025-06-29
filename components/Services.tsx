// components/Services.tsx
import React from 'react';

const services = [
  {
    icon: 'ri-flight-takeoff-line',
    title: "Réservation de billets d'avion",
    description:
      'Nous trouvons les meilleurs tarifs pour vos vols internationaux et domestiques avec les compagnies aériennes les plus fiables.',
  },
  {
    icon: 'ri-passport-line',
    title: 'Assistance pour visa',
    description:
      'Notre équipe vous guide à travers le processus de demande de visa pour garantir une approbation sans problème.',
  },
  {
    icon: 'ri-route-line',
    title: 'Voyages organisés',
    description:
      'Des itinéraires soigneusement planifiés avec des guides experts pour vous faire découvrir les meilleures destinations.',
  },
  {
    icon: 'ri-hotel-line',
    title: "Réservation d'hôtels",
    description:
      'Nous sélectionnons les meilleurs hébergements adaptés à votre budget et à vos préférences pour un séjour confortable.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de voyage conçus pour rendre votre expérience sans stress et mémorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-full mb-6 mx-auto">
                <i className={`${service.icon} ri-xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;