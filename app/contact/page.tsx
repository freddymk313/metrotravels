// app/contact/page.tsx
import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactez-Nous</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous aider à planifier votre prochain voyage.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulaire */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                  <input type="text" id="name" placeholder="Votre nom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" placeholder="Votre email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={5} placeholder="Votre message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none" />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-gold to-primary text-white py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Infos de contact */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-4 mt-1">
                    <i className="ri-map-pin-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-gray-600">Avenue Mwepu, Lubumbashi, RDC</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-4 mt-1">
                    <i className="ri-phone-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Téléphone</h4>
                    <p className="text-gray-600">+243 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-4 mt-1">
                    <i className="ri-mail-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">metrotravelsbhj@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/243XXXXXXXXX"
                  className="flex items-center justify-center bg-[#25D366] text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-opacity"
                >
                  <i className="ri-whatsapp-line mr-2 ri-lg"></i> Contactez-nous sur WhatsApp
                </a>
              </div>
            </div>

            <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Lubumbashi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
