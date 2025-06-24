import Image from 'next/image'
import Link from 'next/link'

import ebook16 from '@/assets/images/landing/ebook/img-16.jpg'
import ebook17 from '@/assets/images/landing/ebook/img-17.jpg'
import ebookBackground from '@/assets/images/landing/ebook/bg-2.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-l from-primary-500/5 via-primary-500/0 to-primary-500/10 bg-cover pb-40 pt-40"
    >
      <div className="-z-1 absolute start-[10%] top-1/4 hidden 2xl:block">
        <Image
          alt="background-image"
          height={112}
          width={86}
          src={ebookBackground}
          className="h-28"
        />
      </div>
      <div className="container">
        <div className="relative grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div className="col-span-1">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Digital Ebooks
            </span>
            <h2 className="my-5 text-4xl font-medium text-default-950 md:text-5xl/tight">
              Ebooks to Foster Your Personal and Professional Development
            </h2>
            <p className="mb-10 text-base text-default-950">
              Our meticulously selected ebooks ensure a top-notch reading
              journey, spanning across fiction, non-fiction, self-help, and
              educational genres.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href=""
                className="rounded-lg border border-primary bg-primary/90 px-8 py-2 text-lg text-white transition-all duration-700 hover:border-primary hover:bg-primary"
              >
                Download Now
              </Link>
              <Link
                href=""
                className="rounded-lg border border-primary px-8 py-2 text-lg font-medium text-primary transition-all duration-700 hover:border-primary hover:bg-primary hover:text-white"
              >
                Browse Ebook
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-end justify-center">
              <div className="z-10 -me-40 hidden md:block">
                <Image
                  alt="ebook17"
                  height={240}
                  width={240}
                  src={ebook17}
                  className="h-60 rounded-bl-[90px] rounded-tr-[90px] border-4 border-default-100"
                />
              </div>
              <div className="relative">
                <Image
                  alt="ebook16"
                  height={500}
                  width={500}
                  src={ebook16}
                  className="h-[500px] rounded-t-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
