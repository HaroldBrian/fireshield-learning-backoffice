'use client'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialSlides } from '../data'
import { LuArrowLeft, LuArrowRight, LuStar } from 'react-icons/lu'
import Image from 'next/image'

import marketing11 from '@/assets/images/landing/marketing/img-11.png'

import 'swiper/css'
import 'swiper/css/navigation'

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              What People Says?
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative">
            <Swiper
              modules={[Thumbs, FreeMode, Navigation]}
              loop
              navigation={{
                prevEl: '.testimonials-button-prev',
                nextEl: '.testimonials-button-next',
              }}
              className="testimonials relative rounded-md"
            >
              {testimonialSlides.map((slide, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="rounded-md bg-default-100 p-6 dark:bg-default-50">
                      <div className="flex items-center gap-5">
                        <Image
                          alt="slide-Image"
                          src={slide.image}
                          className="h-14 w-14 rounded-full border-4 border-white/20"
                        />
                        <h3 className="text-lg font-medium text-default-950">
                          {slide.name}
                        </h3>
                      </div>
                      <p className="mt-4 text-base">{slide.description}</p>
                      <div className="mt-4 flex items-center gap-2">
                        {Array.from(new Array(5)).map((_val, idx) => {
                          return (
                            <LuStar
                              key={idx}
                              className="h-5 w-5 text-yellow-300"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="z-10 hidden pt-6 md:block">
              <div className="relative flex items-center justify-end gap-5 pe-10">
                <div className="testimonials-button-prev cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
                    <LuArrowLeft className="h-7 w-7" />
                  </div>
                </div>
                <div className="testimonials-button-next cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary">
                    <LuArrowRight className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="me-0 lg:mx-auto">
            <div className="relative z-10">
              <div className="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5 lg:block" />
              <Image
                alt="marketing11"
                src={marketing11}
                className="mx-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
