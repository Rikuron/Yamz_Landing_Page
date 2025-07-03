import React from 'react'
import FloatingElement from '../components/FloatingElement'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dgwcnkzdg/video/upload/v1751526596/circuit_background_whmryw.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center h-full gap-y-4">
        <FloatingElement>
          <Image src="https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751526486/yamz_logo_only_wx1vo3.png" alt="Yamz Logo" width={250} height={250}
          className="[filter:drop-shadow(0_0_20px_rgba(59,130,246,0.7))]" />
        </FloatingElement>
        <h1 className="text-5xl font-bold text-[#f6f6f6] font-galindo">YAMZ Computer Solutions</h1>
        <p className="text-2xl text-white text-center">Where Technology Meets Reliability</p>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <FloatingElement delay="0.4s">
            <Image src="https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751384492/arrow_wmktue.png" alt="arrow" width={90} height={90} />
          </FloatingElement>
        </div>
      </div>
    </div>
  )
}

export default Hero;