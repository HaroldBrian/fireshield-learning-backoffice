'use client'
import { LuMoveLeft, LuMoveRight, LuStar } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import Image from 'next/image'

import marketing9 from '@/assets/images/landing/marketing-2/img-9.png'

import { testimonialSlides } from '../data'

import 'swiper/css'

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
              Client Success Stories
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="me-0 lg:mx-auto">
            <div className="relative z-10">
              <div className="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-primary/10 bg-primary/5  lg:block" />
              <Image
                alt="marketing9"
                src={marketing9}
                className="mx-auto rounded-full"
              />
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[FreeMode, Navigation]}
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
                    <div className="pb-10 sm:p-10">
                      <div className="mt-5 flex items-center gap-6">
                        <div>
                          <Image
                            alt="slide-image"
                            height={56}
                            width={56}
                            src={slide.image}
                            className="h-14 rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-default-950">
                            {slide.name}
                          </h3>
                          <p className="mt-2 text-base">{slide.position}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-lg">
                        &quot;{slide.description}&quot;
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        {Array.from(new Array(5)).map((_val, idx) => {
                          return (
                            <LuStar
                              key={idx}
                              data-lucide="star"
                              className="h-5 w-5 fill-yellow-400 stroke-yellow-400"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="absolute -bottom-8 z-10 sm:start-10">
              <div className="relative flex items-center justify-end gap-5 pe-10">
                <div className="testimonials-button-prev cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50">
                    <LuMoveLeft className="h-6 w-6 stroke-default-950" />
                  </div>
                </div>
                <div className="testimonials-button-next cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50">
                    <LuMoveRight className="h-6 w-6 stroke-default-950" />
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
