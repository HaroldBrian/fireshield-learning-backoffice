'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogSlides } from '../data'
import Link from 'next/link'
import { FreeMode, Thumbs } from 'swiper/modules'

import 'swiper/css'
import Image from 'next/image'

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Blog
          </span>
          <h2 className="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
            News and Knowledge
          </h2>
          <p className="mt-5  text-base">
            Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices
            urna arcu quis. Tristique potenti vitae in adipiscing. Eu augue cras
            quis nec proin pharetra netus massa.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Thumbs, FreeMode]}
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
            {blogSlides.map((blog, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-5">
                      <Image
                        alt="blog"
                        src={blog.image}
                        className="rounded-lg"
                      />
                    </div>
                    <Link
                      href=""
                      className="text-xl font-medium text-default-950"
                    >
                      {blog.description}
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Blogs
