'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero.png"
          alt="Voyage autour du monde"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B1F6B]/90 via-[#7B1F6B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-10 sm:py-28">
        <div className="max-w-xl sm:max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
          <span className="inline-block bg-[#FFD600] text-[#6D1A5F] px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-bounce">
            ✈️ Agence de voyage
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Explorez le monde avec <span className="text-[#FFD600]">Metro Travels BHJ</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-100 opacity-90">
            Votre partenaire de confiance pour des voyages inoubliables depuis Lubumbashi. 
            Nous créons des expériences sur mesure alliant confort, sécurité et authenticité.
          </p>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href={`https://wa.me/+919724595395?text=${encodeURIComponent(
                `Bonjour Metro Travels BHJ, j'aimerais en savoir plus sur vos services".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line ri-lg" />
              Contact WhatsApp
            </a>

            <a
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="ri-compass-3-line ri-lg" />
              Nos Services
            </a>
          </div>

          {/* Statistiques */}
          <div className="mt-14 sm:mt-16 flex flex-wrap justify-center sm:justify-start gap-8">
            {[
              { value: "10+", label: "Ans d'expérience" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "50+", label: "Destinations" }
            ].map((item, index) => (
              <div key={index} className="text-white text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#FFD600]">{item.value}</p>
                <p className="text-sm sm:text-lg opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flèche en bas */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <i className="ri-arrow-down-line ri-2x text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
