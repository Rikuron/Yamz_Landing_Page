"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { services, Service } from '../data/services'
import ServicePosts from '../components/servicePosts'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: Service) => {
    if (!service.hasModal) return
    
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <section id="services" className="px-15 pb-15 pt-20 text-center bg-gradient-to-b from-[#112d60] to-white">
        <div className="mx-auto">
          <div className="inline-block">
            <h2 className="text-4xl font-bold mb-2">We Offer These Services!</h2>
            <div className="h-1.5 -mx-6 bg-gradient-to-r from-blue-500 to-white rounded-full" />
          </div>
          <div className="relative mt-10 px-0 md:px-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[Navigation, Pagination]}
              className="services-swiper"
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="px-3 py-10">
                  <div 
                    className={`bg-white rounded-lg shadow-lg text-left h-96 ${service.hasModal ? 'cursor-pointer hover:scale-105' : ''} transition-all duration-300 hover:border-3 hover:border-blue-500`}
                    onClick={() => handleServiceClick(service)}
                  >
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

            {/* Custom Navigation Arrows with responsive Tailwind classes */}
            <div className="custom-prev absolute  top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#2f86c1] hover:text-white transition-all duration-300 group -left-10 w-10 h-10 md:left-0 md:w-12 md:h-12">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2f86c1] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            <div className="custom-next absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#2f86c1] hover:text-white transition-all duration-300 group -right-10 w-10 h-10 md:right-0 md:w-12 md:h-12">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2f86c1] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServicePosts 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Services