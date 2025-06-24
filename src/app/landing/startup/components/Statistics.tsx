'use client'
import { useLayoutContext } from '@/context'
import backgroundLine from '@/assets/images/other/bg-lines-2.png'
import backgroundLineDark from '@/assets/images/other/bg-lines-2-dark.png'

import { statistics } from '../data'

const Statistics = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section className="p-8 md:p-16">
      <div
        className="rounded-xl bg-default-100 bg-cover bg-no-repeat px-6 py-20 dark:bg-default-50"
        style={{
          backgroundImage: `url(${themeMode == 'light' ? backgroundLine.src : backgroundLineDark.src})`,
        }}
      >
        <div className="container">
          <div className="relative">
            <div className="rounded-md p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {statistics.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="rounded-xl bg-white p-6 py-12 text-center drop-shadow-md dark:bg-default-100"
                    >
                      <h2 className="text-5xl font-medium text-default-950">
                        {item.state}
                      </h2>
                      <p className="mt-3 text-base text-default-950">
                        {item.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
