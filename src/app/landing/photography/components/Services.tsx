import { services } from '../data'

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950">
              Our Services
            </span>
            <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
              Our Offerings
            </h2>
            <p className="text-base">
              Explore a realm of exceptional animal photography services.
            </p>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="border border-default-100 bg-default-50 p-6"
              >
                <div className="flex flex-wrap gap-6 md:flex-nowrap">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center border border-primary/10 bg-primary/5">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-5xl font-medium text-default-950">
                      0{idx + 1}
                    </h2>
                    <h3 className="mt-2 text-3xl font-medium text-default-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
