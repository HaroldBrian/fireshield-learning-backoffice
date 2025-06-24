'use client'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'

import startup1 from '@/assets/images/landing/startup/img-1.jpg'
import startup2 from '@/assets/images/landing/startup/img-2.jpg'
import startup5 from '@/assets/images/landing/startup/img-5.jpg'
import startup6 from '@/assets/images/landing/startup/img-6.jpg'
import startup7 from '@/assets/images/landing/startup/img-7.jpg'

const Work = () => {
  return (
    <section id="work" className="overflow-hidden pb-10 pt-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Showcase of Work
            </span>
            <h2 className="my-4 text-4xl/tight font-medium text-default-950">
              Explore Work
            </h2>
            <p className="text-base">
              A static website preserves a distinct file for every page of the
              site. Whenever a user requests a specific page, the same content
              is delivered.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <GlightBox
              data-glightbox
              data-gallery="gallery"
              href={startup5.src}
              className="glightbox block h-full overflow-hidden rounded-lg"
            >
              <div className="group relative h-full w-full">
                <Image
                  src={startup5}
                  className="h-full w-full"
                  alt="startup5"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="flex justify-center">
                    <div className="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50">
                      <h2 className="text-2xl font-medium">Medium Scene</h2>
                      <p className="mt-1 text-base">Lightbox</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlightBox>

            <div className="md:col-span-2">
              <GlightBox
                data-glightbox
                data-gallery="gallery"
                href={startup6.src}
                className="glightbox block overflow-hidden rounded-lg"
              >
                <div className="group relative">
                  <Image
                    src={startup6}
                    className="h-full w-full"
                    alt="statup6"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <div className="flex justify-center">
                      <div className="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50">
                        <h2 className="text-2xl font-medium">
                          Visual Stranger
                        </h2>
                        <p className="mt-1 text-base">External Page</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlightBox>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <GlightBox
              data-glightbox
              data-gallery="gallery"
              href={startup2.src}
              className="glightbox block overflow-hidden rounded-lg"
            >
              <div className="group relative">
                <Image
                  src={startup2}
                  alt="startup2"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="flex justify-center">
                    <div className="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50">
                      <h2 className="text-2xl font-medium">Amplitude</h2>
                      <p className="mt-1 text-base">External Page</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlightBox>
            <GlightBox
              data-glightbox
              data-gallery="gallery"
              href={startup1.src}
              className="glightbox block overflow-hidden rounded-lg"
            >
              <div className="group relative">
                <Image
                  src={startup1}
                  alt="startup6"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="flex justify-center">
                    <div className="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50">
                      <h2 className="text-2xl font-medium">Rise of Design</h2>
                      <p className="mt-1 text-base">External Page</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlightBox>
            <GlightBox
              data-glightbox
              data-gallery="gallery"
              href={startup7.src}
              className="glightbox block overflow-hidden rounded-lg"
            >
              <div className="group relative">
                <Image
                  alt="startup7"
                  src={startup7}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="flex justify-center">
                    <div className="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50">
                      <h2 className="text-2xl font-medium">Design System</h2>
                      <p className="mt-1 text-base">Lightbox</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlightBox>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
