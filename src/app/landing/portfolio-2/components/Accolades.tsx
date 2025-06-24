import Link from 'next/link'
import { accolades } from '../data'
import { LuArrowUpRight } from 'react-icons/lu'
import { cn } from '@/utils'

const Accolades = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Accolades
            </span>
            <h2 className="mt-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
              Accolades &amp; Acknowledgments
            </h2>
            <p className="mt-4 text-base">
              Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor,
              sagittis eget, iaculis quis, molestie non, velit.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-2">
            <div>
              {accolades.slice(0, 3).map((item, idx) => {
                return (
                  <Link key={idx} href="" className="group">
                    <div
                      className={cn(
                        'flex items-center justify-between p-5',
                        item.divider ? 'border-y border-default-200' : ''
                      )}
                    >
                      <div>
                        <h2 className="text-2xl font-medium text-default-950">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-base">{item.subTitle}</p>
                      </div>
                      <div>
                        <div className="flex size-10 items-center justify-center rounded-full border border-default-200 text-default-950 transition-all duration-500 group-hover:border-transparent group-hover:bg-black group-hover:text-white">
                          <LuArrowUpRight className="size-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div>
              {accolades.slice(3, 6).map((item, idx) => {
                return (
                  <Link key={idx} href="" className="group">
                    <div
                      className={cn(
                        'flex items-center justify-between p-5',
                        item.divider ? 'border-y border-default-200' : ''
                      )}
                    >
                      <div>
                        <h2 className="text-2xl font-medium text-default-950">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-base">{item.subTitle}</p>
                      </div>
                      <div>
                        <div className="flex size-10 items-center justify-center rounded-full border border-default-200 text-default-950 transition-all duration-500 group-hover:border-transparent group-hover:bg-black group-hover:text-white">
                          <LuArrowUpRight className="size-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accolades
