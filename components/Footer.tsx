import React from 'react';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill, RiWhatsappLine, RiVisaLine, RiMastercardLine, RiPaypalLine, RiMailSendLine } from 'react-icons/ri';
import { IoChevronForward } from "react-icons/io5";
import Link from 'next/link';

const links = [
  {
    name: 'Accueil', href: "/"
  },
  {
    name: 'Services', href: "/services"
  },
  {
    name: 'destinations', href: "/destinations"
  },
  {
    name: 'À propos', href: "/about"
  },
  {
    name: 'Contact', href: "contact"
  }
]

const destinationsFooter = [
  {
    name: 'Dubaï', href:"/destinations"
  },
  {
    name: 'Zanzibar', href:"/destinations"
  },
  {
    name: 'Turquie', href:"/destinations"
  },
  {
    name: 'Afrique du Sud', href:"/destinations"
  },
  {
    name: 'Japon', href: "/destinations"
  },
  {
    name: 'Islande', href: "/destinations"
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6D1A5F] text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo + Description */}
          <div className="space-y-5 md:space-y-6">
            <div className="relative w-40 h-16">
              <Image 
                src="/logo/footer.png" 
                alt="Metro Travels BHJ Logo" 
                width={90}
                height={30}
              />
            </div>
            <p className="text-gray-200">
              Votre partenaire pour des expériences de voyage exceptionnelles depuis Lubumbashi.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/metrotravelsbhj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#FFD600] hover:text-[#6D1A5F] transition-all"
                aria-label="Instagram"
              >
                <RiInstagramLine className="text-xl" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61557847187646"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#FFD600] hover:text-[#6D1A5F] transition-all"
                aria-label="Facebook"
              >
                <RiFacebookFill className="text-xl" />
              </a>
              <a
                href={`https://wa.me/+919724595395?text=${encodeURIComponent(
                  `Bonjour Metro Travels BHJ".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#FFD600] hover:text-[#6D1A5F] transition-all"
                aria-label="WhatsApp"
              >
                <RiWhatsappLine className="text-xl" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFD600]">Navigation</h4>
            <ul className="space-y-4">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <IoChevronForward className="text-[#FFD600] mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFD600]">Destinations</h4>
            <ul className="space-y-4">
              {destinationsFooter.map((dest, idx) => (
                <li key={idx}>
                  <Link
                    href={dest.href}
                    className="text-gray-200 hover:text-white hover:underline transition-colors flex items-center gap-2"
                  >
                    <IoChevronForward className="text-[#FFD600] mr-1" />
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFD600]">Newsletter</h4>
            <p className="text-gray-200 mb-4">
              Recevez nos offres exclusives et inspirations voyage directement dans votre boîte mail.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#FFD600] border border-gray-300 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                S'abonner <RiMailSendLine />
              </button>
            </form>

            <div className="mt-8">
              <h5 className="text-gray-200 font-medium mb-3">Paiements sécurisés</h5>
              <div className="flex gap-4">
                <RiVisaLine className="text-3xl text-gray-300 hover:text-white transition-colors" />
                <RiMastercardLine className="text-3xl text-gray-300 hover:text-white transition-colors" />
                <RiPaypalLine className="text-3xl text-gray-300 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} Metro Travels BHJ. Tous droits réservés.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Conditions générales
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;