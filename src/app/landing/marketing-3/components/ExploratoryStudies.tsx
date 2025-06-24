import Marketing3 from '@/assets/images/landing/marketing-3/img-3.jpg'
import Image from 'next/image'

const ExploratoryStudies = () => {
  return (
    <section className="overflow-hidden py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_24px] dark:bg-default-50">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <Image
              src={Marketing3}
              alt="marketing3"
              className="h-full w-full"
            />
            <div className="relative p-6">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Exploratory Studies
              </span>
              <h2 className="mt-4 text-3xl font-medium text-default-950">
                Ideas Driven byPassion. ✏️
              </h2>
              <p className="mb-8 mt-5 text-base">
                We strongly hold that partnering with our clients to develop
                products and services is the most efficient method to achieve
                our objectives.
              </p>
              <div>
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-lg font-medium text-default-950">
                    Search Engine
                  </h2>
                  <h4 className="text-lg font-medium text-default-950">75</h4>
                </div>
                <div className="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary"
                    role="progressbar"
                    style={{ width: '75%' }}
                    aria-valuenow={46}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="my-10">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-lg font-medium text-default-950">
                    Digital marketing
                  </h2>
                  <h4 className="text-lg font-medium text-default-950">95</h4>
                </div>
                <div className="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary"
                    role="progressbar"
                    style={{ width: '95%' }}
                    aria-valuenow={46}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-lg font-medium text-default-950">
                    App Development
                  </h2>
                  <h4 className="text-lg font-medium text-default-950">85</h4>
                </div>
                <div className="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-default-200">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-primary"
                    role="progressbar"
                    style={{ width: '85%' }}
                    aria-valuenow={46}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploratoryStudies
