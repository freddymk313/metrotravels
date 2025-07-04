'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiMapPinLine, RiStarFill, RiSearchLine, RiFilterLine, RiArrowRightLine } from 'react-icons/ri';

const destinations = [
  {
    title: 'Dubaï',
    subtitle: 'Luxe et modernité',
    price: '$1,200',
    image: '/img/dubai.jpg',
    description: "Explorez la ville futuriste avec ses gratte-ciels emblématiques, ses centres commerciaux luxueux et ses plages paradisiaques.",
    rating: 4.8,
    featured: true,
    category: 'luxe',
    duration: '7 jours'
  },
  {
    title: 'Zanzibar',
    subtitle: 'Plages paradisiaques',
    price: '$800',
    image: '/img/Zanzibar.jpg',
    description: "Détendez-vous sur les plus belles plages de l'océan Indien, découvrez Stone Town et sa riche histoire culturelle.",
    rating: 4.7,
    featured: false,
    category: 'plage',
    duration: '10 jours'
  },
  {
    title: 'Turquie',
    subtitle: 'Histoire et culture',
    price: '$950',
    image: '/img/turkey.webp',
    description: "Immergez-vous dans l'histoire millénaire d'Istanbul, visitez la Cappadoce et ses paysages lunaires uniques.",
    rating: 4.6,
    featured: true,
    category: 'culture',
    duration: '8 jours'
  },
  {
    title: 'Afrique du Sud',
    subtitle: 'Safari et aventure',
    price: '$1,100',
    image: '/img/sud.jpg',
    description: "Vivez l'aventure ultime avec des safaris exceptionnels, visitez Cape Town et découvrez la route des vins.",
    rating: 4.9,
    featured: false,
    category: 'aventure',
    duration: '12 jours'
  },
  {
    title: 'Maldives',
    subtitle: 'Honeymoon paradis',
    price: '$1,500',
    image: '/img/Maldives.png',
    description: "Villas sur pilotis, eaux turquoises et spa luxueux pour un séjour romantique inoubliable.",
    rating: 4.9,
    featured: true,
    category: 'plage',
    duration: '7 jours'
  },
  {
    title: 'Japon',
    subtitle: 'Tradition et modernité',
    price: '$1,800',
    image: '/img/Japon.jpg',
    description: "Découvrez Tokyo futuriste, les temples de Kyoto et les onsens traditionnels.",
    rating: 4.8,
    featured: true,
    category: 'culture',
    duration: '14 jours'
  },
  {
    title: 'Islande',
    subtitle: 'Aurores boréales',
    price: '$1,600',
    image: '/img/Islande.webp',
    description: "Roadtrip entre glaciers, geysers et lagons bleus sous les aurores boréales.",
    rating: 4.7,
    featured: false,
    category: 'nature',
    duration: '10 jours'
  },
  {
    title: 'Maroc',
    subtitle: 'Désert et médinas',
    price: '$750',
    image: '/img/Maroc.jfif',
    description: "Des souks colorés de Marrakech aux dunes du Sahara, une expérience sensorielle unique.",
    rating: 4.5,
    featured: false,
    category: 'culture',
    duration: '9 jours'
  }
];

const categories = ['Toutes', 'Luxe', 'Plage', 'Culture', 'Aventure', 'Nature'];

const DestinationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [priceRange, setPriceRange] = useState(2000);

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes' || 
                          dest.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = parseInt(dest.price.replace('$', '')) <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="pt-14 md:pt-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <section className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B1F6B]/90 to-transparent z-10" />
          <Image
            src="/img/destination-hero.webp"
            alt="Voyage autour du monde"
            layout="fill"
            objectFit="cover"
            className="object-left-top"
          />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Explorez Nos <span className="text-[#FFD600]">Destinations</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Des expériences uniques soigneusement sélectionnées pour des souvenirs inoubliables.
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-[#6D1A5F] mb-4">Trouvez votre destination idéale</h2>
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm w-full">
                <RiSearchLine className="text-[#6D1A5F] text-xl mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher par destination, activité..."
                  className="w-full outline-none text-gray-700 placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <label className="text-gray-700 mb-2">Budget maximum: <span className="font-semibold">${priceRange}</span></label>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-[#7B1F6B]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#7B1F6B] text-white'
                    : 'bg-white text-[#6D1A5F] border border-gray-300 hover:border-[#7B1F6B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#6D1A5F]">
            {filteredDestinations.length} Destinations trouvées
          </h3>
          <div className="flex items-center text-[#6D1A5F]">
            <RiFilterLine className="mr-2" />
            <select className="bg-transparent border-none outline-none">
              <option>Trier par : Pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Grille de destinations */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((dest, index) => (
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

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#7B1F6B] text-white text-xs px-3 py-1 rounded-full">
                      {dest.price}
                    </span>
                    {dest.featured && (
                      <span className="bg-[#FFD600] text-[#6D1A5F] text-xs px-3 py-1 rounded-full font-bold">
                        POPULAIRE
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 text-[#6D1A5F] text-sm px-2 py-1 rounded-full flex items-center">
                    <RiStarFill className="text-[#FFD600] mr-1" />
                    {dest.rating}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-[#6D1A5F]">
                      <RiMapPinLine className="mr-1" />
                      <span className="text-sm font-medium">{dest.subtitle}</span>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{dest.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{dest.title}</h3>
                  <p className="text-gray-600 mb-5 line-clamp-2">{dest.description}</p>

                  <button className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-3 px-4 rounded-full hover:shadow-md transition-all flex items-center justify-center gap-2">
                    Voir les offres
                    <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-[#6D1A5F] mb-4">Aucune destination trouvée</h3>
            <p className="text-gray-600 mb-6">Essayez d'ajuster vos filtres de recherche</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Toutes');
                setPriceRange(2000);
              }}
              className="bg-[#7B1F6B] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-opacity"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Pagination */}
        {/* {filteredDestinations.length > 0 && (
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:border-[#7B1F6B]">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:border-[#7B1F6B]">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:border-[#7B1F6B]">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:border-[#7B1F6B]">
              <RiArrowRightLine />
            </button>
          </div>
        )} */}
      </section>
    </div>
  );
};

export default DestinationsPage;