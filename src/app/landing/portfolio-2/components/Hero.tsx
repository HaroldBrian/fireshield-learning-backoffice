import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import portfolio10 from '@/assets/images/landing/portfolio-2/img-10.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center overflow-hidden bg-gradient-to-t from-red-600/40 via-violet-600/40 to-blue-600/40 py-10 dark:from-gray-700 dark:via-gray-900 dark:to-black"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div>
            <span className="rounded-md border border-white/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950">
              App Designer
            </span>
            <h2 className="mt-3 text-5xl/snug font-medium text-default-950">
              I&apos;m Diego, an App Designer.
            </h2>
            <p className="mt-4 text-base">
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
              Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing,
              dui.
            </p>
            <div className="mt-8 max-w-xl rounded-md bg-default-50">
              <form className="flex w-full items-center justify-between">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-0 bg-transparent px-4 py-3 text-base text-default-950 focus:outline-none focus:ring-0"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button className="me-2 rounded-md border-0 bg-primary/90 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary">
                  <div className="flex items-center justify-center gap-1">
                    <span>Submit</span>
                  </div>
                </button>
              </form>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <Image
                  className="inline-block size-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                  src={avatar1}
                  alt="Image Description"
                />
                <Image
                  className="inline-block size-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                  src={avatar2}
                  alt="Image Description"
                />
                <Image
                  className="inline-block size-12 rounded-full bg-white shadow-md ring-2 ring-default-50"
                  src={avatar3}
                  alt="Image Description"
                />
                <button className="size-12 rounded-full border border-primary/50 bg-primary/30 font-medium text-primary shadow-md backdrop-blur-md">
                  80+
                </button>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-medium text-default-950">200+</h2>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="lg:-mb-10">
            <Image
              alt="portfolio10"
              src={portfolio10}
              className="mx-auto xl:h-full xl:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
