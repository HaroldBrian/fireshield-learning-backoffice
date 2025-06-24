'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialSlides } from '../data'
import { LuMoveLeft, LuMoveRight, LuStar } from 'react-icons/lu'
import { FreeMode, Navigation } from 'swiper/modules'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="me-0 lg:mx-auto">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="my-5 text-4xl font-medium capitalize text-default-950">
              We&apos;re trusted by leading companies.
            </h2>
            <p className="text-base">
              A static website stores a unique file for every page of a static
              website. Each time that page is requested, the same content is
              returned.
            </p>
            <div className="mt-10 flex items-center gap-10">
              <div className="text-center">
                <h2 className="text-4xl font-medium text-default-950">
                  5,000+
                </h2>
                <p className="mt-2 text-base">Customer Reviews</p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-medium text-default-950">99.9%</h2>
                <p className="mt-2 text-base">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div>
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
                      <div className="rounded-xl border border-default-200 p-6">
                        <div className="flex items-center gap-6">
                          <div>
                            <Image
                              alt="testimonial-image"
                              width={64}
                              height={64}
                              src={slide.image}
                              className="h-16 rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-medium text-default-950">
                              {slide.name}
                            </h3>
                            <p className="mt-1 text-base">{slide.position}</p>
                          </div>
                        </div>
                        <p className="mt-5 text-lg">{slide.description}</p>
                        <div className="mt-5 flex items-center gap-2">
                          {Array.from(new Array(4)).map((_val, idx) => {
                            return (
                              <LuStar
                                key={idx}
                                className="size-5 fill-yellow-300 text-yellow-300"
                              />
                            )
                          })}
                          <LuStar className="size-5 text-yellow-300" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="absolute -bottom-14 start-0 z-10">
                <div className="relative flex w-full items-center justify-end gap-5">
                  <div className="testimonials-button-prev cursor-pointer">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-100 text-default-900 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
                      <LuMoveLeft className="size-6" />
                    </div>
                  </div>
                  <div className="testimonials-button-next cursor-pointer">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-default-300 bg-default-100 text-default-900 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
                      <LuMoveRight className="size-6" />
                    </div>
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

export default Testimonials
