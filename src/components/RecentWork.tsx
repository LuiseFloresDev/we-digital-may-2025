// src/components/RecentWork.tsx
import Image from 'next/image';
import React from 'react';

const RecentWork: React.FC = () => {
  return (
    <section id="recentwork" className='bg-[#1e3a5f]'>
      <div className="container mx-auto pb-10 md:pb-20">
        <div className="text-left p-10 md:p-20">
          <p className="uppercase text-md font-bold text-[#a13ef8]">WE CREATE</p>
          <h1
            className="font-dm-serif-display font-bold text-[#ff650e] text-3xl md:text-5xl mb-2"
          >
            Recent
            <span className="text-[#ff650e]"> Work</span>.
          </h1>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10"
        >
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-orange-200 hover:bg-gray-50"
          >
            <Image width={378} height={473}
              alt='Pink Power Run'
              src="/images/pink-power-run.png"
              className="mb-2 rounded border"
            />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">
              Lashes Michele Fara
            </h4>
            <p className="text-gray-600">
              &quot;I highly recommend WE DIGITAL STUDIO Kamila is unmatched, the
              service quality is consistently outstanding, exceeding my
              expectations every time She always completely impresses me with
              her professionalism and her attention to detail Kamila is the best
              in town for sure I can’t wait to having you in my next photography
              shoot and videos making!&quot;
            </p>
            <a
              href="https://www.instagram.com/@lashesmichelefara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c52ff] hover:text-gray-400 mx-0"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            <Image width={378} height={473} alt='Talahm Cream' src="/images/talahm-cream.png" className="mb-2 rounded" />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">
              Sweat Box Fitness Studio
            </h4>
            <p className="text-gray-600">
              &quot;Thank We Digital Studio for the brilliant work, the time, effort,
              and heart you put into this. I&apos;m deeply grateful for the
              commitment, for believing in this cause, and for joining me on
              this journey. I couldn&apos;t appreciate it more! Pink Power Run 🎗&quot;
            </p>
            <a
              href="https://www.instagram.com/@sweatbox.limerick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c52ff] hover:text-gray-400 mx-0"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            <Image width={378} height={473} alt='TS Walltech Feed' src="/images/ts-walltech-feed.png" className="mb-2 rounded" />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">
              Pets & Mimos Petshop and Veterinary Clinic
            </h4>
            <p className="text-gray-600">
              &quot;We Digital Studio excels in social media positioning, helping
              companies stand out. We chose them for their attention to detail
              and deep understanding of our brand. Their expertise in branding
              and colors elevated us to the next level. We Digital Studio feels
              like part of our team, bringing creativity and dedication. We’re
              grateful to have them in Pets e Mimos’ journey.&quot;
            </p>
            <a
              href="https://www.instagram.com/@petsemimos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c52ff] hover:text-gray-400 mx-0"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            <Image width={378} height={473}
              alt='We Sweatr Running Club'
              src="/images/we-sweat-run-post.png"
              className="mb-2 rounded"
            />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">
              O Boticário Jaciara
            </h4>
            <p className="text-gray-600">
              &quot;Professionals connected with customers and company goals, focused
              on generating value for the brand and product, as well as on
              acquiring and retaining customers.&quot;
            </p>
            <a
              href="https://www.instagram.com/@oboticario_jaciara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c52ff] hover:text-gray-400 mx-0"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            <Image width={378} height={473} alt='Inova Health' src="/images/inova-health-post.png" className="mb-2 rounded" />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">SOU+Hering</h4>
            <p className="text-gray-600">
              &quot;Our experience with the services provided was wonderful! A
              committed and innovative professional, with content production
              proposals that made a difference on social media and in the
              company&apos;s sales!&quot;
            </p>
            <a
              href="https://www.instagram.com/hering.jaciara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c52ff] hover:text-gray-400 mx-0"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <div
            className="grid gap-2 bg-white p-6 md:p-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            <Image width={378} height={473} alt='Freddie' src="/images/FEED-FREDDIES-1.png" className="mb-2 rounded" />
            {/* <h4 className="text-xl font-semibold text-[#8c52ff]">Xerosa</h4>
            <p className="text-gray-600">
              &quot;We had excellent results from hiring the services. We increased
              our client base through media advertising and, consequently,
              boosted sales! An innovative company with professionalism and
              commitment! I highly recommend them!&quot;
            </p> */}
          </div>
        </div>
      </div>
    </section>

  );
};

export default RecentWork;