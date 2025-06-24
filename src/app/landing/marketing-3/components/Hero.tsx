import marketing1 from '@/assets/images/landing/marketing-3/img-1.jpg'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="px-4 md:px-10">
        <div
          className="overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marketing1.src})` }}
        >
          <div className="rounded-2xl bg-black/60">
            <div className="container">
              <div className="relative p-6">
                <div className="flex h-full items-center justify-center py-36">
                  <div className="relative mx-auto max-w-3xl text-center">
                    <span className="rounded-md bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white">
                      AI knowledge hub
                    </span>
                    <h1 className="mt-10 text-3xl font-medium text-white md:text-5xl/snug">
                      Build Quickly, Earn More
                    </h1>
                    <p className="mx-auto mt-5 w-3/4 text-base text-white/80">
                      Leverage customer data to create exceptional and robust
                      product experiences that drive conversions.
                    </p>
                    <div className="mt-10 flex justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
