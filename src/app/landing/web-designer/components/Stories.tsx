import Image from 'next/image'
import Link from 'next/link'
import { stories } from '../data'
import { cn } from '@/utils'
import { LuMoveRight } from 'react-icons/lu'

const Stories = () => {
  return (
    <section id="stories" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Featured Stories
          </span>
          <h2 className="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
            Latest News
          </h2>
          <p className="mt-5 text-base">
            Proin faucibus arcu quis ante. In consectetuer turpis ut velit.
          </p>
        </div>

        <div>
          {stories.map((story, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  'relative p-10',
                  idx == 0
                    ? 'border-y border-default-200'
                    : 'border-b border-default-200'
                )}
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <div className="flex items-center">
                      <div className="mr-5">
                        <div className="img size-14 overflow-hidden rounded-full">
                          <Image
                            src={story.image}
                            className="h-full w-full"
                            alt="story-image"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="mb-5 text-sm font-medium">
                          Posted by
                        </span>
                        <h6 className="text-xl font-medium text-default-950">
                          Olivia Rhye
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h5 className="mb-10 underline">
                      <Link
                        href=""
                        className="text-xl font-medium text-default-950"
                      >
                        {story.title}
                      </Link>
                    </h5>
                    <div className="flex items-center gap-7">
                      <Link
                        href=""
                        className="text-sm uppercase tracking-widest text-default-950"
                      >
                        Design
                      </Link>
                      <Link
                        href=""
                        className="text-sm uppercase tracking-widest text-default-950"
                      >
                        Marketing
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center lg:col-span-3 lg:justify-end">
                    <span className="text-base font-medium">{story.date}</span>
                  </div>
                </div>

                <div
                  className="background absolute left-0 top-0 h-full w-full bg-cover bg-top text-center opacity-0 hover:bg-bottom hover:opacity-100"
                  style={{
                    backgroundImage: `url(${story.backgroundImage.src})`,
                    transition: 'opacity 0.4s, background-position 10s linear',
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <Link
                      href=""
                      className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
                    >
                      Read More
                      <LuMoveRight className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stories
