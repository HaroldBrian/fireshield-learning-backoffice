import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import portfolio1 from '@/assets/images/landing/portfolio/img-1.jpg'
import portfolio2 from '@/assets/images/landing/portfolio/img-2.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-l from-primary/5 via-primary/0 to-primary/10 bg-cover py-44"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium text-default-950 md:text-5xl/tight">
              Enhance Your Online Presence with Our Expertise
            </h2>
            <p className="mt-6 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-base text-white transition-all duration-300 hover:bg-primary-700"
              >
                Read More
                <LuMoveRight className="h-6 w-6" />
              </Link>
              <div className="flex -space-x-2">
                <Image
                  className="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-white"
                  src={avatar1}
                  alt="Image Description"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-white"
                  src={avatar2}
                  alt="Image Description"
                />
                <Image
                  className="inline-block h-12 w-12 rounded-full bg-white shadow-md ring-2 ring-white"
                  src={avatar3}
                  alt="Image Description"
                />
                <button className="h-12 w-12 rounded-full border border-primary/50 bg-primary/30 font-medium text-primary shadow-md backdrop-blur-md">
                  80+
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="flex justify-center">
                <div className="inline-block rounded-xl border border-primary/10 bg-primary/5 p-6">
                  <Image
                    alt="portfolio-image"
                    src={portfolio1}
                    className="mx-auto rounded-md xl:h-[500px] xl:w-full"
                  />
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="absolute -start-10 top-10">
                  <div className="inline-block rounded-xl border-4 border-primary/20 bg-white p-4 drop-shadow-md dark:bg-default-50">
                    <h2 className="text-2xl font-medium text-default-950">
                      $6,726&nbsp;
                      <span className="text-base font-medium text-primary">
                        +12.5%
                      </span>
                    </h2>
                    <p className="mt-1 text-base">Total Revenue</p>
                  </div>
                </div>
                <div className="absolute -end-12 bottom-10 top-auto rounded-md bg-white">
                  <Image
                    alt="portfolio-image"
                    width={198}
                    height={112}
                    src={portfolio2}
                    className="h-28 rounded-md border-4 border-primary/20 drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
