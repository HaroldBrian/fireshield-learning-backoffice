import portfolio2 from '@/assets/images/landing/portfolio-2/img-2.jpg'
import portfolio3 from '@/assets/images/landing/portfolio-2/img-3.jpg'
import portfolio4 from '@/assets/images/landing/portfolio-2/img-4.jpg'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'
const Projects = () => {
  return (
    <section id="project" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Project
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Recent Endeavors
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="group relative">
            <Image
              alt="portfolio2"
              src={portfolio2}
              className="h-full w-full rounded-xl"
            />
            <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
              <div className="p-6 text-center">
                <h2 className="text-3xl font-medium text-white">
                  Branding Identity
                </h2>
                <p className="mt-2 text-base text-white">Branding</p>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative">
              <Image
                src={portfolio3}
                alt="portfolio3"
                className="h-full w-full rounded-xl"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                <div className="p-6 text-center">
                  <h2 className="text-3xl font-medium text-white">
                    The Space Needle
                  </h2>
                  <p className="mt-2 text-base text-white">Branding</p>
                </div>
              </div>
            </div>
            <div className="group relative mt-5">
              <Image
                src={portfolio4}
                alt="portfolio4"
                className="h-full w-full rounded-xl"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
                <div className="p-6 text-center">
                  <h2 className="text-3xl font-medium text-white">
                    Emergency Response and Cleanup
                  </h2>
                  <p className="mt-2 text-base text-white">Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <div className="inline-block">
            <Link
              href=""
              className="mt-6 flex items-center justify-center gap-2 rounded-md border border-default-300 px-6 py-2 text-base text-default-950 transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              All Project <LuMoveRight className="size-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
