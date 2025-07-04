'use client';

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
    highlight: "Économisez jusqu'à 40%",
    message: "réservation un vol"
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
    highlight: "98% de réussite",
    message: "avoir une assistance Visa"
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
    highlight: "Expériences uniques",
    message: "avoir plus d'information sur le packages premium"
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

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* <Head>
        <title>Services - Metro Travels BHJ</title>
        <meta name="description" content="Découvrez nos services premium pour vos voyages : vols, visa, packages exclusifs et plus." />
      </Head> */}

      <div className="pt-14 md:pt-24 bg-white">
        {/* En-tête */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Solutions de Voyage
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
              Services <span className="text-[#F7A900]">Premium</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services haut de gamme pour transformer chaque voyage en une expérience exceptionnelle.
            </p>
          </div>
        </section>

        {/* Section Services */}
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

              <a
                href={`https://wa.me/+919724595395?text=${encodeURIComponent(
                  `Bonjour Metro Travels BHJ, j'aimerais " ${service.message}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:from-[#FFD600] group-hover:to-[#FFD600] hover:scale-[1.02]">
                {service.button}
                <RiCustomerService2Line className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-6 max-w-2xl">
              Besoin d'un service ou d'un accompagnement personnalisé pour votre prochain voyage ?
            </p>
            <a
              href="https://wa.me/+919724595395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-[#6D1A5F] text-[#6D1A5F] font-semibold px-8 py-3 rounded-full hover:bg-[#6D1A5F] hover:text-white transition-all group"
            >
              Parler à un expert
              <RiCustomerService2Line className="ml-2 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
