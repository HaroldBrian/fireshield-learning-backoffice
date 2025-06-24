'use client'
import charityImg1 from '@/assets/images/landing/charity/img-1.jpg'
import charityImg2 from '@/assets/images/landing/charity/img-2.jpg'
import charityImg3 from '@/assets/images/landing/charity/img-3.jpg'
import charityBackgroundImg from '@/assets/images/landing/charity/bg-1.png'
import backgroundLine from '@/assets/images/other/bg-lines-2.png'
import backgroundLineDark from '@/assets/images/other/bg-lines-2-dark.png'
import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'
import { useLayoutContext } from '@/context'
import Image from 'next/image'

const Hero = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section
      id="home"
      className="relative bg-default-100 bg-cover bg-no-repeat py-24 dark:bg-default-50 lg:py-32"
      style={{
        backgroundImage: `url(${themeMode === 'light' ? backgroundLine.src : backgroundLineDark.src})`,
      }}
    >
      <div className="flex items-center overflow-hidden before:absolute before:inset-0 before:left-[63.67%] before:hidden before:rounded-bl-3xl before:bg-primary/80 lg:before:block">
        <div
          className="absolute -top-44 bottom-0 right-0 w-2/6 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: `url('${charityBackgroundImg}')` }}
        />
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-2xl font-medium text-default-950 sm:text-3xl xl:text-5xl/tight">
                  Let&apos;s Collaborate and Achieve Greatness Together!
                </h2>
                <p className="mt-5  text-base">
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero.{' '}
                </p>
                <div className="mt-10">
                  <Link
                    href=""
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all duration-300 hover:bg-primary-700"
                  >
                    Read More
                    <LuMoveRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="tilt flex items-center gap-4 md:gap-6">
                <div className="flex w-full flex-col gap-4  md:gap-6">
                  <Image
                    alt="charity1"
                    src={charityImg1}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16">
                  <Image
                    alt="charity2"
                    src={charityImg2}
                    className="h-40 w-full rounded-lg object-cover md:h-[278px]"
                  />
                  <Image
                    alt="charity3"
                    src={charityImg3}
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
