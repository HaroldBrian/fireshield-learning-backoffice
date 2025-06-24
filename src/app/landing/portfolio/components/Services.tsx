import { services } from '../data'

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
              Services
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`rounded-xl border border-default-200 p-6 text-center transition-all duration-500 hover:border-${service.variant}-500/20 hover:bg-${service.variant}-500/5`}
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-${service.variant}-500/40 bg-${service.variant}-500/20 text-${service.variant}-500`}
                >
                  <Icon className="mx-auto h-10 w-10" />
                </div>
                <h2 className="mt-4 text-3xl font-medium text-default-950">
                  {service.title}
                </h2>
                <p className="mt-3 text-base">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
