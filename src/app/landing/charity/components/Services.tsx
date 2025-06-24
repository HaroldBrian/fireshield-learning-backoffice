import Link from 'next/link'
import { allService } from '../data'
import { LuMoveRight } from 'react-icons/lu'

const Services = () => {
  return (
    <section className="relative -mt-40 py-10 md:-mt-32">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-xl bg-gradient-to-t from-default-50 via-default-100 to-default-200 shadow">
          <div className="grid divide-y divide-default-300 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {allService.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="p-8">
                  <Icon className="h-12 w-12 text-default-950" />
                  <h2 className="mt-5 text-xl font-medium text-default-950">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base">{service.description}</p>
                  <div className="group mt-5">
                    <Link
                      href=""
                      className="text-lg font-medium text-default-900"
                    >
                      Read More
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
