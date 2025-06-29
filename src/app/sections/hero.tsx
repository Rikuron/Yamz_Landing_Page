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
        <source src="images/circuit_background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-y-4">
        <h1 className="text-5xl font-bold text-[#f6f6f6] font-galindo">YAMZ Computer Solutions</h1>
        <p className="text-2xl text-white">Where Technology Meets Reliability</p>
      </div>
      <div className="absolute bottom-25 left-1/2 -translate-x-1/2 z-10">
        <FloatingElement>
          <Image src="/images/arrow.png" alt="arrow" width={90} height={90} />
        </FloatingElement>
      </div>
    </div>
  )
}

export default Hero;