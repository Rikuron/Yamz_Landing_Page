"use client";

import { useState, useEffect } from 'react';

export const useGoToTopButton = (thresholdElementId: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const thresholdElement = document.getElementById(thresholdElementId);
    if (!thresholdElement) return;

    const threshold = thresholdElement.offsetTop;

    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [thresholdElementId]);

  return { isVisible };
};