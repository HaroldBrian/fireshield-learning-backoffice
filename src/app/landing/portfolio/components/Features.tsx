import { features } from '../data'

const Features = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Features
            </span>
            <h2 className="mt-4 text-3xl font-medium capitalize text-default-950 md:text-4xl/tight">
              Features
            </h2>
            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-primary/20 bg-white p-6 text-center dark:bg-default-50"
                >
                  <h2 className="text-xl font-medium text-default-950">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-base">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
