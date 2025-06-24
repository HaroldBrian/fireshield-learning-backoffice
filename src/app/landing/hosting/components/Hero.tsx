import hosting4 from '@/assets/images/landing/hosting/4.svg'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-default-100 py-20 dark:bg-default-50 lg:py-44"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div>
            <span className="truncate border border-default-200 px-3 py-2 text-xs text-default-950 md:text-base">
              Limited-time offer until Friday: $1.99 per month
            </span>
            <h2 className="mt-5 text-4xl font-medium text-default-950 md:text-6xl/tight">
              Place your trust in the world&apos;s no.1 web hosting provider.
            </h2>
            <p className="my-6 text-base">
              Already have a website? Revive it with our industry-leading load
              times.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="relative z-20 w-60">
                <div className="group">
                  <div className="w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                    <Link
                      className="flex h-[68px] items-center justify-center bg-primary p-6 text-white transition-all duration-200 md:text-xl"
                      href=""
                    >
                      $3.95 per month
                    </Link>
                  </div>
                  <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image alt="hosting4" src={hosting4} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
