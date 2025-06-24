'use client'
import { LuMoveLeft, LuMoveRight, LuQuote } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialSlides } from '../data'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="rounded-lg bg-default-100 dark:bg-default-50">
          <div className="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat p-10 dark:bg-[url('../images/other/bg-lines-2-dark.png')] md:p-20">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Our Testimonials
              </span>
              <h2 className="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
                Explore the feedback from our clients.
              </h2>
            </div>
            <div className="relative">
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
                    <SwiperSlide key={idx}>
                      <div className="mx-auto max-w-4xl text-center">
                        <div className="p-6">
                          <LuQuote className="mx-auto h-9 w-9 text-default-400" />
                          <p className="mb-6  mt-4 md:text-xl">
                            &quot;{slide.description}&quot;
                          </p>
                          <Image
                            alt="slideImg"
                            src={slide.image}
                            className="mx-auto h-14 w-14 rounded-full"
                          />
                          <h3 className="mt-5 text-xl font-medium text-default-950">
                            {slide.name}
                          </h3>
                          <p className="text-base">{slide.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="absolute start-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="testimonials-button-prev">
                  <div className="relative">
                    <span className="absolute -start-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary" />
                    <LuMoveLeft className="h-10 w-10 text-default-950" />
                  </div>
                </div>
              </div>
              <div className="absolute end-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2">
                <div className="testimonials-button-next">
                  <div className="relative">
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
