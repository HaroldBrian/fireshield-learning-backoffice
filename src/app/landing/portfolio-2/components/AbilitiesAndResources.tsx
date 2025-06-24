import { resources } from '../data'

const AbilitiesAndResources = () => {
  return (
    <section id="advantage" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Advantage
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Abilities &amp; Resources
            </h2>
            <p className="mt-4 text-base">
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {resources.map((resource, idx) => {
            const Icon = resource.icon
            return (
              <div key={idx} className="mx-auto text-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <div className="text-center">
                    <Icon className="size-10 text-default-950" />
                    <h3 className="mt-4 text-2xl font-medium text-default-950">
                      {resource.percentage}%
                    </h3>
                  </div>
                </div>
                <h2 className="mt-5 text-2xl font-medium text-default-950">
                  {resource.name}
                </h2>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AbilitiesAndResources
