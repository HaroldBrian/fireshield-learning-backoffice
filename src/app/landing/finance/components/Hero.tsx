import Link from 'next/link'
import { LuMoveRight, LuPlay } from 'react-icons/lu'
import Image from 'next/image'
import TestimonialSlider from './TestimonialSlider'

import financeBackground from '@/assets/images/landing/finance/bg-1.png'
import financeBackground2 from '@/assets/images/landing/finance/bg-2.png'
import finance from '@/assets/images/landing/finance/img-1.png'

import 'swiper/css'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-l from-primary/5 via-primary/0 to-primary/10 bg-cover md:py-20"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-20">
            <div className="pb-20 pt-[132px]">
              <h2 className="text-3xl font-medium text-default-950 xl:text-5xl/tight">
                A Financial Planning and Growth Platform for Entrepreneurs
              </h2>
              <p className="mt-6 sm:text-lg">
                Pellentesque lectus, with neque cursus sapien, massa laoreet
                varius. Ultricies faucibus donec tellus cras ornare. Aliquam
                mattis neque sed sit arcu egestas quisque quisque.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href=""
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-3 text-base text-white transition-all duration-700 hover:bg-primary-700"
                >
                  Get Started <LuMoveRight className="h-6 w-6" />
                </Link>
                <button
                  className="group relative flex items-center justify-center gap-4 text-base"
                  data-hs-overlay="#watchvideomodal"
                >
                  <span className="flex h-12 w-12 items-center justify-center gap-4 rounded-full bg-primary/40 text-base font-medium text-primary ring-4 ring-primary/20 transition-all duration-300 group-hover:bg-primary/80 group-hover:text-white">
                    <LuPlay className="h-5 w-5" />
                  </span>
                  <span className="text-base font-medium">
                    See How it Works
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div className="relative z-20 opacity-100">
                <Image
                  alt="finance-image"
                  height={700}
                  width={440}
                  src={finance}
                  className="mx-auto h-[700px] rounded-b-full"
                />
                <div className="absolute end-0 top-40 -z-10">
                  <Image
                    alt="finance-background"
                    src={financeBackground}
                    height={250}
                    width={250}
                    className="mx-auto h-[250px]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-5 top-auto -z-10">
                  <Image
                    alt="finance-background2"
                    height={450}
                    width={450}
                    src={financeBackground2}
                    className="mx-auto h-[450px]"
                  />
                </div>
                <div className="absolute bottom-0 end-0 z-20">
                  <div className="max-w-xs overflow-hidden rounded-md shadow">
                    <TestimonialSlider />
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
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all duration-500 ease-in-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 sm:mx-auto sm:w-full sm:max-w-2xl">
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

export default Hero
