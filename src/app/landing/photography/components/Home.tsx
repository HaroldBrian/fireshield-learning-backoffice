import Link from 'next/link'
import Image from 'next/image'
import { LuImage } from 'react-icons/lu'

import photography1 from '@/assets/images/landing/photography/img-1.jpg'
import photography2 from '@/assets/images/landing/photography/img-2.jpg'
import photography3 from '@/assets/images/landing/photography/img-3.jpg'
import photography4 from '@/assets/images/landing/photography/img-4.jpg'
import photography5 from '@/assets/images/landing/photography/img-5.jpg'
import photography6 from '@/assets/images/landing/photography/img-6.jpg'

const photographyImages = [
  photography1,
  photography2,
  photography3,
  photography4,
  photography5,
  photography6,
]
const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 md:px-10">
      <div className="border border-primary/10 bg-primary/5">
        <div className="container">
          <div className="p-6">
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="bg-primary/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-primary shadow">
                  Animals Frame
                </span>
                <h1 className="my-4 max-w-lg text-4xl font-medium text-default-950 md:text-5xl/tight">
                  Capturing the Essence of Animals, Frame by Frame
                </h1>
                <p className="md:text-lg">
                  Our deep affection for animals inspires us to craft
                  breathtaking and emotionally charged images that encapsulate
                  the genuine nature of these remarkable beings.
                </p>
                <Link
                  href=""
                  className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-default-200 px-1 py-1 pe-4 text-default-950 transition-all duration-300 hover:bg-primary-600 hover:text-white"
                >
                  <span className="me-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <LuImage className="h-5 w-5" />
                  </span>
                  Generate Portfolio
                </Link>
              </div>
              <div className="mx-auto h-[695px] overflow-hidden">
                <div className="marquee grid grid-cols-2 gap-6">
                  <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                    <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                      {photographyImages.map((image, idx) => (
                        <Image
                          alt="marquee-image"
                          key={idx}
                          className="aspect-1 h-full w-60 object-cover"
                          src={image}
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden="true"
                      className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                    >
                      {photographyImages.map((image, idx) => (
                        <Image
                          alt="marquee-image"
                          key={idx}
                          className="aspect-1 h-full w-60 object-cover"
                          src={image}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                    <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                      {photographyImages.map((image, idx) => (
                        <Image
                          alt="marquee-image"
                          key={idx}
                          className="aspect-1 h-full w-60 object-cover"
                          src={image}
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden="true"
                      className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                    >
                      {photographyImages.map((image, idx) => (
                        <Image
                          alt="marquee-image"
                          key={idx}
                          className="aspect-1 h-full w-60 object-cover"
                          src={image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
