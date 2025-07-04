'use client';

import Head from 'next/head';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* <Head>
        <title>À propos - Metro Travels BHJ</title>
        <meta name="description" content="En savoir plus sur Metro Travels BHJ, votre agence de voyage de confiance." />
      </Head> */}

      <div className="pt-14 md:pt-24 bg-white">
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
                À Propos de Nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
                L'excellence au service de <span className="text-[#F7A900]">vos voyages</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Metro Travels BHJ est votre partenaire de confiance pour transformer vos rêves d’évasion en réalité.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="/img/team.jpg"
                  alt="Équipe Metro Travels"
                  className="rounded-2xl shadow-xl border border-gray-200"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#6D1A5F]">
                  Notre mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Depuis notre création, notre mission est de proposer des expériences de voyage uniques,
                  sûres et mémorables à nos clients, qu'ils voyagent en solo, en couple, en famille ou en groupe.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Nous travaillons avec des partenaires internationaux pour garantir les meilleurs prix,
                  un service client exceptionnel et une assistance complète avant, pendant et après votre voyage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-[#6D1A5F] mb-2">Expertise Locale & Internationale</h3>
                    <p className="text-gray-600 text-sm">Nous vous accompagnons dans vos projets en Afrique et à l’étranger.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold text-[#6D1A5F] mb-2">Service Personnalisé</h3>
                    <p className="text-gray-600 text-sm">Chaque itinéraire est conçu sur-mesure selon vos envies et votre budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Chiffres / Confiance */}
        <section className="py-20 bg-[#FFF5E5]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6D1A5F] mb-12">
              Pourquoi choisir <span className="text-[#F7A900]">Metro Travels BHJ</span> ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="text-4xl font-bold text-[#F7A900]">+10</h3>
                <p className="text-gray-600 mt-2 text-sm">Années d'expérience</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="text-4xl font-bold text-[#F7A900]">+2,000</h3>
                <p className="text-gray-600 mt-2 text-sm">Voyageurs satisfaits</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="text-4xl font-bold text-[#F7A900]">24/7</h3>
                <p className="text-gray-600 mt-2 text-sm">Support client</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="text-4xl font-bold text-[#F7A900]">+25</h3>
                <p className="text-gray-600 mt-2 text-sm">Destinations couvertes</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
