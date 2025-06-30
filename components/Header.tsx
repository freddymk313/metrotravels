"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm shadow-sm py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo/logo.png" 
            alt="Logo" 
            width={230} 
            height={90} 
            className={`transition-all duration-300 ${scrolled ? 'h-12 w-auto' : 'h-14 w-auto'}`} 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
            <Link 
              key={section} 
              href={`#${section}`} 
              className="nav-link font-medium text-gray-700 hover:text-[#7B1F6B] transition-colors capitalize px-3 py-2 rounded-md hover:bg-[#F7A900]/10"
            >
              {section.replace('about', 'À propos')}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <i className="ri-whatsapp-line ri-lg" />
            Nous Contacter
          </a>
        </nav>
        
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#6D1A5F] focus:outline-none w-10 h-10 flex items-center justify-center hover:bg-[#F7A900]/10 rounded-full"
        >
          <i className="ri-menu-line ri-2x text-black" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div 
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-100">
            <Image 
              src="/logo/logo.png" 
              alt="Logo" 
              width={180} 
              height={70} 
              className="h-10 w-auto" 
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6D1A5F] focus:outline-none w-10 h-10 flex items-center justify-center hover:bg-[#F7A900]/10 rounded-full"
            >
              <i className="ri-close-line ri-2x" />
            </button>
          </div>
          
          <div className="flex flex-col p-4">
            {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="py-3 px-4 text-gray-700 font-medium hover:text-[#7B1F6B] hover:bg-[#F7A900]/10 transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {section.replace('about', 'À propos')}
              </Link>
            ))}
            
            <a
              href="#contact"
              className="mt-4 bg-gradient-to-r from-[#FFD600] to-[#F7A900] text-[#6D1A5F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line ri-lg" />
              Nous Contacter
            </a>
          </div>
        </div>
        
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;