import Link from 'next/link'
import { pricingPlans } from '../data'
import PricingCard from './PricingCard'
import { LuMoveRight } from 'react-icons/lu'

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
            Our Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-10">
          {pricingPlans.map((plan, idx) => (
            <PricingCard pricingPlan={plan} key={idx} />
          ))}
          <div className="lg:col-span-3">
            <div className="relative w-full lg:w-full">
              <div className="group">
                <div className="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                  <div className="bg-white p-6 dark:bg-default-50">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <h5 className="text-2xl font-medium text-default-950">
                          Dedicated
                        </h5>
                        <p className="mt-2 text-xs uppercase tracking-widest text-default-950">
                          For Businesses and large organisations.
                        </p>
                        <p className="w-3/4 py-5 text-base/7 font-medium text-default-600">
                          For advanced security and more flexible contrals,the
                          Enterprise plan helps you extend your design processes
                          enterprise-wide.
                        </p>
                        <div className="flex items-center">
                          <Link
                            href=""
                            className="group inline-flex items-center text-lg font-semibold text-default-900"
                          >
                            Learn more
                            <LuMoveRight className="h-4 w-4 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4 bg-default-100 p-5 text-default-950">
                          <h2 className="text-5xl font-semibold">
                            <sup className="text-xl">$</sup>79
                          </h2>
                          <div>
                            <p className="text-lg">All users, monthly</p>
                            <p className="text-xs">for Unlimited users</p>
                          </div>
                        </div>
                        <div className="relative z-20 mx-auto mt-5 w-full lg:w-56">
                          <div className="group">
                            <div className="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent">
                              <div className="relative z-10 flex h-4 items-center justify-center bg-primary p-6">
                                <Link
                                  className="button bg-primary text-white"
                                  href=""
                                >
                                  Get Started
                                </Link>
                              </div>
                            </div>
                            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
