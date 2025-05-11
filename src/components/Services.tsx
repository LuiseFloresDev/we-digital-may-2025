// src/components/Services.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className='bg-[#1e3a5f]'>
      <div className="container mx-auto pb-10 md:pb-20">
        <div className="text-left p-10 md:p-20">
          <p className="uppercase text-md font-bold text-[#a13ef8]">WE OFFER</p>
          <h1
            className="font-bold text-[#ff650e] text-3xl md:text-5xl mb-2"
          >
            Services
            <span className="text-[#ff650e]"> that deliver creative solutions</span>.
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-10"
        >
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50 hover:border-[#ff914d]"
          >
            <Image width={48} height={48} alt='Startup image' src="/images/startup.png" className="h-12 mb-2" />
            <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Search Engine Optimization (SEO)
            </h4>
            <p className="text-[#1e3a5f]">
              Boost your website&apos;s visibility on search engines and attract
              organic traffic with expert SEO strategies.
            </p>
          </div>
          <div className="relative grid gap-2 bg-white p-6 md:p-8 rounded border border-[#ff650e] hover:bg-gray-50 hover:border-[#ff914d] overflow-hidden">
            {/* Imagem de fundo com overlay laranja */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/picture-service-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-[#ff650e] opacity-75"></div>
            </div>
            {/* Conteúdo acima do background */}
            <div className="relative z-10 flex flex-col items-left gap-4">
              <Image width={48} height={48} alt='Payment image' src="/images/payment.png" className="h-12 mb-2" />
              <h4 className="text-xl font-semibold text-[#1e3a5f]">
                Paid Digital Advertising
              </h4>
              <p className="text-[#1e3a5f]">
                Maximize your online visibility and drive targeted traffic with
                effective paid digital advertising across platforms like Google,
                Facebook, and Instagram.
              </p>
            </div>
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50 hover:border-[#ff914d]"
          >
            <Image width={48} height={48} alt='Calendar image' src="/images/calendar.png" className="h-12 mb-2" />
            <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Social Media and Content Marketing
            </h4>
            <p className="text-[#1e3a5f]">
              Engage your audience with compelling content and strategic social
              media marketing that drives brand awareness and boosts
              conversions.
            </p>
          </div>
          <div className="relative grid gap-2 bg-white p-6 md:p-8 rounded border border-[#ff650e] hover:bg-gray-50 hover:border-[#ff914d] overflow-hidden">
            {/* Imagem de fundo com overlay laranja */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/picture-service-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-[#ff650e] opacity-75"></div>
            </div>
            {/* Conteúdo acima do background */}
            <div className="relative z-10 flex flex-col items-left gap-4">
              <Image width={48} height={48} alt='Camera image' src="/images/photo-camera.png" className="h-12 mb-2" />
              <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Events - Mobile Photos and Videos
              </h4>
              <p className="text-[#1e3a5f]">
              Capture the essence of your events with high-quality mobile photos and videos that engage your audience and elevate your brand with convenience and authenticity.
              </p>
            </div>
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50 hover:border-[#ff914d]"
          >
            <Image width={48} height={48} alt='Email image' src="/images/email.png" className="h-12 mb-2" />
            <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Email Marketing
            </h4>
            <p className="text-[#1e3a5f]">
              Nurture leads and drive conversions with personalized and
              automated email campaigns.
            </p>
          </div>
          <div className="relative grid gap-2 bg-white p-6 md:p-8 rounded border border-[#ff650e] hover:bg-gray-50 hover:border-[#ff914d] overflow-hidden">
            {/* Imagem de fundo com overlay laranja */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/office-image-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-[#ff650e] opacity-75"></div>
            </div>
            {/* Conteúdo acima do background */}
            <div className="relative z-10 flex flex-col items-left gap-4">
              <Image width={48} height={48} alt='Computer programming image' src="/images/computer-programming.png" className="h-12 mb-2" />
              <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Web Design and Development
              </h4>
              <p className="text-[#1e3a5f]">
              Build a responsive, user-friendly website that reflects your brand
              and drives conversions.
              </p>
            </div>
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50 hover:border-[#ff914d]"
          >
            <Image width={48} height={48} alt='Idea image' src="/images/idea.png" className="h-12 mb-2" />
            <h4 className="text-xl font-semibold text-[#1e3a5f]">
              Branding and Creative Services
            </h4>
            <p className="text-[#1e3a5f]">
              Create a strong brand identity and compelling visuals that
              resonate with your audience.
            </p>
          </div>
          <div className="relative grid gap-2 bg-white p-6 md:p-8 rounded border border-[#ff650e] hover:bg-gray-50 hover:border-[#ff914d] overflow-hidden">
            {/* Imagem de fundo com overlay laranja */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/office-image-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            >
              <div className="absolute inset-0 bg-[#ff650e] opacity-75"></div>
            </div>
            {/* Conteúdo acima do background */}
            <div className="relative z-10 flex flex-col items-left gap-4">
              <Image width={48} height={48} alt='Chat image' src="/images/chat.png" className="h-12 mb-2" />
              <h4 className="text-xl font-semibold text-[#1e3a5f]">
              WhatsApp Business Marketing
              </h4>
              <p className="text-[#1e3a5f]">
              Connect with your customers directly and boost engagement using
              personalized marketing via WhatsApp Business.
              </p>
            </div>
          </div>
        </div>
        <div className="font-sans text-center mt-10">
          <Link
            href="/packages"
            className="inline-block px-5 py-3 md:py-4 bg-[#a13ef8] hover:bg-[#ff914d] hover:text-[#ffffff] text-[#ffffff] rounded-md"
          >
            Pick your perfect plan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;