'use client'
import Image from 'next/image'
import React from 'react'
import { FaQuoteRight } from 'react-icons/fa6'
import { LuStar } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

const slideImages = [avatar1, avatar3]

const TestimonialSlider = () => {
  return (
    <Swiper loop>
      {slideImages.map((image, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="relative">
              <div className="relative rounded-md bg-white p-4 dark:bg-default-50">
                <div className="flex items-center gap-5">
                  <Image
                    alt="image"
                    src={image}
                    className="w-12 rounded-full"
                  />
                  <div>
                    <h6 className="text-sm text-default-600">
                      Very convenient to use project manager!
                    </h6>
                    <p className="mt-2">
                      <span className="flex items-center gap-1 text-base text-yellow-300">
                        {Array.from(new Array(4)).map((_val, idx) => {
                          return (
                            <LuStar
                              key={idx}
                              data-lucide="star"
                              className="h-5 w-5 fill-yellow-300"
                            />
                          )
                        })}
                        <LuStar className="h-5 w-5" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 end-1">
                  <FaQuoteRight className="text-2xl text-orange-500/20" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
