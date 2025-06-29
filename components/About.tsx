// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=800&q=80"
            alt="About Metro Travels BHJ"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">À propos de Metro Travels BHJ</h2>
          <p className="text-lg text-gray-700 mb-4">
            Metro Travels BHJ est une agence de voyage basée à Lubumbashi, spécialisée dans l'organisation de voyages
            sur mesure. Nous offrons une expérience client unique avec des services personnalisés adaptés à vos besoins.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Notre équipe dévouée s'engage à vous fournir un accompagnement de qualité, de la planification jusqu'au retour.
            Avec Metro Travels BHJ, votre voyage devient un souvenir inoubliable.
          </p>
          <a
            href="#services"
            className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full shadow hover:bg-secondary transition"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
