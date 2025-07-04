'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine, RiWhatsappLine } from 'react-icons/ri';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className={`bg-white shadow-md fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-4 py-2.5 md:py-3 flex justify-between items-center">
        {/* Logo avec effet de scale au scroll */}
        <Link href="/" className="">
          <Image src="/logo/logo.png" alt="Logo" width={90} height={30} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className='text-[#6D1A5F] font-medium px-3 py-2 hover:text-purple-700 capitalize'
            >
              {section === 'about' ? 'À propos' : section}
            </Link>
          ))}
          <a
            href={`https://wa.me/+243XXXXXXXXX?text=${encodeURIComponent("Bonjour Metro Travels BHJ, j'aimerais en savoir plus sur vos services")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <RiWhatsappLine className="text-lg" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#6D1A5F] p-2 rounded-full hover:bg-[#FFD600]/10 transition-all"
          aria-label="Open menu"
        >
          <RiMenu3Line className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="*relative *h-10 *w-32">
              {/* <Image src="/logo/logo.png" alt="Logo" fill className="object-contain" /> */}
              <Link href="/" className="">
                <Image src="/logo/logo.png" alt="Logo" width={90} height={30} />
              </Link>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-[#6D1A5F] p-2 rounded-full hover:bg-[#FFD600]/10"
              aria-label="Close menu"
            >
              <RiCloseLine className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-2">
            {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-[#6D1A5F] font-medium rounded-lg hover:bg-[#FFD600]/10 transition-colors"
              >
                {section === 'about' ? 'À propos' : section}
              </Link>
            ))}

            <a
              href={`https://wa.me/+243XXXXXXXXX?text=${encodeURIComponent("Bonjour Metro Travels BHJ, j'aimerais en savoir plus sur vos services")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <RiWhatsappLine className="text-lg" />
              Contact WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;