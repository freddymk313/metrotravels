'use client';

import React from 'react';
import { RiFlightTakeoffLine, RiVisaLine, RiHotelLine } from "react-icons/ri";
import { FiCheck } from 'react-icons/fi';
import Head from 'next/head';

const services = [
  {
    icon: <RiFlightTakeoffLine className="text-4xl" />,
    title: "Réservation de Vols",
    description: "Accès exclusif aux meilleures compagnies aériennes avec des tarifs négociés spécialement pour vous.",
    features: [
      "Tarifs préférentiels jusqu'à -30%",
      "Assistance 24h/24, 7j/7",
      "Modification flexible sans frais",
    ],
    button: "Réserver un Vol",
  },
  {
    icon: <RiVisaLine className="text-4xl" />,
    title: "Assistance Visa",
    description: "Service complet de gestion de visa avec un taux de réussite de 98% pour toutes destinations.",
    features: [
      "Conseil par des experts visa",
      "Préparation de dossier clé en main",
      "Suivi en temps réel",
    ],
    button: "Demander un Visa",
  },
  {
    icon: <RiHotelLine className="text-4xl" />,
    title: "Packages Premium",
    description: "Expériences de voyage tout compris conçues sur mesure pour des souvenirs inoubliables.",
    features: [
      "Circuits exclusifs",
      "Hébergements sélectionnés",
      "Services VIP inclus",
    ],
    button: "Découvrir nos Offres",
  },
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
        <section className="pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFD600]/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD600] to-[#F7A900]" />

                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#7B1F6B]/10 text-[#6D1A5F] group-hover:bg-[#FFD600]/20 group-hover:text-[#7B1F6B] transition-all">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#6D1A5F] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheck className="text-[#FFD600] mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-3 px-6 rounded-full hover:shadow-md transition-all flex items-center justify-center gap-2 group-hover:from-[#FFD600] group-hover:to-[#FFD600]">
                    {service.button}
                    <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="text-gray-600 mb-6 text-lg">Vous avez un projet de voyage spécifique ?</p>
              <a 
                href={`https://wa.me/243910307234?text=${encodeURIComponent(
                  "Bonjour Metro Travels BHJ, j'aimerais en savoir plus sur vos services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#6D1A5F] text-[#6D1A5F] font-semibold px-8 py-3 rounded-full hover:bg-[#6D1A5F] hover:text-white transition-all"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
