// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[60vh] sm:min-h-screen flex items-center justify-center p-6">
  <div className="absolute inset-0">
    <Image
      width={584}
      height={730}
      src="/images/new-hero-background-we.png"
      alt="Hero Background"
      className="w-full h-full object-cover opacity-70 object-[center_top] sm:object-center"
      priority
    />
    <div className="absolute inset-0 bg-[#1e3a5f] opacity-70"></div>
  </div>

      <div className="relative z-10 max-w-4xl text-left inset-y-0 left-0">
        <div className="flex flex-col items-start justify-center mt-64 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff650e] leading-tight tracking-tighter mb-6">
            Get people talking
            <br />
            about your brand.
          </h1>

          <p className="text-white text-light text-lg md:text-xl mb-8">
            Specialists in the five essential pillars of marketing.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/#services" className="px-4 py-2 bg-[#1e3a5f] text-white text-light rounded-md shadow-md">
              Content Marketing
            </Link>
            <Link href="/#services" className="px-4 py-2 bg-[#1e3a5f] text-white text-light rounded-md shadow-md">
              Social Media
            </Link>
            <Link href="/#services" className="px-4 py-2 bg-[#1e3a5f] text-white text-light rounded-md shadow-md">
              Paid Social
            </Link>
            <Link href="/#services" className="px-4 py-2 bg-[#1e3a5f] text-white text-light rounded-md shadow-md">
              Google Ads
            </Link>
            <Link href="/#services" className="px-4 py-2 bg-[#1e3a5f] text-white text-light rounded-md shadow-md">
              Analytics
            </Link>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/#contact"
              className="px-6 py-3 bg-[#ff650e] text-white font-semibold rounded-md shadow-md hover:bg-[#ff914d] hover:text-[#ffffff] transition"
            >
              Free Audit
            </Link>
            <Link href="/packages"
              className="px-6 py-3 border-2 border-[#ff650e] text-white font-semibold rounded-md hover:bg-[#ff914d] hover:text-[#ffffff] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;