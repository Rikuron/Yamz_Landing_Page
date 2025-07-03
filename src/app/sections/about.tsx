"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import { FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
  return (
    <div className="container mx-auto pb-15 pt-20 text-center">
      <div className="inline-block">
        <h2 className="text-4xl font-bold mb-2">About Us</h2>
        <div className="h-1.5 -mx-6 bg-gradient-to-r from-blue-500 to-white rounded-full" />
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row px-20 items-center justify-center gap-8 p-8">
            <div className="md:w-1/2">
              <Image src="https://res.cloudinary.com/dgwcnkzdg/image/upload/v1751384444/yamz_store_jtqwog.jpg" alt="Yamz Computer Solutions Store" width={500} height={500} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4">Welcome to Yamz Computer Solutions</h3>
              <p>
                We are your trusted partner for all things tech. Based in Iligan City, Philippines, we offer services such as computer and mobile repair, sales, system development, and more! You can find us at
              </p>
              <p className="mt-3">
                <a href="https://maps.app.goo.gl/U2K9WALbfKWe12MG9" target="_blank" className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-100 bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer">
                  <FaMapMarkerAlt className="inline-block mr-2 text-blue-500 -mt-1.5" />
                  Gen Aguinaldo St, Poblacion, Iligan City, 9200 Lanao del Norte
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="flex flex-col md:flex-row px-20 items-center justify-center gap-8 p-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="mb-8 max-w-md">
                Our vision is to be the leading provider of innovative and reliable technology solutions, empowering individuals and businesses to achieve their full potential.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="max-w-md">
                Our mission is to deliver exceptional value to our customers by providing high-quality products, 
                expert services, and unparalleled customer support. We are committed to fostering long-term 
                relationships based on trust, integrity, and a passion for technology.
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default About;