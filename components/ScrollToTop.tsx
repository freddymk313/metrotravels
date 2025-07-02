"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={goToTop}
          aria-label="Revenir en haut de la page"
          className="fixed bottom-8 right-4 z-50 p-4 rounded-full shadow-xl cursor-pointer outline-none"
          style={{
            // background: 'linear-gradient(135deg, #e51065 0%, #b50d50 100%)',
            background: '#6D1A5F',
            // boxShadow: '0 4px 20px rgba(229, 16, 101, 0.3)'
          }}
          whileHover={{
            scale: 1.1,
            // boxShadow: '0 6px 25px rgba(229, 16, 101, 0.4)'
          }}
          whileTap={{
            scale: 0.95
          }}
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FiArrowUp className="w-5 h-5 text-white" />
          </motion.div>
          <span className="sr-only">Revenir en haut</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};