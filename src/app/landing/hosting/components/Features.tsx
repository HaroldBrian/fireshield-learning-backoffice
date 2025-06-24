import Link from 'next/link'
import Image from 'next/image'
import hosting3 from '@/assets/images/landing/hosting/3.svg'
import hosting5 from '@/assets/images/landing/hosting/5.svg'
import { LuMoveRight } from 'react-icons/lu'

const Features = () => {
  return (
    <>
      <section id="features" className="py-10 lg:py-20">
        <div className="container">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <Image alt="hosting5" src={hosting5} />
            </div>
            <div>
              <span className="text-sm uppercase text-default-950">
                Trusted security
              </span>
              <h2 className="my-5 text-3xl font-medium text-default-950 md:text-4xl">
                Reliable security right from the start.
              </h2>
              <p className="mb-5 text-base text-default-950">
                Lorem ipsum originated from the scrambled, Latin text of
                Cicero&apos;s 1st-century BC work, De Finibus, and has since
                become ubiquitous lorem ipsum.
              </p>
              <Link
                href=""
                className="group relative inline-flex items-center gap-2 text-xl text-primary"
              >
                <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
                Discover more by clicking here
                <LuMoveRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <span className="text-sm uppercase text-default-950">
                Site transfer
              </span>
              <h2 className="my-5 text-3xl font-medium text-default-950 md:text-4xl">
                Seamless migration with lightning speed and zero downtime.
              </h2>
              <p className="mb-5 text-base text-default-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href=""
                className="group relative inline-flex items-center gap-2 text-xl text-primary"
              >
                <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
                Discover more by clicking here
                <LuMoveRight className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <Image alt="hosting3" src={hosting3} className="h-96" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
