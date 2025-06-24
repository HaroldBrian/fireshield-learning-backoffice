'use client'
import { LuArrowRight } from 'react-icons/lu'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import { portfolioSlides } from '../data'

import 'swiper/css'
import Image from 'next/image'

const PortfolioSwiper = () => {
  return (
    <section id="portfolio" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Case Studies
          </h2>
          <p className="mt-5 text-lg">
            We assist brands and enterprises in distinguishing themselves in the
            evolving digital terrain.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[FreeMode]}
            loop
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonials_swiper relative"
          >
            {portfolioSlides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden">
                    <div className="group relative overflow-hidden">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          alt="slide-Image"
                          src={slide.image}
                          className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-medium text-default-950 transition-all duration-700 group-hover:text-primary">
                          {slide.title}
                        </h3>
                        <p className="mt-4 text-base text-default-900">
                          {slide.subTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
          >
            Read All Case Studies
            <LuArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSwiper
