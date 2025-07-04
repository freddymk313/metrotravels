import React from 'react';
import Image from 'next/image';
import { RiTeamLine, RiMedalLine, RiGlobalLine } from 'react-icons/ri';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src="/img/team.jpg"
                alt="Équipe Metro Travels BHJ"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Stats overlay */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-[#7B1F6B] text-white p-6 rounded-2xl shadow-lg w-3/4">
              <div className="flex items-center gap-4">
                <RiMedalLine className="text-4xl text-[#FFD600]" />
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Notre Histoire
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-6">
              Votre Partenaire <span className="text-[#F7A900]">Voyage</span> de Confiance
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Fondée à Lubumbashi, Metro Travels BHJ transforme les rêves de voyage en réalités depuis plus d'une décennie. 
              Notre passion pour l'exploration et notre expertise internationale nous permettent de créer des expériences uniques 
              qui vont bien au-delà des simples vacances.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-2 rounded-full mt-1">
                  <RiTeamLine className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Équipe Passionnée</h4>
                  <p className="text-gray-600">Des conseillers voyage dévoués qui partagent votre passion pour l'aventure.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-2 rounded-full mt-1">
                  <RiMedalLine className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Expertise Locale</h4>
                  <p className="text-gray-600">Une connaissance approfondie des destinations et des meilleurs partenaires.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-2 rounded-full mt-1">
                  <RiGlobalLine className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Réseau International</h4>
                  <p className="text-gray-600">Des partenariats privilégiés avec les meilleurs prestataires mondiaux.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Nos Services
              </Link>

              <Link
                href="/contact"
                className="border-2 border-[#6D1A5F] text-[#6D1A5F] px-8 py-3 rounded-full font-semibold hover:bg-[#6D1A5F] hover:text-white transition-all"
              >
                Rencontrer Notre Équipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;