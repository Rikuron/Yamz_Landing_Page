import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-md p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Image 
              src="https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751098209/yamz_logo_and_wordmark_alzobs.png" 
              alt="Logo" 
              width={150} 
              height={50} 
              className="w-auto h-auto"
            />
          </div>
          <nav className="nav-links">
            <ul className="flex justify-center items-center gap-11">
              <li className="font-montserrat-bold text-lg">Home</li>
              <li className="font-montserrat-bold text-lg">About</li>
              <li className="font-montserrat-bold text-lg">Services</li>
              <li className="font-montserrat-bold text-lg">Products</li>
              <li className="font-montserrat-bold text-lg">Contact</li>
            </ul>
          </nav>
          <div className="social-links flex justify-center items-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=61561472634936" target="_blank" rel="noopener noreferrer"> 
              <FaFacebook className="text-3xl text-[#3498db]" /> 
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yamzcomputerz@gmail.com&su=Feedback&body=Hello%20Yamz%20Computer%20Solutions%20Team," target="_blank" rel="noopener noreferrer"> 
              <FaEnvelope className="text-3xl text-[#3498db]" /> 
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;