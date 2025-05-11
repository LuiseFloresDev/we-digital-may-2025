"use client"
// src/components/ScrollToTopButton.tsx
import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      className={`fixed bottom-5 right-5 bg-[#8c52ff] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-[#ff914d] ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      style={{ transition: 'opacity 0.3s' }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;