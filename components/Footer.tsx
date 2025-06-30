import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-primary">Metro Travels BHJ</h3>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/metrotravelsbhj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <i className="ri-instagram-line text-2xl"></i>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61557847187646"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <i className="ri-facebook-circle-line text-2xl"></i>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            Lubumbashi, RDC | contact@metrotravelsbhj.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;