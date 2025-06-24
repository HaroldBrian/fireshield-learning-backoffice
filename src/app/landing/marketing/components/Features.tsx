import { LuBoxes, LuLayers, LuMonitor, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import marketing4 from '@/assets/images/landing/marketing/img-4.jpg'
import Image from 'next/image'

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Features
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              We want to bring business &amp; the digital world together.
            </h2>
          </div>
        </div>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="grid  grid-cols-1 items-center overflow-hidden rounded-md border border-default-200">
              <div className="group">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuLayers className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-2xl font-medium text-default-950">
                      Product Design
                    </h2>
                    <p className="mb-6 text-base">
                      Lorem ipsum dummy text are used in this design
                    </p>
                    <Link href="" className="text-lg text-default-950">
                      Read More
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group border-y border-default-200">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuMonitor className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-2xl font-medium text-default-950">
                      Marketing Strategy
                    </h2>
                    <p className="mb-6 text-base">
                      Nullam dictum felis eu pede mollis pretium.
                    </p>
                    <Link href="" className="text-lg text-default-950">
                      Read More
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex flex-wrap items-center gap-6 p-6">
                  <div>
                    <LuBoxes className="h-14 w-14 text-default-950" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-2xl font-medium text-default-950">
                      E-Commerce
                    </h2>
                    <p className="mb-6 text-base">
                      Maecenas malesuada. Praesent congue erat at massa.
                    </p>
                    <Link href="" className="text-lg text-default-950">
                      Read More
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image alt="marketing-4" src={marketing4} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
