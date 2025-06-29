// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="hero-section min-h-screen flex items-center pt-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('https://readdy.ai/api/search-image?query=beautiful%20travel%20destinations%20with%20airplane%20flying%20over%20scenic%20landscapes%2C%20showing%20beaches%2C%20mountains%2C%20and%20cities.%20Professional%20travel%20photography%20with%20soft%20lighting%2C%20high-quality%20image%20perfect%20for%20a%20travel%20agency%20hero%20section%2C%20inspirational%20travel%20imagery&width=1920&height=1080&seq=hero123&orientation=landscape')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explorez le monde avec Metro Travels BHJ 🌍✈️
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Billets d'avion, Assistance visa & Voyages inoubliables
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-gold to-primary text-white px-8 py-3 rounded-button font-medium hover:opacity-90 transition-opacity text-lg whitespace-nowrap"
          >
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
