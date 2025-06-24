import { services } from '../data'

const BusinessSolutions = () => {
  return (
    <section id="solutions" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Business Solutions
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Our Offered Services
          </h2>
          <p className="mt-5 text-base">
            Adaptable layouts and immediate outcomes! Select a pre-designed
            header or craft a personalized layout that precisely aligns with
            your requirements.
          </p>
        </div>
        <div className="relative m-auto flex gap-8 overflow-hidden">
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="w-60 py-5">
                  <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50">
                    <div className="flex justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="mt-5 text-lg font-medium text-default-950">
                      {item.title}
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
          >
            {services.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="w-60 py-5">
                  <div className="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50">
                    <div className="flex justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="mt-5 text-lg font-medium text-default-950">
                      {item.title}
                    </h4>
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

export default BusinessSolutions
