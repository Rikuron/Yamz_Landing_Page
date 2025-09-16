"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaFacebook, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { useScrollActivity } from '../hooks/useScrollActivity';

// Navigation items
const navigationItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Products', href: '#products', id: 'products' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll activity hook
  const { scrolled, activeSection } = useScrollActivity(navigationItems);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // Smooth scroll to the target section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.substring(href.indexOf('#') + 1);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 35;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close menu on navigation
  }

  return (
    <>
      {/* Desktop Menu */}
      <header className={`fixed top-0 left-0 right-0 w-full z-40 shadow-md p-4 transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo ml-6 md:ml-0">
            <Image 
              src="https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751098209/yamz_logo_and_wordmark_alzobs.png" 
              alt="Logo" 
              width={150} 
              height={50} 
              className="w-32 md:w-auto h-auto"
            />
          </div>
          <nav className="nav-links">
            <ul className="md:flex lg:flex hidden justify-center items-center gap-10">
              {navigationItems.map((item, index) => (
                <li key={index} className="font-montserrat-bold text-lg">
                  <a 
                    href={item.href} 
                    onClick={handleNavClick} 
                    className={`p-2 px-4 rounded-full transition-all duration-300
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-[#3498db] to-[#4e6fad] text-white'
                      : scrolled
                        ? 'text-black hover:bg-gray-200'
                        : 'text-white hover:bg-white/20'
                    }`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social-links md:flex lg:flex hidden justify-center items-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=61561472634936" target="_blank" rel="noopener noreferrer"> 
              <FaFacebook className="text-3xl text-[#3498db]" /> 
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yamzcomputerz@gmail.com&su=Feedback&body=Hello%20Yamz%20Computer%20Solutions%20Team," target="_blank" rel="noopener noreferrer"> 
              <FaEnvelope className="text-3xl text-[#3498db]" /> 
            </a>
          </div>

          <FaBars 
            className="menu-button text-2xl text-[#3498db] md:hidden lg:hidden mr-6 cursor-pointer" 
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </header>
      

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <FaTimes 
            className="absolute top-6 right-6 text-4xl text-white cursor-pointer" 
            onClick={() => setIsMenuOpen(false)} 
          />
          <nav>
            <ul className="flex flex-col items-center gap-10">
              {navigationItems.map((item, index) => (
                <li key={index} className="font-montserrat-bold text-2xl text-white">
                  <a href={item.href} onClick={handleNavClick} className={`block w-64 px-4 py-2 rounded-full transition-all duration-300 text-white text-center
                  ${activeSection === item.id
                    ? 'bg-gradient-to-r from-[#3498db] to-[#4e6fad] border-2 border-white' : 'border-[1px] border-white'}
                  `}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 flex justify-center items-center gap-10">
              <a href="https://www.facebook.com/profile.php?id=61561472634936" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}> 
                  <FaFacebook className="text-5xl text-[#3498db]" /> 
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yamzcomputerz@gmail.com&su=Feedback&body=Hello%20Yamz%20Computer%20Solutions%20Team," target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}> 
                  <FaEnvelope className="text-5xl text-[#3498db]" /> 
              </a>
          </div>
      </div>
    </>
  )
}

export default Header;