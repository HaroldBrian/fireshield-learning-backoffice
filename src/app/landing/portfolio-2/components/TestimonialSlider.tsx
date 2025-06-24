'use client'
import portfolio1 from '@/assets/images/landing/portfolio-2/img-1.jpg'
import { LuChevronLeft, LuChevronRight, LuStar } from 'react-icons/lu'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { testimonialSlides } from '../data'

import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Feedback from Our Clients
            </h2>
            <p className="mt-4 text-base">
              Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque
              laoreet, felis eros vehicula leo, at malesuada velit leo quis
              pede.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-default-100 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-2">
              <div>
                <Image
                  alt="portfolio1"
                  src={portfolio1}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="relative col-span-3">
              <Swiper
                modules={[FreeMode, Navigation]}
                navigation={{
                  prevEl: '.testimonials-button-prev',
                  nextEl: '.testimonials-button-next',
                }}
                loop
                className="testimonials relative rounded-md"
              >
                {testimonialSlides.map((slide, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="pt-3">
                        <div className="flex items-center gap-5">
                          <Image
                            alt="portfolio-slide-image"
                            src={slide.image}
                            className="size-16 rounded-full border-4 border-white/20"
                          />
                          <div>
                            <h3 className="text-xl font-medium text-default-950">
                              {slide.name}
                            </h3>
                            <p className="text-base">{slide.position}</p>
                          </div>
                        </div>
                        <p className="mt-5 text-base">
                          &quot;{slide.description}&quot;
                        </p>
                        <div className="mt-5 flex items-center gap-2">
                          {Array.from(new Array(5)).map((_val, idx) => {
                            return (
                              <LuStar
                                key={idx}
                                className="size-5 stroke-yellow-300"
                              />
                            )
                          })}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="relative flex items-center justify-start gap-5 py-4 pe-10">
                <div className="testimonials-button-prev cursor-pointer">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">
                    <LuChevronLeft className="size-6" />
                  </div>
                </div>
                <div className="testimonials-button-next cursor-pointer">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-50 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">
                    <LuChevronRight className="size-6" />
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
