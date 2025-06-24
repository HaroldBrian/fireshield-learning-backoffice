import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'

import photography2 from '@/assets/images/landing/photography/img-2.jpg'
import photography3 from '@/assets/images/landing/photography/img-3.jpg'
import photography5 from '@/assets/images/landing/photography/img-5.jpg'
import photography6 from '@/assets/images/landing/photography/img-6.jpg'
import photography9 from '@/assets/images/landing/photography/img-9.jpg'
import photography10 from '@/assets/images/landing/photography/img-10.jpg'
import Image from 'next/image'

const portfolioImages = [
  photography3,
  photography2,
  photography6,
  photography10,
]
const portfolioImages2 = [
  photography9,
  photography2,
  photography5,
  photography10,
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-4xl font-medium text-default-950">
                Our Portfolio
              </h2>
              <p className="text-base">
                A visual exhibition of remarkable animal moments captured in
                time. Each image narrates a distinct story, exalting the core
                and vitality of animals in their full splendor.
              </p>
            </div>
          </div>
          <div>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 border border-default-200 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="relative m-auto flex gap-8 overflow-hidden">
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
            {portfolioImages.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
          >
            {portfolioImages2.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
        </div>
        <div className="marquee--reverse m-auto mt-8 flex gap-8 overflow-hidden">
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
            {portfolioImages.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]"
          >
            {portfolioImages2.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Link
          href=""
          className="inline-flex items-center justify-center gap-2 rounded border border-default-200 px-6 py-2 text-base font-medium text-default-950 transition-all duration-300 hover:bg-primary hover:text-default-950"
        >
          View More
          <LuMoveRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
