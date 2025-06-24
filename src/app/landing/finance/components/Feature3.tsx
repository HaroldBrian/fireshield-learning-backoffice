import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import finance10 from '@/assets/images/landing/finance/img-10.jpg'
import Image from 'next/image'

const Feature3 = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Access Advisors
            </span>
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              {' '}
              Personalized Expert Support and Feedback
            </h2>
            <p className="mt-5 text-base">
              Receive expert support and valuable feedback tailored to your
              business&apos;s needs. Our advisors are here to help you navigate
              financial challenges and make informed decisions.{' '}
            </p>
            <div className="group mt-5">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image alt="finance10" src={finance10} className="rounded-xl" />
            <div className="hidden lg:block">
              <div className="absolute -end-20 -top-20">
                <div className="max-w-md">
                  <div className="rounded-xl border border-default-200 bg-white p-6 dark:bg-default-50">
                    <h2 className="text-xl font-medium text-default-950">
                      Obtain Financing and Fundraising Advice
                    </h2>
                    <p className="mt-4 text-base">
                      Schedule a free consultation with our financing and
                      fundraising expert.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -start-20">
                <div className="inline-block">
                  <div className="rounded-xl border border-default-200 bg-white p-5 dark:bg-default-50">
                    <h4 className="text-xl font-medium text-default-950">
                      Priority Support
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature3
