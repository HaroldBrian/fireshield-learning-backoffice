'use client'
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'

import 'swiper/css'
import Image from 'next/image'

const brands = [
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
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-6">
          <div className="xl:col-span-2">
            <h2 className="text-3xl font-medium text-default-950 md:text-4xl/tight">
              Preferred Partner for Major Corporations
            </h2>
          </div>
          <div className="xl:col-span-4">
            <Swiper
              modules={[Thumbs, FreeMode, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides
              loop
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
            >
              {brands.map((brand, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Image alt="brand-image" src={brand} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
