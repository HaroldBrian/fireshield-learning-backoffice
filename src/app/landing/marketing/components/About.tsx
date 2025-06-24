import { LuMoveRight, LuPlay } from 'react-icons/lu'
import Link from 'next/link'
import marketing5 from '@/assets/images/landing/marketing/img-5.jpg'

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white py-10 dark:bg-default-50 lg:py-20"
      >
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="relative h-[650px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${marketing5.src})` }}
            >
              <div className="bg-black/2 0 absolute inset-0 h-full w-full" />
            </div>
            <div className="relative h-full">
              <div className="flex h-full items-center justify-center">
                <button
                  className="relative flex h-20 w-20 items-center justify-center gap-2.5 rounded-full bg-primary text-base font-medium text-white ring-4 ring-primary/25 transition-all duration-300 hover:bg-primary"
                  data-hs-overlay="#watchvideomodal"
                >
                  <LuPlay className="h-7 w-7 fill-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="max-w-lg px-10 md:ms-20">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                About
              </span>
              <h2 className="mt-5 text-4xl font-medium text-default-950">
                Our mission is to bridge the gap between business and the
                digital world.
              </h2>
              <p className="mt-4 text-base">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <div className="group mt-6">
                <Link href="" className="text-lg text-default-950">
                  Read More
                  <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                </Link>
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

export default About
