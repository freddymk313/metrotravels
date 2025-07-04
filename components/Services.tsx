import React from 'react';
import { RiFlightTakeoffLine, RiVisaLine, RiHotelLine, RiCustomerService2Line } from "react-icons/ri";
import { FiCheck } from 'react-icons/fi';
import { FaConciergeBell } from 'react-icons/fa';

const services = [
  {
    icon: <RiFlightTakeoffLine className="text-4xl" />,
    title: "Réservation de Vols",
    description: "Accès exclusif aux meilleures compagnies aériennes avec des tarifs négociés spécialement pour vous.",
    features: [
      "Tarifs préférentiels jusqu'à -40%",
      "Assistance VIP 24h/24",
      "Modification flexible sans frais",
      "Choix de sièges premium"
    ],
    button: "Réserver un Vol",
    highlight: "Économisez jusqu'à 40%"
  },
  {
    icon: <RiVisaLine className="text-4xl" />,
    title: "Assistance Visa",
    description: "Service complet de gestion de visa avec un taux de réussite exceptionnel de 98%.",
    features: [
      "Experts visa dédiés",
      "Dossier clé en main",
      "Suivi en temps réel",
      "Accompagnement physique"
    ],
    button: "Obtenir un Visa",
    highlight: "98% de réussite"
  },
  {
    icon: <RiHotelLine className="text-4xl" />,
    title: "Packages Premium",
    description: "Expériences de voyage tout compris conçues par nos experts pour des souvenirs inoubliables.",
    features: [
      "Circuits exclusifs",
      "Hébergements 5* sélectionnés",
      "Services VIP inclus",
      "Guide privé disponible"
    ],
    button: "Découvrir nos Offres",
    highlight: "Expériences uniques"
  },
  // {
  //   icon: <FaConciergeBell className="text-4xl" />,
  //   title: "Conciergerie",
  //   description: "Service sur mesure pour répondre à toutes vos demandes spéciales pendant votre voyage.",
  //   features: [
  //     "Réservations restaurants",
  //     "Billets événements",
  //     "Transport privé",
  //     "Demandes spéciales"
  //   ],
  //   button: "Découvrir le service",
  //   highlight: "Service 5 étoiles"
  // }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#FFD600]/10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4 *animate-bounce">
            Excellence Voyage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
            Nos <span className="text-[#F7A900]">Services Exclusifs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions voyage haut de gamme conçues pour transformer chaque déplacement en expérience mémorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#FFD600]/50 relative overflow-hidden"
            >
              {/* Barre colorée en haut */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD600] to-[#F7A900]"></div>

              {/* Badge highlight */}
              <div className="absolute top-4 right-4 bg-[#7B1F6B] text-white text-xs px-3 py-1 rounded-full font-bold">
                {service.highlight}
              </div>

              {/* Icône animée */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#7B1F6B]/10 text-[#6D1A5F] group-hover:bg-[#FFD600]/20 group-hover:text-[#7B1F6B] transition-all duration-300 group-hover:rotate-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#6D1A5F] mb-3 group-hover:text-[#7B1F6B] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-5 h-5 bg-[#FFD600]/20 rounded-full flex-shrink-0">
                      <FiCheck className="text-[#FFD600] text-xs" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:from-[#FFD600] group-hover:to-[#FFD600] hover:scale-[1.02]">
                {service.button}
                <RiCustomerService2Line className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-6 max-w-2xl">
              Besoin d'un service sur mesure ou d'un accompagnement personnalisé pour votre prochain voyage ?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center border-2 border-[#6D1A5F] text-[#6D1A5F] font-semibold px-8 py-3 rounded-full hover:bg-[#6D1A5F] hover:text-white transition-all group"
            >
              Parler à un expert
              <RiCustomerService2Line className="ml-2 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;