import React from 'react'
import Image from 'next/image'
import { Service } from '../data/services'

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
  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])
  
  if (!isOpen || !service) return null

  // Close modal when clicking on overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

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
                navigation={true}
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
                        <p className="text-sm text-gray-600">{cardImage.imageDescription}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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