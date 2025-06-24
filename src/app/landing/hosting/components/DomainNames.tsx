'use client'
import { LuSearch } from 'react-icons/lu'
import { useLayoutContext } from '@/context'

import bgLine from '@/assets/images/other/bg-lines-2.png'
import bgLineDark from '@/assets/images/other/bg-lines-2-dark.png'

const DomainNames = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="bg-default-100 dark:bg-default-50">
          <div
            className="bg-cover bg-no-repeat px-6 py-20"
            style={{
              backgroundImage: `url(${themeMode == 'light' ? bgLine.src : bgLineDark.src})`,
            }}
          >
            <div className="mx-auto text-center">
              <span className="text-sm uppercase text-default-950">
                Domain names
              </span>
              <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
                Every exceptional website deserves a remarkable name.
              </h2>
              <p className="mt-6 text-base text-default-950">
                Your domain name is the address of your website. While <br />{' '}
                .com names are widely favored, consider options like <br />{' '}
                .org, .tech, .co, and beyond.
              </p>
              <form className="mx-auto mt-6 max-w-xl space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    id="subcribe"
                    className="h-12 w-full border-default-200 bg-white py-4 pe-16 ps-4 text-default-950 focus:border-default-200 focus:ring-0 dark:bg-default-50"
                    placeholder="Type Your Email"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 px-3"
                  >
                    <LuSearch className="h-6 w-6 text-default-950" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainNames
