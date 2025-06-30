import Image from 'next/image';
import React from 'react';
import { RiMapPinLine, RiStarFill } from 'react-icons/ri';

const destinations = [
  {
    title: "Dubaï",
    subtitle: "Luxe et modernité",
    price: "$1,200",
    image: "https://www.areion24.news/wp-content/uploads/2022/11/MO53-80.jpg",
    description: "Explorez la ville futuriste avec ses gratte-ciels emblématiques, ses centres commerciaux luxueux et ses plages paradisiaques.",
    rating: 4.8,
    featured: true
  },
  {
    title: "Zanzibar",
    subtitle: "Plages paradisiaques",
    price: "$800",
    image: "https://wereldreizigers.nl/wp-content/uploads/2021/08/the-rock-zanzibar-4-scaled.jpg",
    description: "Détendez-vous sur les plus belles plages de l'océan Indien, découvrez Stone Town et sa riche histoire culturelle.",
    rating: 4.7,
    featured: false
  },
  {
    title: "Turquie",
    subtitle: "Histoire et culture",
    price: "$950",
    image: "https://image.urlaubspiraten.de/640/image/upload/f_auto,q_auto/v1603291894/mediavault_images/ruz2bi5ccvsf8zpnohoj.jpg",
    description: "Immergez-vous dans l'histoire millénaire d'Istanbul, visitez la Cappadoce et ses paysages lunaires uniques.",
    rating: 4.6,
    featured: true
  },
  {
    title: "Afrique du Sud",
    subtitle: "Safari et aventure",
    price: "$1,100",
    image: "https://www.terdav.com/Content/img/mag/vignettes/grande/1549.jpg",
    description: "Vivez l'aventure ultime avec des safaris exceptionnels, visitez Cape Town et découvrez la route des vins.",
    rating: 4.9,
    featured: false
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Explorez le Monde
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
            Nos <span className="text-[#F7A900]">Destinations</span> Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des expériences de voyage uniques soigneusement sélectionnées pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#7B1F6B] text-white text-xs px-3 py-1 rounded-full">
                    À partir de {dest.price}
                  </span>
                  {dest.featured && (
                    <span className="bg-[#FFD600] text-[#6D1A5F] text-xs px-3 py-1 rounded-full font-bold">
                      POPULAIRE
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 text-[#6D1A5F] text-sm px-2 py-1 rounded-full flex items-center">
                  <RiStarFill className="text-[#FFD600] mr-1" />
                  {dest.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-[#6D1A5F] mb-2">
                  <RiMapPinLine className="mr-1" />
                  <span className="text-sm font-medium">{dest.subtitle}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dest.title}</h3>
                <p className="text-gray-600 mb-5">{dest.description}</p>
                
                <button className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-2 px-4 rounded-full hover:shadow-md transition-all flex items-center justify-center gap-2">
                  Voir les offres
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#destinations" 
            className="inline-block border-2 border-[#6D1A5F] text-[#6D1A5F] font-semibold px-8 py-3 rounded-full hover:bg-[#6D1A5F] hover:text-white transition-all"
          >
            Voir toutes nos destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;