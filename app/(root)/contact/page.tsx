'use client'

import React from 'react';
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiWhatsappLine,
  RiSendPlaneLine,
} from 'react-icons/ri';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* <Head>
        <title>Contact - Metro Travels BHJ</title>
        <meta name="description" content="Contactez Metro Travels BHJ pour organiser votre prochain voyage." />
      </Head> */}

      <div className="pt-14 md:pt-24 bg-gradient-to-b from-white to-gray-50">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Nous Contacter
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
                Prêt pour <span className="text-[#F7A900]">Votre Aventure</span> ?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Notre équipe est disponible 24/7 pour répondre à vos questions et créer l'itinéraire parfait pour vous.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Formulaire de contact */}
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#6D1A5F] mb-6 flex items-center gap-2">
                    <RiSendPlaneLine className="text-[#F7A900]" />
                    Envoyez-nous un message
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                        Nom complet <span className="text-[#E03C69]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Votre nom complet"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1F6B] outline-none text-gray-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                          Email <span className="text-[#E03C69]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="votre@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1F6B] outline-none text-gray-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+243 XX XXX XX XX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1F6B] outline-none text-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1F6B] outline-none text-gray-900"
                      >
                        <option>Sélectionnez un sujet</option>
                        <option>Réservation de vol</option>
                        <option>Demande de visa</option>
                        <option>Package voyage</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                        Message <span className="text-[#E03C69]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Décrivez votre projet de voyage..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1F6B] outline-none text-gray-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Envoyer le message <RiSendPlaneLine />
                    </button>
                  </form>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="lg:w-1/2 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#6D1A5F] mb-6">Nos Coordonnées</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                      <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-full">
                        <RiMapPinLine className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">Adresse</h4>
                        <p className="text-gray-600">Avenue Mwepu, Lubumbashi, RDC</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7B1F6B] hover:underline">
                          Voir sur la carte
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                      <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-full">
                        <RiPhoneLine className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">Téléphone</h4>
                        <p className="text-gray-600">+243 910 307 234</p>
                        <p className="text-gray-600">+91 97245 95395</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                      <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-full">
                        <RiMailLine className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">Email</h4>
                        <p className="text-gray-600">via.metrobhj@gmail.com</p>
                        <p className="text-gray-600">bookings@metrotourism.co.in</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://wa.me/243XXXXXXXXX"
                      className="flex items-center justify-center bg-[#25D366] text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all gap-2"
                    >
                      <RiWhatsappLine className="text-xl" />
                      Chat WhatsApp
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-4">Réponse garantie dans les 30 minutes</p>
                  </div>
                </div>

                <div className="h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757687!2d27.47685231576088!3d-11.575521865616944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723f4c152d3489%3A0x9dff3f5e9b5e5e5e!2sLubumbashi%2C%20RD%20Congo!5e0!3m2!1sfr!2sus!4v1620000000000!5m2!1sfr!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="filter grayscale(20%) contrast(110%)"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
