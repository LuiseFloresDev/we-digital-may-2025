// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#1e3a5f]">
      <div className="container mx-auto pb-10 md:pb-20">
        <div className="text-center p-10 md:p-20">
          <p className="uppercase text-md font-bold text-[#a13ef8]">WE CONNECT</p>
          <h1
            className="font-bold text-[#ff650e] text-3xl md:text-5xl mb-2"
          >
            Contact us <span className="text-[#ff650e]">to get started</span>.
          </h1>
        </div>
        <div
          className="font-sans text-[#f2f0fe] mx-auto max-w-2xl bg-[#ff650e] p-6 md:p-8 rounded-md"
        >
          <form action="https://formspree.io/f/xzzpqzln" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 text-[#1e293b] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 text-[#1e293b] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="p-2 text-[#1e293b] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-5 py-4 bg-[#a13ef8] hover:bg-[#ff914d] hover:text-[#ffffff] text-[#ffffff] rounded-md text-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;