'use client'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'

import 'swiper/css'
import Image from 'next/image'

const brandImages = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
]
const Brands = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <p className="mb-10 text-center text-base font-medium text-default-950">
          We&nbsp;ve assisted more than 250 startups in expanding their
          businesses
        </p>

        <Swiper
          modules={[Thumbs, FreeMode]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop
          centeredSlides
          id="testimonial_directory"
        >
          {brandImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image alt="slide-image" src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Brands
