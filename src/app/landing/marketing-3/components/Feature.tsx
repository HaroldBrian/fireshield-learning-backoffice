import { LuActivitySquare, LuDot } from 'react-icons/lu'

import marketing4 from '@/assets/images/landing/marketing-3/img-4.svg'
import Image from 'next/image'

const Feature = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <LuActivitySquare className="h-12 w-12 text-default-950" />
            <h2 className="mt-5 text-4xl font-medium text-default-950">
              Flexibility and Expansion.
            </h2>
            <p className="mt-4 text-base">
              Transform your concepts into reality using an intuitive visual
              editor. we&apos;s Build, modify, and personalize your website
              visually without any coding required!
            </p>
            <ul role="list" className="mt-6 text-sm text-default-700">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  99.9% Uptime Assurance
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">
                  Endless Photos and Videos
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-9 w-9 text-primary" />
                <span className="text-base font-medium">Premium Support</span>
              </li>
            </ul>
          </div>
          <div className="h-[500px]">
            <Image
              alt="feature-Image"
              src={marketing4}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
