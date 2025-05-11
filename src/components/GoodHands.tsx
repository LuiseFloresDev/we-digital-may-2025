// src/components/GoodHands.tsx
import Image from "next/image";
import React from "react";

const logos = [
  { src: "/images/freddies-logo.png", alt: "Client 1, Freddies", bgColor: "#ffffff" },
  { src: "/images/talahm-logotipo.png", alt: "Client 2, Talamh", bgColor: "#BAAC9F" },
  { src: "/images/TS-Logotipo.png", alt: "Client 3, TS Walltech", bgColor: "#223056" },
  {
    src: "/images/logotipo-sweet-bread-artisanal.png",
    alt: "Client 4, Sweet Bread Artisanal",
    bgColor: "#ffffff",
  },
  { src: "/images/logo-we-sweat-run.png", alt: "Client 5, We Sweat Running Club", bgColor: "#ffffff" },
  { src: "/images/inova-health-logo.png", alt: "Client 6, Inova Health Solutions", bgColor: "#ffffff" },
  {
    src: "/images/the-hot-rooms-logo-small.jpg",
    alt: "Client 7, The Hot Rooms",
    bgColor: "#000000",
  },
  // Adicione mais logos conforme necessário
];

const squares = [
  { img: "/images/we-stories-1.png", alt: "Story 6, We Digital Studio" },
  { img: "/images/talamh-stories-1.png", alt: "Story 1, Talamh" },
  { img: "/images/freddies-stories-1.jpg", alt: "Story 2, Freddies" },
  { img: "/images/ts-stories-2.jpg", alt: "Story 10, TS Walltech" },
  { img: "/images/inova-stories-1.png", alt: "Story 3, Inova Health Solutions" },
  { img: "/images/we-stories-2.png", alt: "Story 7, We Sweat Running Club" },
  { img: "/images/ts-stories-1.jpg", alt: "Story 4, TS Walltech" },
  { img: "/images/freddies-stories-2.jpg", alt: "Story 5, Freddies" },
  { img: "/images/we-stories-3.png", alt: "Story 8, We Digital Studio" },
  { img: "/images/talamh-stories-2.png", alt: "Story 9, Talamh" },

  // Adicione mais quadrados/imagens conforme necessário
];

const GoodHands: React.FC = () => {
  return (
    <section id="good-hands" className="bg-[#1e3a5f]">
      <div className="container mx-auto pb-4 md:pb-8">
        <div className="text-left pt-8 md:pt-16 pb-6 md:pb-12 pl-20 md:pl-24">
          <p className="text-lg md:text-2xl font-bold text-[#ffffff]">
            You are in good hands:
          </p>
        </div>

        {/* Carrossel de Logos */}
        <div className="relative bg-[#1e3a5f] overflow-hidden py-2 md:py-4">
          <div className="carousel-track flex w-max animate-carousel gap-4">
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-6 rounded-md"
                style={{
                  backgroundColor: logo.bgColor || "transparent",
                }}
              >
                <Image
                  width={158}
                  height={40}
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de Quadrados com Imagens (sentido contrário) */}
        <div className="w-full overflow-hidden mt-12">
          <div className="flex w-[400%] md:w-[200%] animate-carousel-reverse gap-4">
            {/* Primeira metade */}
            {squares.map((square, idx) => (
              <div
                key={"sq1-" + idx}
                className="rounded-md overflow-hidden flex items-center justify-center"
              >
                {square.img && (
                  <Image
                    src={square.img}
                    alt={square.alt}
                    width={1080}
                    height={1920}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Estilos do carrossel */}
      <style jsx>{`
        .carousel-track {
          animation: carousel-scroll 50s linear infinite;
        }
        @keyframes carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-carousel-reverse {
          animation: carousel-scroll-reverse 70s linear infinite;
        }
        @keyframes carousel-scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};
export default GoodHands;
