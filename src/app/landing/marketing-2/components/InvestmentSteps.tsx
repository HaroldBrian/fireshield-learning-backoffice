import { LuPlay } from 'react-icons/lu'
import { investmentSteps } from '../data'

const InvestmentSteps = () => {
  return (
    <>
      <section className="relative h-full py-16 lg:py-32">
        <div className="container">
          <div className="absolute inset-0 bg-[url(../images/landing/marketing-2/img-8.jpg)] bg-cover bg-center bg-repeat">
            <div className="absolute inset-0 h-full w-full bg-black/50" />
          </div>
          <div className="relative">
            <div className="grid items-center gap-6 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <div className="rounded-md p-6">
                  <h2 className="text-center text-4xl font-medium text-white">
                    Achieving Success in Three Simple Investment Steps
                  </h2>
                  <div className="mt-10 grid grid-cols-1 gap-6">
                    {investmentSteps.map((step, idx) => {
                      const Icon = step.icon
                      return (
                        <div
                          key={idx}
                          className="rounded-md bg-white/60 p-6 backdrop-blur-xl dark:bg-black/60"
                        >
                          <div className="flex flex-wrap items-center gap-6 md:flex-nowrap">
                            <div>
                              <Icon className="h-12 w-12 stroke-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-medium text-default-950">
                                {step.title}
                              </h2>
                              <p className="mt-3 text-base text-default-950">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <div className="flex h-full items-center justify-center">
                  <button
                    className="relative flex h-20 w-20 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-white ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                    data-hs-overlay="#watchvideomodal"
                  >
                    <LuPlay className="h-7 w-7 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="watchvideomodal"
        className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
          <div className="pointer-events-auto flex w-full flex-col overflow-x-hidden rounded-xl">
            <iframe
              className="w-full"
              height={400}
              src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentSteps
