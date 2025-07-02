'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

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
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Image src="/logo/logo.png" alt="Logo" width={110} height={40} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="text-gray-700 font-medium px-3 py-2 hover:text-purple-700 capitalize"
            >
              {section === 'about' ? 'À propos' : section}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-yellow-400 text-purple-700 px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Nous Contacter
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-purple-700"
        >
          <IoMenuOutline className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 w-78 h-full bg-white shadow-xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <Image src="/logo/logo.png" alt="Logo" width={110} height={40} />
            <button onClick={() => setIsOpen(false)} className="text-purple-700">
              <IoCloseOutline className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-3">
            {['accueil', 'services', 'destinations', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium py-2 px-3 rounded hover:bg-yellow-100"
              >
                {section === 'about' ? 'À propos' : section}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-yellow-400 text-purple-700 px-4 py-2 rounded-full font-semibold text-center hover:bg-yellow-500 transition"
            >
              Nous Contacter
            </a>
          </div>
        </div>

        {/* Overlay */}
        {/* <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        ></div> */}
      </div>
    </header>
  );
};

export default Header;
