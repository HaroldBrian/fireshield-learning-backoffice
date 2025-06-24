import Link from 'next/link'
import { services } from '../data'
import { LuMoveRight } from 'react-icons/lu'

import company2 from '@/assets/images/landing/company/img-2.jpg'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <section id="services" className="py-10 lg:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
              Comprehensive Plan
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-default-100 text-center dark:bg-default-50"
                >
                  <div className="p-6">
                    <div className="flex justify-center">
                      <Icon className="h-12 w-12 text-default-950" />
                    </div>
                    <h3 className="mb-4 mt-6 text-xl font-medium text-default-950 md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mb-4  md:text-base">{service.description}</p>
                    <Link
                      href=""
                      className="inline-flex items-center gap-2 text-lg font-medium text-default-950"
                    >
                      Read more <LuMoveRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-default-100 py-10 dark:bg-default-50 lg:py-20">
        <div className="container">
          <div className="relative z-20">
            <div className="hidden xl:block">
              <div className="before:absolute before:-end-10 before:-top-10 before:-z-10 before:h-24 before:w-24 before:bg-[url('../images/landing/company/dot.svg')] after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:h-24 after:w-24 after:bg-[url('../images/landing/company/dot.svg')]" />
            </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div>
                <Image alt="company2" src={company2} className="rounded-lg" />
              </div>
              <div>
                <div className="rounded-lg bg-white p-10 dark:bg-default-100">
                  <h2 className="text-3xl font-medium text-default-950">
                    Transforming Challenges into Profit
                  </h2>
                  <p className="mt-6 text-base text-default-800">
                    Intuition and strategy form the foundation of our research
                    methodology, which we apply to both traditional and digital
                    media.
                  </p>
                  <p className="mt-4 text-base text-default-800">
                    We firmly believe that the human element is vital in
                    initiating any successful project, as it is here that
                    meaningful emotional connections between the company and
                    individuals are cultivated.
                  </p>
                </div>
                <div className="p-9">
                  <div className="flex items-center gap-7">
                    <div className="text-center">
                      <h3 className="text-5xl font-medium text-default-950">
                        200+
                      </h3>
                      <p className="mt-1 text-base">Clients served</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl font-medium text-default-950">
                        95%
                      </h3>
                      <p className="mt-1 text-base">Growth rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
