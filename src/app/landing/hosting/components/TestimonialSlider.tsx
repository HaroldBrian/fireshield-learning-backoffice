'use client'
import Image from 'next/image'
import { LuMoveLeft, LuMoveRight, LuStar } from 'react-icons/lu'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLayoutContext } from '@/context'

import bgLine from '@/assets/images/other/bg-lines-2.png'
import bgLineDark from '@/assets/images/other/bg-lines-2-dark.png'

import { testimonialSlides } from '../data'

import 'swiper/css'
import 'swiper/css/navigation'

const TestimonialSlider = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section id="testimonial">
      <div className="container">
        <div className="bg-default-100 dark:bg-default-50">
          <div
            className="bg-cover bg-no-repeat py-20"
            style={{
              backgroundImage: `url(${themeMode == 'light' ? bgLine : bgLineDark})`,
            }}
          >
            <div className="relative">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
                  Explore the feedback from our clients.
                </h2>
              </div>
              <Swiper
                modules={[Thumbs, FreeMode, Navigation]}
                loop
                navigation={{
                  nextEl: '.testimonials-button-next',
                  prevEl: '.testimonials-button-prev',
                }}
                className="testimonials relative"
              >
                {testimonialSlides.map((slide, idx) => {
                  return (
                    <SwiperSlide className="swiper-slide" key={idx}>
                      <div className="mx-auto max-w-4xl text-center">
                        <div className="p-6">
                          <Image
                            alt="slide-image"
                            src={slide.image}
                            className="mx-auto h-14 w-14 rounded-full"
                          />
                          <h3 className="mt-5 text-xl font-medium text-default-950">
                            {slide.name}
                          </h3>
                          <p className="text-base">{slide.location}</p>
                          <p className="mt-4 text-default-800 md:text-2xl">
                            &quot;{slide.description}&quot;
                          </p>
                          <div className="mt-4 flex items-center justify-center gap-2">
                            {Array.from(new Array(5)).map((_val, idx) => {
                              return (
                                <LuStar
                                  key={idx}
                                  className="h-5 w-5 stroke-yellow-300"
                                />
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="absolute start-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2">
                <div className="testimonials-button-prev">
                  <div className="relative cursor-pointer">
                    <span className="absolute -start-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary" />
                    <LuMoveLeft className="h-10 w-10 text-default-950" />
                  </div>
                </div>
              </div>
              <div className="absolute end-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="testimonials-button-next">
                  <div className="relative cursor-pointer">
                    <span className="absolute -end-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary" />
                    <LuMoveRight className="h-10 w-10 text-default-950" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
