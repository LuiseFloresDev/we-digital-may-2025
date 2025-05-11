// src/components/Packages.tsx
import Image from "next/image";
import React from "react";

const Packages: React.FC = () => {
  return (
    <div>
      <section className="bg-[#1e3a5f] pt-60 md:pt-16">
        <div className="container mx-auto ">
          <div className="text-center p-10 md:p-20">
            <p className="uppercase text-md font-bold text-[#ff650e]">
              WE OFFER
            </p>
            <h1 className="font-sans font-bold text-[#ff650e] text-3xl md:text-5xl mb-2">
              Services
              <span className="text-[#ff650e]">
                {" "}
                that deliver creative solutions
              </span>
              .
            </h1>
          </div>
        </div>
      </section>
      <section id="seo" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">SEO</p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Search Engine Optimization
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <div className="text-[#f2f0fe] text-lg md:text-xl">
              <p className="mb-4">
                Boost your website&apos;s visibility on search engines and
                attract organic traffic with our expert SEO strategies. What We
                Offer:
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Strategies:</p>
                <p>
                  Tailored SEO Strategies: We create customized plans based on
                  your business goals and target audience.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Keywords:</p>
                <p>
                  Keyword Optimization: Our team researches and identifies the
                  best keywords to help you rank higher in search results.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Backlinks:</p>
                <p>
                  On-Page & Off-Page SEO: We optimize your website&apos;s
                  content and structure while building quality backlinks to
                  enhance your online presence.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Reports:</p>
                <p>
                  Analytics & Reporting: We provide regular performance reports
                  to track progress and refine strategies for maximum impact.
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">
                    Starting from €500.00 monthly
                    </p> */}
            </div>
            <Image
              width={584}
              height={466}
              alt="SEO image"
              src="/images/services-imagens-seo.png"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="paid-ads" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#ffffff]">ADS</p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Paid Digital Advertising
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <Image
              width={584}
              height={466}
              alt="Paid ads image"
              src="/images/services-imagens-paid-ads.png"
              className="rounded-md w-full h-auto"
            />
            <div className="text-[#ffffff] text-lg md:text-xl">
              <p className="mb-4">
                Boost your online presence and reach the right audience with
                precision. What We Offer:
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Targeted ads:</p>
                <p>
                  Through targeted ads on platforms like Google, Facebook, and
                  Instagram, we help you increase visibility, attract qualified
                  traffic, and drive conversions.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Strategies:</p>
                <p>
                  Our tailored strategies ensure that every euro you invest
                  works to grow your brand and deliver measurable results.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Expertise:</p>
                <p>
                  With our expertise, you can focus on your business while we
                  maximize your ROI.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Reports:</p>
                <p>
                  Analytics & Reporting: We provide regular performance reports
                  to track progress and refine strategies for maximum impact.
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2"> */}
              {/* Starting from €500.00 monthly (Flat Fee) */}
              {/* </p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="sm" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">
              SOCIAL MEDIA
            </p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Content Creator & Management
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <div className="text-[#f2f0fe] text-lg md:text-xl">
              <p className="mb-4">
                We help your brand grow by creating engaging content that
                connects with your audience and drives results. We manage your
                social media presence across platforms like Facebook, Instagram,
                Tiktok, Pinterest, WhatsApp Business and LinkedIn. Key Benefits:
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">
                  Boost Brand Visibility:
                </p>
                <p>
                  Tailored content to capture attention and grow your audience.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Increase Engagement:
                </p>
                <p>Posts and stories that spark interaction and loyalty.</p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Drive Conversions:
                </p>
                <p>
                  Turning followers into customers with strategic campaigns.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Consistent Strategy:
                </p>
                <p>A unified voice across all platforms.</p>
                <p className="font-bold text-[#8c52ff] mt-2">Data-Driven:</p>
                <p>Optimized performance through insights and analytics.</p>
                <p>
                  Let us help your brand stand out and grow in the digital
                  world!
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">
                    Feed Packages - Starting from €200.00 monthly
                    </p>
                    <p className="font-bold text-[#8c52ff] mt-2">
                    Feed & Story Packages - Starting from €250.00 monthly
                    </p> */}
            </div>
            <Image
              width={584}
              height={466}
              alt="Social media image"
              src="/images/services-imagens-social-media.png"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="events" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">EVENTS</p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Mobile Photos and Videos
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <Image
              width={584}
              height={466}
              alt="Events image"
              src="/images/services-imagens-events.png"
              className="rounded-md w-full h-auto"
            />
            <div className="text-[#ffffff] text-lg md:text-xl">
              <p className="mb-4">
                We specialize in delivering engaging, authentic content that
                enhances your brand&apos;s visibility and connects with your
                audience. Our real-time event coverage is perfect for social
                media, allowing you to share memorable moments as they happen.
                Why choose us?
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Convenience:</p>
                <p>
                  We provide a seamless experience, focusing on capturing your
                  event while you focus on your guests.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Quality:</p>
                <p>
                  Our professional mobile equipment ensures stunning visuals,
                  making your brand shine.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Engagement:</p>
                <p>
                  Real-time updates keep your audience engaged and excited about
                  your event.
                </p>
                <p>
                  Elevate your next event with our mobile photos and videos, and
                  let us help you create lasting impressions!
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">Starting from €200.00</p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="email" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">EMAIL</p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Email Marketing
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <div className="text-[#f2f0fe] text-lg md:text-xl">
              <p className="mb-4">
                Email Marketing is a powerful tool to nurture leads and drive
                conversions through personalized and automated email campaigns.
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">
                  Boost Brand Visibility:
                </p>
                <p>
                  It allows you to engage with your audience at the right time,
                  providing relevant content that builds relationships and
                  boosts sales.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Increase Engagement:
                </p>
                <p>
                  With strategic messaging tailored to their needs, you can turn
                  potential customers into loyal clients. This efficient,
                  cost-effective approach not only increases engagement but also
                  delivers measurable results, helping you grow your business.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Drive Conversions:
                </p>
                <p>
                  Turning followers into customers with strategic campaigns.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Consistent Strategy:
                </p>
                <p>A unified voice across all platforms.</p>
                <p className="font-bold text-[#8c52ff] mt-2">Data-Driven:</p>
                <p>Optimized performance through insights and analytics.</p>
                <p>
                  Let us help you create impactful campaigns that connect,
                  convert, and retain customers.
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">
                    Starting from €100.00 monthly
                    </p> */}
            </div>
            <Image
              width={584}
              height={466}
              alt="Email marketing image"
              src="/images/services-imagens-email-mkt.png"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="web" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">
              WEBSITE
            </p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Web Design and Development
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <Image
              width={584}
              height={466}
              alt="Web design image"
              src="/images/services-imagens-web.png"
              className="rounded-md w-full h-auto"
            />
            <div className="text-[#ffffff] text-lg md:text-xl">
              <p className="mb-4">
                We create responsive, user-friendly websites tailored to reflect
                your brand and drive business growth.
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Conversion:</p>
                <p>
                  Our goal is to build a website that not only looks great but
                  also converts visitors into customers.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Functionality:</p>
                <p>
                  By focusing on seamless functionality and modern design, we
                  ensure your site works perfectly on all devices and stands out
                  in today’s competitive market.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Engagement:</p>
                <p>
                  Real-time updates keep your audience engaged and excited about
                  your event.
                </p>
                <p>
                  Elevate your next event with our mobile photos and videos, and
                  let us help you create lasting impressions!
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">Starting from €1,000.00</p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="branding" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">DESIGN</p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              Branding and Creative Services
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <div className="text-[#f2f0fe] text-lg md:text-xl">
              <p className="mb-4">
                Our Branding and Creative Services are designed to craft a
                powerful brand identity that stands out in the marketplace.
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Values and Goals:</p>
                <p>
                  We focus on understanding your unique values and goals,
                  ensuring that your brand truly resonates with your audience.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Eye-Catching Visuals:
                </p>
                <p>
                  We develop eye-catching visuals that not only capture
                  attention but also communicate your brand&apos;s story
                  effectively.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">
                  Strategy and Art:
                </p>
                <p>
                  Our creative team combines strategy with artistry to create
                  designs that reflect your brand&apos;s essence.
                </p>
                <p>
                  Let us craft impactful designs that build strong brands,
                  captivate audiences, and drive lasting customer engagement.
                </p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">Starting from €1,000.00</p> */}
            </div>
            <Image
              width={584}
              height={466}
              alt="Design image"
              src="/images/services-imagens-design.png"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="whatsapp" className="bg-[#1e3a5f]">
        <div className="container mx-auto">
          <div className="text-center p-10 md:p-16">
            <p className="uppercase text-md font-bold text-[#f2f0fe]">
              WHATSAPP
            </p>
            <h1 className="font-sans font-bold text-[#8c52ff] text-3xl md:text-5xl mb-2">
              WhatsApp Business Marketing
              <span className="text-[#8c52ff]">.</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
            <Image
              width={584}
              height={466}
              alt="WhatsApp image"
              src="/images/services-imagens-whatsapp.png"
              className="rounded-md w-full h-auto"
            />
            <div className="text-[#ffffff] text-lg md:text-xl">
              <p className="mb-4">
                WhatsApp Business allows you to connect directly with your
                customers, creating a more personal and efficient communication
                channel.
              </p>
              <div className="mb-4">
                <p className="font-bold text-[#8c52ff]">Support:</p>
                <p>
                  With features like automated messages, quick replies, and
                  labels, you can streamline customer interactions and provide
                  instant support.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Strategy:</p>
                <p>
                  By utilizing personalized marketing strategies via WhatsApp,
                  you can send targeted promotions, updates, and reminders,
                  increasing customer engagement and satisfaction.
                </p>
                <p className="font-bold text-[#8c52ff] mt-2">Engagement:</p>
                <p>
                  Imagine reaching your customers where they are most active,
                  fostering stronger relationships and driving sales.
                </p>
                <p>Let’s elevate your business with WhatsApp Business!</p>
              </div>
              {/* <p className="font-bold text-[#8c52ff] mt-2">
                    Starting from €100.00 monthly
                    </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
