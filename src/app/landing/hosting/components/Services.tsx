import { services } from '../data'

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
            Comprehensive Plan
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="relative mx-auto h-fit w-full">
                <div className="group">
                  <div className="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                    <div className="bg-white p-6 text-center dark:bg-default-50">
                      <Icon className="inline-block h-12 w-12 text-default-950" />
                      <h2 className="mt-5 text-2xl font-medium text-default-950">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base">{service.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
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
