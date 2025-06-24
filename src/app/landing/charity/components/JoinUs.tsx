import charity2 from '@/assets/images/landing/charity/img-2.jpg'
import charity4 from '@/assets/images/landing/charity/img-4.jpg'
import charity5 from '@/assets/images/landing/charity/img-5.jpg'
import Image from 'next/image'
import { LuPlay } from 'react-icons/lu'

const JoinUs = () => {
  return (
    <>
      <section id="join" className="py-10 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Starting with a Child
            </span>
            <h2 className="mt-4 text-3xl/snug font-medium text-default-950">
              Starting with a Child{' '}
            </h2>
            <p className="mt-5 text-base">
              Children growing up in poverty encounter significant challenges
              education and healthcare, social discrimination, and isolation.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="group relative h-full">
                  <Image
                    alt="charity4"
                    src={charity4}
                    className="h-full w-full rounded-xl"
                  />
                  <div className="opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 flex h-full items-center justify-center rounded-xl bg-black/50">
                      <button
                        className="relative flex h-20 w-20 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-default-950 ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-7 w-7 fill-white stroke-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="group relative">
                  <Image alt="charity5" src={charity5} className="rounded-xl" />
                  <div className="opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 flex h-full items-center justify-center rounded-xl bg-black/50">
                      <button
                        className="relative flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-default-950 ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-5 w-5 fill-white stroke-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group relative">
                  <Image alt="charity2" src={charity2} className="rounded-xl" />
                  <div className="opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 flex h-full items-center justify-center rounded-xl bg-black/50">
                      <button
                        className="relative flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-default-950 ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                        data-hs-overlay="#watchvideomodal"
                      >
                        <LuPlay className="h-5 w-5 fill-white stroke-white" />
                      </button>
                    </div>
                  </div>
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
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-in-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-2xl">
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

export default JoinUs
