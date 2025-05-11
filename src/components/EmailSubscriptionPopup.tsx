// src/components/EmailSubscriptionPopup.tsx
"use client";

import React, { useEffect, useState } from 'react';

const EmailSubscriptionPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);
  };

  const submitEmail = async () => {
    const email = (document.getElementById("emailSubscribe") as HTMLInputElement).value;
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        closePopup();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      alert("There was an error submitting your email. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      {visible && (
        <div id="popup-overlay" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div id="popup-box" className="bg-[#ff650e] p-5 rounded" style={{ width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <span id="popup-close" onClick={closePopup} className="absolute top-2 right-4 cursor-pointer text-xl">&times;</span>
            <h2 className="font-sans font-bold text-[#1e3a5f] text-xl md:text-2xl mb-2 text-center">
              Join the We Digital Studio <span className="text-[#a13ef8]">Community</span>
            </h2>
            <p className="text-l font-semibold text-[#ffffff] text-center">
              Your Hub for Exclusive Marketing Resources!
            </p>
            <p className="text-[#ffffff] text-center mt-2">
              Subscribe today and receive our 2025 Editorial Calendar instantly.
            </p>
            <input
              type="email"
              id="emailSubscribe"
              placeholder="Enter your email"
              className="font-sans w-80 p-2 border border-gray-300 rounded mb-2"
            />
            <button onClick={submitEmail} className="font-sans px-5 py-2 bg-[#8c52ff] text-white rounded hover:bg-[#a13ef8]">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailSubscriptionPopup;