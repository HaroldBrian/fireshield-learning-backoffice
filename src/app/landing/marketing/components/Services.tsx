import { LuArrowRight, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div>
          <div className="mb-10 flex items-end justify-center">
            <div className="mx-auto max-w-md text-center">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Services
              </span>
              <h2 className="mt-4 text-3xl font-medium capitalize text-default-950">
                Highlighted Services
              </h2>
            </div>
          </div>
          <div className="rounded-md border border-default-200 bg-white dark:bg-default-50">
            <div className="grid 2xl:grid-cols-2">
              <div className="divide-y divide-default-200">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Brand Development Services
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Digital Product Development
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Media Strategy
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-default-200 border-t border-default-200 2xl:border-s 2xl:border-t-0">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Marketing Services
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Information Technology Consulting
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-2xl font-medium text-default-950">
                    Brand Identity Services
                  </h3>
                  <div>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-default-50 text-default-950 transition-all duration-300 hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              Get Solution
              <LuArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
