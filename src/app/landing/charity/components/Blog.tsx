import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import charity8 from '@/assets/images/landing/charity/img-8.png'
import charityBackground3 from '@/assets/images/landing/charity/bg-3.png'
import charityBackground4 from '@/assets/images/landing/charity/bg-4.png'
import charityBackground5 from '@/assets/images/landing/charity/bg-5.png'
import Image from 'next/image'

const Blog = () => {
  return (
    <section id="blog" className="py-10 lg:pb-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              How You Can Make a Difference
            </span>
            <h2 className="mt-4 text-4xl/snug font-medium text-default-950">
              It&apos;s incredibly straightforward.
            </h2>
            <p className="mt-5 text-base">
              Children growing up in poverty encounter significant challenges:
              hunger and malnutrition, restricted access to education and
              healthcare, social discrimination, and isolation.
            </p>
            <div className="mt-10">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
              >
                Read More
                <LuMoveRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <div className="choose-image relative">
              <Image src={charity8} alt="image" />
              <div className="choose-image-shape hidden md:block">
                <div className="absolute left-0 top-0 z-10 animate-[moveLeftBounce_3s_linear_infinite]">
                  <Image src={charityBackground3} alt="image" />
                </div>
                <div className="absolute right-[-10%] top-2/4 -z-10 hidden -translate-y-2/4 animate-[moveLeftBounce_3s_linear_infinite] lg:block">
                  <Image src={charityBackground4} alt="image" />
                </div>
                <div className="absolute bottom-[10%] left-[12%] -z-10 animate-[moveLeftBounce_3s_linear_infinite]">
                  <Image src={charityBackground5} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
