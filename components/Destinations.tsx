// components/Destinations.tsx
import Image from 'next/image';
import React from 'react';

const destinations = [
  {
    title: "Dubaï",
    subtitle: "Luxe et modernité",
    price: "$1,200",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.areion24.news%2F2022%2F11%2F10%2Fdubai-rencontre-avec-une-ville-mondiale-dun-nouveau-type%2F&psig=AOvVaw0IDnxQezAaoOWfRGkKvv-e&ust=1751394051830000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj-9cLhmY4DFQAAAAAdAAAAABAE",
    description:
      "Explorez la ville futuriste avec ses gratte-ciels emblématiques, ses centres commerciaux luxueux et ses plages paradisiaques.",
  },
  {
    title: "Zanzibar",
    subtitle: "Plages paradisiaques",
    price: "$800",
    image: "/images/zanzibar.jpg",
    description:
      "Détendez-vous sur les plus belles plages de l’océan Indien, découvrez Stone Town et sa riche histoire culturelle.",
  },
  {
    title: "Turquie",
    subtitle: "Histoire et culture",
    price: "$950",
    image: "/images/turquie.jpg",
    description:
      "Immergez-vous dans l’histoire millénaire d’Istanbul, visitez la Cappadoce et ses paysages lunaires uniques.",
  },
  {
    title: "Afrique du Sud",
    subtitle: "Safari et aventure",
    price: "$1,100",
    image: "/images/afrique.jpg",
    description:
      "Vivez l’aventure ultime avec des safaris exceptionnels, visitez Cape Town et découvrez la route des vins.",
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Destinations Populaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos destinations phares, soigneusement sélectionnées pour des expériences inoubliables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative h-56">
              <Image
                src={dest.image}
                alt={dest.title}
                layout="fill"
                objectFit="cover"
                width={400}
                height={300}
                className="brightness-75"
              />
              <div className="absolute top-2 left-2 bg-pink-700 text-white text-sm px-3 py-1 rounded-full">
                À partir de {dest.price}
              </div>
              <div className="absolute bottom-2 left-2 text-white">
                <h3 className="text-lg font-bold">{dest.title}</h3>
                <p className="text-sm">{dest.subtitle}</p>
              </div>
            </div>
            <div className="p-4 text-sm text-gray-600">
              {dest.description}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Destinations;
