// src/components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#ff650e] text-white px-8 py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Esquerda: Menus */}
        <div className="flex flex-col sm:flex-row gap-16">
          {/* MENU */}
          <div>
            <h3 className="font-bold text-xl mb-4">MENU</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#about">About</a></li>
              <li><a href="events">Events</a></li>
              {/* <li><a href="#blog">Blog</a></li> */}
            </ul>
          </div>
          {/* SERVICES */}
          <div>
            <h3 className="font-bold text-xl mb-4">SERVICES</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="packages">Email</a></li>
              <li><a href="packages">Google Ads</a></li>
              <li><a href="packages">Paid Social</a></li>
              <li><a href="packages">SEO</a></li>
              <li><a href="packages">Organic Content</a></li>
              <li><a href="packages">Design</a></li>
            </ul>
          </div>
        </div>
        {/* Direita: Botão, redes sociais, email, copyright */}
        <div className="flex flex-col items-end justify-between text-right w-full lg:w-auto gap-6 font-sans">
          <Link
            href="/packages"
            className="inline-block px-5 py-3 md:py-4 bg-[#ffffff] hover:bg-[#ff914d] hover:text-[#ffffff] text-[#ff650e] rounded-md font-semibold mb-2"
          >
            Find your perfect plan
          </Link>
          <div className="flex flex-row items-center gap-2 justify-end">
            <a
              href="https://www.instagram.com/wedigitalstudio.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 mx-1"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/people/We-Digital-Studio/61565242392224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 mx-1"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/we-digital-studio-ie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 mx-1"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://ie.pinterest.com/wedigitalstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 mx-1"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a
              href="https://www.tiktok.com/@wedigitalstudio.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 mx-1"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <a href="mailto:wedigitalstudio.ie@gmail.com" className="underline text-white text-lg font-semibold mt-2">wedigitalstudio.ie@gmail.com</a>
          <p className="text-sm text-white/80 mt-2">&copy; 2025 We. Digital Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;