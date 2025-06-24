'use client'
import { useLayoutContext } from '@/context'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import bgLine from '@/assets/images/other/bg-lines-2.png'
import bgLineDark from '@/assets/images/other/bg-lines-2-dark.png'

const DiscoverServices = () => {
  const { themeMode } = useLayoutContext()

  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
            Didn&apos;t find the answer you were looking for?
          </h2>
          <div className="relative mx-auto mt-6 w-full lg:w-96">
            <div className="group">
              <div className="w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                <div className="relative z-10 flex h-[68px] items-center justify-center bg-primary p-6">
                  <Link className="bg-primary text-xl text-white" href="">
                    Feel free to submit your question
                  </Link>
                </div>
              </div>
              <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
            </div>
          </div>
        </div>
        <div className="bg-default-100 dark:bg-default-50">
          <div
            className="bg-cover bg-no-repeat p-10 text-center md:p-20"
            style={{
              backgroundImage: `url(${themeMode == 'light' ? bgLine.src : bgLineDark.src})`,
            }}
          >
            <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
              Sign up today for top-notch web hosting services.
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-6">
              <Link
                href=""
                className="group relative inline-flex items-center gap-2 text-default-950 hover:text-primary md:text-xl"
              >
                <span className="absolute -bottom-0 h-px w-7/12 rounded bg-default-50 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
                Discover more by clicking here
                <LuMoveRight className="h-5 w-5" />
              </Link>
              <div className="relative">
                <div className="group">
                  <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                    <div className="bg-primary px-6 py-2">
                      <Link className="bg-primary text-xl text-white" href="">
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 z-0 h-full w-full bg-default-950" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverServices
