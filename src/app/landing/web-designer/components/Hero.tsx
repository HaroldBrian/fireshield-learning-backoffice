'use client'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import web1 from '@/assets/images/landing/web-designer/img.png'
import web11 from '@/assets/images/landing/web-designer/img-11.png'
import web11Dark from '@/assets/images/landing/web-designer/img-11-dark.png'
import { useLayoutContext } from '@/context'
import Image from 'next/image'

const Hero = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden  bg-cover bg-no-repeat py-28"
      style={{
        backgroundImage: `url(${themeMode == 'light' ? web11.src : web11Dark.src})`,
      }}
    >
      <div className="bg- absolute inset-0" />
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-base font-medium">I&apos;m Ronald Smith</span>
            <h2 className="mt-3 text-4xl/snug font-medium text-default-900">
              Visual &amp; Web Designer Located in Melbourne.
            </h2>
            <p className="mt-1 text-lg">
              Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
              imperdiet, leo.
            </p>
            <div className="mb-10">
              <div className="max-w-xl rounded-md bg-default-950/20 backdrop-blur-2xl">
                <form className="mt-6 flex w-full items-center justify-between">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border-0 bg-transparent p-4 text-base text-default-950 placeholder:text-default-950 focus:outline-none focus:ring-0"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                  <button className="me-2 rounded-md border-0 bg-primary px-6 py-2 text-base font-semibold text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white">
                    <div className="flex items-center justify-center gap-1">
                      <span>Submit</span>
                    </div>
                  </button>
                </form>
              </div>
              <small className="mb-6 mt-2 text-sm">
                Don&apos;t miss out on your favourite username.
              </small>
            </div>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-white backdrop-blur-3xl transition-all duration-300 hover:border-primary hover:bg-primary-700"
            >
              Read More
              <LuMoveRight className="size-6" />
            </Link>
          </div>
          <div className="lg:ms-auto">
            <Image src={web1} alt="web-1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
