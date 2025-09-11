import React from 'react'
import Image from 'next/image'
import { Service } from '../data/services'
import { useModal } from '../hooks/useModal'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

interface ServicePostsProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

const ServicePosts = ({ service, isOpen, onClose }: ServicePostsProps) => {
  const { handleOverlayClick } = useModal({ isOpen, onClose })

  if (!isOpen || !service) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:cursor-pointer text-3xl font-bold transition-colors duration-300 ease-in-out"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Service Description */}
          {service.cardDescription && (
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{service.cardDescription}</p>
            </div>
          )}

          {/* Images Swiper */}
          {service.cardImages && service.cardImages.length > 0 && service.cardImages[0].src && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Previous Work Examples</h3>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: '.custom-next', 
                  prevEl: '.custom-prev',
                }}
                loop={true}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true 
                }}
                modules={[Navigation, Pagination]}
                className="service-gallery-swiper"
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {service.cardImages.map((cardImage, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <Image 
                        src={cardImage.src} 
                        alt={cardImage.imageDescription} 
                        width={400} 
                        height={300} 
                        className="w-full h-48 object-cover" 
                      />
                      <div className="p-4">
                        <p className="text-sm text-center text-gray-600">{cardImage.imageDescription}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="custom-prev absolute top-5/12 -translate-y-1/2 z-30 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#2f86c1] hover:text-white transition-all duration-300 group left-2 w-10 h-10 md:left-4 md:w-12 md:h-12">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2f86c1] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                
                <div className="custom-next absolute top-5/12 -translate-y-1/2 z-30 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#2f86c1] hover:text-white transition-all duration-300 group right-2 w-10 h-10 md:right-4 md:w-12 md:h-12">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2f86c1] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Swiper>
            </div>
          )}

          {/* Placeholder when no images */}
          {(!service.cardImages || !service.cardImages.length || !service.cardImages[0].src) && (
            <div className="text-center py-8">
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500">Previous work examples will be displayed here once images are added.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServicePosts