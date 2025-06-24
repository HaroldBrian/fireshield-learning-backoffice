import { LuArrowUpRight, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { allCauses } from '../data'
import Image from 'next/image'

const HighlightedCauses = () => {
  return (
    <section id="causes" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Highlighted Causes
          </span>
          <h2 className="mt-4 text-4xl/snug font-medium text-default-950">
            Small Contributions
          </h2>
          <p className="mt-5 text-base">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allCauses.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group overflow-hidden rounded-lg border border-default-200"
              >
                <div className="group relative overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      alt="image"
                      src={item.image}
                      className="h-full w-full scale-[1.2] transition-all duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-default-950 transition-all duration-500 group-hover:underline">
                      {item.title}
                    </h2>
                    <p className="my-4  text-base">{item.description}</p>
                    <Link
                      href=""
                      className="text-lg font-medium text-default-900"
                    >
                      Read More
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 rounded-xl bg-default-100 p-10 dark:bg-default-50 lg:mt-20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-medium text-default-950">
                Click the button to view all the causes.
              </h2>
            </div>
            <div>
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-2 text-lg text-white transition-all duration-500 hover:bg-primary-700"
              >
                See all campaigns
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightedCauses
