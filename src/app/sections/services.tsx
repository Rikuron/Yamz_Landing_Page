"use client"

import React from 'react'
import Image from 'next/image'
import services from '@/app/data/services.json'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'

const Services = () => {
  return (
    <div className="px-15 pb-15 pt-20 text-center bg-gradient-to-b from-[#112d60] to-white">
      <div className="container mx-auto">
        <div className="inline-block">
          <h2 className="text-4xl font-bold mb-2">We Offer These Services!</h2>
          <div className="h-1.5 -mx-6 bg-gradient-to-r from-blue-500 to-white rounded-full" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper mt-10"
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="px-3 py-10">
              <div className="bg-white rounded-lg shadow-lg text-left h-96 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-3 hover:border-blue-500">
                <div className="rounded-lg">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-48 p-3.5 object-cover rounded-3xl" 
                  />
                </div>
                <div className="px-4">
                  <div className="py-2 px-4 text-[#2f86c1] bg-[#dde4ff] rounded-full w-fit font-bold text-md">
                    {service.name}
                  </div>
                  <p className="text-black text-sm mt-3">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Services