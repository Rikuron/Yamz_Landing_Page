"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    const threshold = servicesSection.offsetTop;

    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 bottom-8 right-8 bg-[#3498db] hover:bg-[#4e6fad] text-white rounded-full p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:cursor-pointer transition-all duration-300
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <FaArrowUp className="text-lg" />
    </button>
  )
}

export default GoToTopButton;