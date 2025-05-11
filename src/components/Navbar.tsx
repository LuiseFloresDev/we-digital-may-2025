// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <nav className={`w-full fixed top-0 left-0 z-50 bg-cover bg-center bg-no-repeat text-white px-8 py-4 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10"
      >
        <Link href="/">
          <Image width={80} height={80} alt='We Digital Studio logo' src="/images/logo-we-digital-studio-new.png" className="mb-4 md:mb-0" />
        </Link>
        <div
          className="font-sans space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center"
        >
          <Link href="/#services" className="text-white text-light text-lg hover:text-gray-200">Services</Link>
          {/* <Link href="/events" className="text-white text-lg hover:text-gray-200">Events</Link> */}
          <Link href="/#about" className="text-white text-light text-lg hover:text-gray-200">About</Link>
          {/* <Link href="/#testimonials" className="text-white text-lg hover:text-gray-200">Testimonials</Link> */}
          <Link href="/#recentwork" className="text-white text-light text-lg hover:text-gray-200">Recent Work</Link>
          <Link href="/#contact" className="bg-[#ff650e] rounded-md text-white text-light text-lg hover:text-[#ffffff] py-1.5 px-3 md:py-2 md:px-4">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;