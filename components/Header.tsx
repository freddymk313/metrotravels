"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('shadow-md');
        header?.classList.remove('shadow-sm');
      } else {
        header?.classList.remove('shadow-md');
        header?.classList.add('shadow-sm');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo/logo.png" alt="Logo" width={200} height={60} className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="nav-link font-medium hover:text-primary transition-colors capitalize">
              {section.replace('about', 'À propos')}
            </a>
          ))}
          <a href="#contact" className="bg-gradient-to-r from-gold to-primary text-white px-6 py-2 rounded-button font-medium hover:opacity-90 transition-opacity">
            Nous Contacter
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-dark focus:outline-none w-10 h-10 flex items-center justify-center"
        >
          <i className="ri-menu-line ri-2x" />
        </button>
      </div>
      <div
        className={`mobile-menu fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-dark focus:outline-none w-10 h-10 flex items-center justify-center"
          >
            <i className="ri-close-line ri-2x" />
          </button>
        </div>
        <div className="flex flex-col px-4 py-2">
          {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="py-3 text-dark font-medium hover:text-primary transition-colors border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {section.replace('about', 'À propos')}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 bg-gradient-to-r from-gold to-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;