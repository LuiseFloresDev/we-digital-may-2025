// src/components/About.tsx
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#1e3a5f]">
      <div className="container mx-auto pb-10 md:pb-20">
        <div className="text-left p-10 md:p-20">
          <p className="uppercase text-md font-bold text-[#a13ef8]">WE ARE</p>
          <h1
            className="font-dm-serif-display font-bold text-[#ff650e] text-3xl md:text-5xl mb-2"
          >
            Creative Brazilians
            <span className="text-[#ff650e]"> at the heart of Limerick</span>.
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
          <div className="relative rounded-md w-full h-auto">
  <Image
    width={584}
    height={466}
    src="/images/about-us-creative.png"
    alt="We Digital Studio creativity showcase"
    className="rounded-md w-full h-auto"
  />
  {/* Layer laranja com transparência */}
  <div className="absolute inset-0 bg-[#ff650e] opacity-55 rounded-md"></div>
</div>
          <div className="text-[#f2f0fe] text-lg md:text-xl">
            <p className="mb-4">
              Our Limerick-based digital marketing agency brings expert
              strategies to elevate brands and drive business growth with
              tailored, results-driven solutions.
            </p>
            <div className="mb-4">
              <p className="font-bold text-[#8c52ff]">Authenticity:</p>
              <p>
                We value creating genuine content that truly represents our
                clients&apos; identity and vision.
              </p>
              <p className="font-bold text-[#8c52ff] mt-2">Personalisation:</p>
              <p>
                We are committed to providing a human-centred, customized
                service that meets each client&apos;s unique needs.
              </p>
              <p className="font-bold text-[#8c52ff] mt-2">Engagement:</p>
              <p>
                We aim to craft content that encourages active interaction and
                fosters real conversations with the audience.
              </p>
              <p className="font-bold text-[#8c52ff] mt-2">Innovation:</p>
              <p>
                We leverage the latest technologies and trends to produce
                visually compelling and relevant content.
              </p>
              <p className="font-bold text-[#8c52ff] mt-2">Quality:</p>
              <p>
                We uphold high standards of excellence in every aspect of our
                work, from content creation to social media management.
              </p>
            </div>
            <p>
              Join us on this journey, and let&apos;s make your brand the talk
              of the town!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;