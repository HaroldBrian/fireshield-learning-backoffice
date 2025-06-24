import Link from 'next/link'
import Image from 'next/image'
import { LuArrowUpRight, LuComponent, LuLayers } from 'react-icons/lu'
import agency3 from '@/assets/images/landing/agency/img-3.jpg'
import agency4 from '@/assets/images/landing/agency/img-4.jpg'
import agency5 from '@/assets/images/landing/agency/img-5.jpg'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              About
            </span>
            <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
              About Us
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <div>
                <Image
                  alt="agencyImg"
                  src={agency3}
                  className="h-full max-w-full rounded-lg"
                />
              </div>
              <div>
                <Image
                  alt="agencyImg"
                  src={agency4}
                  className="h-full max-w-full rounded-lg"
                />
              </div>
            </div>
            <div>
              <Image
                alt="agencyImg"
                src={agency5}
                className="h-full max-w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-default-950">
              The Best of Product Your Business
            </h2>
            <div className="mt-10  flex justify-center gap-6">
              <div>
                <LuComponent className="h-10 w-10 text-default-950" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">
                  High Standerd
                </h2>
                <p className="mt-4 text-base">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="my-10 flex justify-center gap-6">
              <div>
                <LuLayers className="h-10 w-10 text-default-950" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">
                  Ease of Communication
                </h2>
                <p className="mt-4 text-base">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <Link
              href=""
              className="inline-flex justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-500 hover:bg-primary hover:text-white"
            >
              View All Our News
              <LuArrowUpRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
