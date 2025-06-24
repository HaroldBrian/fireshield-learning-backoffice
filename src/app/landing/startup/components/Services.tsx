import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { services } from '../data'

const Services = () => {
  return (
    <section className="py-24" id="services">
      <div className="container">
        <div className="grid items-center gap-6 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className={`${idx % 2 == 0 ? 'xl:-mt-8' : ''}`}
                  >
                    <div className="group relative cursor-pointer rounded-xl border border-default-200 p-6">
                      <Icon className="size-10 text-default-950" />
                      <h2 className="text-default mt-5 text-2xl font-medium transition-all group-hover:text-primary">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base">{service.description}</p>
                      <div className="mt-5">
                        <Link
                          href=""
                          className="text-lg font-medium text-default-900 after:absolute after:inset-0"
                        >
                          Read More
                          <LuMoveRight className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="xl:col-span-2">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="mt-6 text-4xl/tight font-medium text-default-950">
              Delivering Top-Notch Development Solutions.
            </h2>
            <p className="mt-5 text-base">
              Leveraging the power of design to solve complex problems and
              foster business solutions.
            </p>
            <div className="mt-10">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
              >
                Read More
                <LuMoveRight className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
