'use client'
import { useState } from 'react'
import { WorkType } from '../types'
import { works } from '../data'
import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'
import Image from 'next/image'

const Works = () => {
  const [work, setWork] = useState<WorkType[]>(works)
  const [category, setCategory] = useState<string>('all')

  const filterImages = (category: string) => {
    setCategory(category)
    setTimeout(() => {
      const workAlbums =
        category === 'all'
          ? works
          : works.filter((album) => album.category?.includes(category))
      setWork(workAlbums)
    }, 300)
  }

  return (
    <section id="work" className="py-20">
      <div className="container">
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-4xl font-medium text-default-950">Works</h2>
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <div className="filter-options flex list-none flex-wrap justify-center gap-4">
                  <Link
                    href=""
                    className={`${category === 'all' ? 'active' : ''}`}
                    onClick={() => filterImages('all')}
                  >
                    All
                  </Link>
                  <Link
                    href=""
                    className={`${category === 'Web-Design' ? 'active' : ''}`}
                    onClick={() => filterImages('Web-Design')}
                  >
                    Web Design
                  </Link>
                  <Link
                    href=""
                    className={`${category === 'Graphic-Design' ? 'active' : ''}`}
                    onClick={() => filterImages('Graphic-Design')}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href=""
                    className={`${category === 'Illustrator' ? 'active' : ''}`}
                    onClick={() => filterImages('Illustrator')}
                  >
                    Illustrator
                  </Link>
                  <Link
                    href=""
                    className={`${category === 'Photography' ? 'active' : ''}`}
                    onClick={() => filterImages('Photography')}
                  >
                    Photography
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="gallery-wrapper" className="flex flex-wrap items-center">
          {work.map((item, idx) => {
            return (
              <div className="picture-item w-full p-3 xl:w-1/2" key={idx}>
                <div className="group w-full space-y-6 overflow-hidden rounded-lg bg-default-200 p-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      className="mx-auto h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      src={item.image}
                      alt="woman"
                      loading="lazy"
                      width={640}
                      height={805}
                    />
                    <div className="absolute inset-0">
                      <div className="h-full w-full rounded bg-black/60">
                        <div className="flex h-full items-end p-4">
                          <div className="overflow-hidden">
                            <p className="mb-2 font-medium text-white">
                              {item.date}
                            </p>
                            <h5 className="mb-2 text-3xl font-medium text-white">
                              {item.title}
                            </h5>
                            <p className="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                              {item.description}
                            </p>
                            <Link
                              href=""
                              className="group text-lg font-medium text-white"
                            >
                              Read More
                              <LuMoveRight className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className="picture-item w-full p-3 xl:w-1/2" data-groups="[&quot;graphic design&quot;]">
            <div className="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3">
              <div className="relative overflow-hidden rounded-lg">
                <Image className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105" src="assets/images/landing/web-designer/img-3.jpg" alt="woman" loading="lazy" width={640} height={805} />
                <div className="absolute inset-0">
                  <div className="h-full w-full rounded bg-black/60">
                    <div className="flex h-full items-end p-4">
                      <div className="overflow-hidden">
                        <p className="mb-2 font-medium text-white">27 Aug 2021</p>
                        <h5 className="mb-2 text-3xl font-medium text-white">
                          The Emergence of Design
                        </h5>
                        <p className="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                          Proin elementum ipsum vel mauris pellentesque
                          accumsan. Nulla in erat ligula, vivamus sed egestas
                          elit, sit amet convallis metus.
                        </p>
                        <a href="javascript:void(0);" className="group text-lg font-medium text-white">Read More
                          <i data-lucide="move-right" className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="picture-item w-full p-3 xl:w-1/2" data-groups="[&quot;illustrator&quot;]">
            <div className="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3">
              <div className="relative overflow-hidden rounded-lg">
                <Image className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105" src="assets/images/landing/web-designer/img-4.jpg" alt="woman" loading="lazy" width={640} height={805} />
                <div className="absolute inset-0">
                  <div className="h-full w-full rounded bg-black/60">
                    <div className="flex h-full items-end p-4">
                      <div className="overflow-hidden">
                        <p className="mb-2 font-medium text-white">27 Aug 2021</p>
                        <h5 className="mb-2 text-3xl font-medium text-white">
                          Amplitude
                        </h5>
                        <p className="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                          Aliquam tempus nunc nec rutrum malesuada. Proin
                          pulvinar augue quis pharetra vulputate. Sed lacinia
                          convallis orci vitae condimentum.
                        </p>
                        <a href="javascript:void(0);" className="group text-lg font-medium text-white">Read More
                          <i data-lucide="move-right" className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="picture-item w-full p-3 xl:w-1/2" data-groups="[&quot;photography&quot;]">
            <div className="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3">
              <div className="relative overflow-hidden rounded-lg">
                <Image className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105" src="assets/images/landing/web-designer/img-5.jpg" alt="woman" loading="lazy" width={640} height={805} />
                <div className="absolute inset-0">
                  <div className="h-full w-full rounded bg-black/60">
                    <div className="flex h-full items-end p-4">
                      <div className="overflow-hidden">
                        <p className="mb-2 font-medium text-white">27 Aug 2021</p>
                        <h5 className="mb-2 text-3xl font-medium text-white">
                          Visual Enigma
                        </h5>
                        <p className="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
                          Suspendisse scelerisque convallis nibh. Maecenas
                          bibendum porta mattis. Donec quis nibh porta dolor
                          ultrices bibendum vel quis leo.
                        </p>
                        <a href="javascript:void(0);" className="group text-lg font-medium text-white">Read More
                          <i data-lucide="move-right" className="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Works
