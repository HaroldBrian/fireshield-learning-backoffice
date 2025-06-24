import Link from 'next/link'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import Image from 'next/image'

import startup11 from '@/assets/images/landing/startup/img-11.jpg'
import startup12 from '@/assets/images/landing/startup/img-12.jpg'

const sliderImages = [startup11, startup12]
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat pb-10 pt-24 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')] lg:py-28"
      >
        <div className="container">
          <div className="relative">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div className="max-w-xl">
                <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  startups Marketing
                </span>
                <h2 className="my-5 text-4xl font-medium text-default-950 md:text-5xl/tight">
                  Easily, Quickly Craft Your Stunning Online Presence
                </h2>
                <p className="mb-10 text-base">
                  We&apos;re a renowned studio with expertise in design and
                  engineering. Our objective is to bring significance to the
                  work process.
                </p>
                <Link
                  href=""
                  className="rounded-md bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary-500"
                >
                  Reach Out to Us
                </Link>
              </div>
              <div>
                <div className="relative">
                  <div className="relative z-10 hidden xl:block">
                    <div className="before:absolute before:-end-10 before:-top-10 before:-z-10 before:h-28 before:w-28 before:bg-[url('../images/other/dot.svg')]" />
                  </div>
                  <div
                    data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true}'
                    className="relative z-20"
                  >
                    <div className="hs-carousel relative min-h-[350px] w-full overflow-hidden rounded-lg lg:min-h-[650px]">
                      <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">
                        {sliderImages.map((image, idx) => (
                          <div className="hs-carousel-slide" key={idx}>
                            <Image
                              alt="slide-image"
                              src={image}
                              className="h-full w-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden xl:block">
                      <button
                        type="button"
                        className="hs-carousel-prev hs-carousel:disabled:opacity-50 absolute inset-y-0 start-0 inline-flex h-full w-[46px] -translate-x-1/2 items-center justify-center text-gray-800 disabled:pointer-events-none"
                      >
                        <div className="inline-flex size-10 items-center justify-center rounded-full bg-gray-100 text-primary shadow transition-all hover:bg-primary hover:text-white">
                          <LuChevronLeft className="size-6" />
                        </div>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button
                        type="button"
                        className="hs-carousel-next hs-carousel:disabled:opacity-50 absolute inset-y-0 end-0 inline-flex h-full w-[46px] translate-x-1/2 items-center justify-center text-gray-800 disabled:pointer-events-none"
                      >
                        <span className="sr-only">Next</span>
                        <div className="inline-flex size-10 items-center justify-center rounded-full bg-gray-100 text-primary shadow transition-all hover:bg-primary hover:text-white">
                          <LuChevronRight className="size-6" />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="relative z-10 hidden xl:block">
                    <div className="after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:h-28 after:w-28 after:bg-[url('../images/other/dot.svg')]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
