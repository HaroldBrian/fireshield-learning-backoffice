import agency4 from '@/assets/images/landing/agency-2/img-4.jpg'
import { LuChevronRight, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  'Graphic Design',
  'Web Design',
  'Digital Marketing',
  'UI/UX Design',
]
const Services = () => {
  return (
    <section id="service" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 xl:grid-cols-2">
          <div>
            <div className="mb-10 flex items-end justify-between">
              <div className="mx-auto max-w-lg text-center lg:text-start xl:ms-0">
                <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  Services
                </span>
                <p className="mt-5 text-lg font-medium text-default-950">
                  We help you to go online and increase your conversion rate
                  Better design for your digital products.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-md rounded-md border border-default-200 xl:ms-0">
                <div className="divide-y divide-default-200">
                  {services.map((service, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-6"
                      >
                        <h3 className="text-2xl font-medium text-default-950">
                          {service}
                        </h3>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-default-200 bg-white/5 text-default-950 transition-all duration-200 hover:bg-primary hover:text-white">
                          <LuChevronRight className="h-6 w-6" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-6">
            <Image
              alt="serviceImg"
              src={agency4}
              className="h-full w-full rounded-xl"
            />
            <div className="top-auto md:absolute md:bottom-10 md:start-10 xl:-start-28">
              <div className="group max-w-sm rounded-lg bg-default-100 p-6 dark:bg-default-50">
                <h3 className="mb-3 text-2xl font-medium text-default-950">
                  Development
                </h3>
                <p className="mb-5 text-base">
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada
                  adipiscing, dui.{' '}
                </p>
                <Link href="" className=" text-lg font-medium text-default-950">
                  Read More
                  <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
