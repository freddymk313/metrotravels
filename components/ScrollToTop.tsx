"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          aria-label="Revenir en haut de la page"
          className="fixed bottom-8 right-4 z-50 p-4 rounded-full shadow-xl cursor-pointer outline-none"
          style={{
            background: '#6D1A5F',
          }}
        >
            <FiArrowUp className="w-5 h-5 text-white" />
          <span className="sr-only">Revenir en haut</span>
        </button>
      )}
      </>
  );
};