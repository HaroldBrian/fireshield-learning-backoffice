'use client'
import { LuArrowUpRight } from 'react-icons/lu'
import Link from 'next/link'
import { useLayoutContext } from '@/context'

import backgroundImg from '@/assets/images/landing/marketing/bg-1.png'
import backgroundDarkImg from '@/assets/images/landing/marketing/bg-1-dark.jpg'

import marketing1 from '@/assets/images/landing/marketing/img-1.jpg'
import marketing2 from '@/assets/images/landing/marketing/img-2.jpg'
import marketing3 from '@/assets/images/landing/marketing/img-3.jpg'
import Image from 'next/image'

const Hero = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-no-repeat py-40"
      style={{
        backgroundImage: `url(${themeMode == 'light' ? backgroundImg.src : backgroundDarkImg.src})`,
      }}
    >
      <div className="container">
        <div className="relative">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="mx-auto max-w-md text-center lg:ms-0 lg:text-start">
              <span className="rounded-md border border-default-300 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-900">
                startups Marketing
              </span>
              <h2 className="my-5 text-4xl font-medium text-default-900 md:text-5xl/tight">
                Digital marketing the new way.
              </h2>
              <p className="text-base">
                We are a creative studio specializing in UI/UX design,
                development and strategy. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <Link
                href=""
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/90 px-6 py-2 text-white transition-all duration-300 hover:bg-primary hover:text-default-950"
              >
                Get Solution
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <div className="tilt flex items-center gap-4 md:gap-6">
                <div className="flex w-full flex-col gap-4  md:gap-6">
                  <Image
                    alt="marketing1"
                    src={marketing1}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16">
                  <Image
                    alt="marketing2"
                    src={marketing2}
                    className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                  />
                  <Image
                    alt="marketing3"
                    src={marketing3}
                    className="h-40 w-full rounded-lg object-cover md:h-[278px]"
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
