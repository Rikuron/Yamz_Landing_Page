"use client";

import { useState, useEffect } from 'react';

interface NavigationItem {
  id: string;
}

export const useScrollActivity = (navigationItems: NavigationItem[]) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Handle active section highlighting
      let currentSectionId = 'home';
      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is at or above the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = item.id;
            break;
          }
        }
      }
      
      // Override for the very top of the page
      if (window.scrollY < 100) {
        currentSectionId = 'home';
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, activeSection };
};