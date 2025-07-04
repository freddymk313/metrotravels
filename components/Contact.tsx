"use client"
import React, { useState } from 'react';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiWhatsappLine, RiSendPlaneLine, RiTimeLine } from 'react-icons/ri';
import { FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-[#FFD600]/10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFD600]/20 text-[#6D1A5F] px-6 py-2 rounded-full text-sm font-semibold mb-4 *animate-pulse">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6D1A5F] mb-4">
            Planifions <span className="text-[#F7A900]">Votre Voyage</span> Ensemble
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour créer l'expérience de voyage parfaite.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire de contact amélioré */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7B1F6B]/10 text-[#7B1F6B] p-3 rounded-xl">
                  <RiSendPlaneLine className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#6D1A5F]">
                  Envoyez-nous votre demande
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7B1F6B] focus:border-transparent transition-all outline-none peer"
                      placeholder=" "
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-12 top-1/2 -translate-y-1/2 px-1 bg-white text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-12 peer-focus:top-1/2 peer-focus:text-sm peer-focus:text-[#7B1F6B]"
                    >
                      Nom complet *
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7B1F6B] focus:border-transparent transition-all outline-none peer"
                      placeholder=" "
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-12 top-1/2 -translate-y-1/2 px-1 bg-white text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-12 peer-focus:top-1/2 peer-focus:text-sm peer-focus:text-[#7B1F6B]"
                    >
                      Email *
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7B1F6B] focus:border-transparent transition-all outline-none peer"
                      placeholder=" "
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-12 top-1/2 -translate-y-1/2 px-1 bg-white text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-12 peer-focus:top-1/2 peer-focus:text-sm peer-focus:text-[#7B1F6B]"
                    >
                      Téléphone
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <RiPhoneLine className="text-xl" />
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7B1F6B] focus:border-transparent transition-all outline-none appearance-none peer"
                    >
                      <option value=""></option>
                      <option value="vol">Réservation de vol</option>
                      <option value="visa">Demande de visa</option>
                      <option value="package">Package voyage</option>
                      <option value="autre">Autre demande</option>
                    </select>
                    <label 
                      htmlFor="subject" 
                      className="absolute left-12 top-1/2 -translate-y-1/2 px-1 bg-white text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-12 peer-focus:top-1/2 peer-focus:text-sm peer-focus:text-[#7B1F6B]"
                    >
                      Sujet
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7B1F6B] focus:border-transparent transition-all outline-none peer"
                    placeholder=" "
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-12 top-4 px-1 bg-white text-gray-500 transition-all duration-200 pointer-events-none peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-12 peer-focus:top-4 peer-focus:text-sm peer-focus:text-[#7B1F6B]"
                  >
                    Message *
                  </label>
                  <div className="absolute left-4 top-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFD600] to-[#F7A900] hover:from-[#FFD600] hover:to-[#FFD600] text-[#6D1A5F] py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Envoyer la demande
                  <RiSendPlaneLine className="text-xl group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact améliorées */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#7B1F6B]/10 text-[#7B1F6B] p-3 rounded-xl">
                  <FaHeadset className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#6D1A5F]">
                  Contact & Support
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                  <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-xl flex-shrink-0">
                    <RiMapPinLine className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Nos bureaux</h4>
                    <p className="text-gray-600">Avenue Mwepu, Lubumbashi, RDC</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#7B1F6B] hover:underline mt-2"
                    >
                      <FaMapMarkerAlt className="mr-1" />
                      Voir sur la carte
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                  <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-xl flex-shrink-0">
                    <RiPhoneLine className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Téléphone</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">+91 97245 95395</p>
                      <p className="text-gray-600">+243 910307234</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                  <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-xl flex-shrink-0">
                    <RiMailLine className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Email</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">bookings@metrotourism.co.in</p> 
                      <p className="text-gray-600">via.metrobhj@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 hover:bg-[#FFD600]/10 rounded-xl transition-all">
                  <div className="bg-[#7B1F6B]/10 text-[#6D1A5F] p-3 rounded-xl flex-shrink-0">
                    <RiTimeLine className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Heures d'ouverture</h4>
                    <p className="text-gray-600">Lundi - Vendredi: 8h - 18h</p>
                    <p className="text-gray-600">Samedi: 9h - 14h</p>
                    <p className="text-gray-600">Urgences: 24h/24</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/919724595395"
                  className="flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 text-white py-3 px-6 rounded-full font-bold hover:shadow-lg transition-all gap-3"
                >
                  <RiWhatsappLine className="text-2xl" />
                  <span>Discuter sur WhatsApp</span>
                </a>
                <div className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD600]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Réponse garantie dans les 30 minutes
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757687!2d27.47685231576088!3d-11.575521865616944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723f4c152d3489%3A0x9dff3f5e9b5e5e5e!2sLubumbashi%2C%20RD%20Congo!5e0!3m2!1sfr!2sus!4v1620000000000!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="filter grayscale(20%) contrast(110%) hover:grayscale(0%) transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;