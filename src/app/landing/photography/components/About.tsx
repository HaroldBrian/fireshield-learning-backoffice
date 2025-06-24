import Image from 'next/image'
import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'

import photography13 from '@/assets/images/landing/photography/img-13.jpg'
import photography14 from '@/assets/images/landing/photography/img-14.jpg'
import photography7 from '@/assets/images/landing/photography/img-7.jpg'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
          <div>
            <Image alt="photography7" src={photography7} />
          </div>
          <div>
            <h2 className="text-4xl font-medium text-default-950">
              Revealing the Splendor of the Animal Realm
            </h2>
            <p className="mb-6 mt-4 text-base">
              Our profound affection and reverence for animals propel us
              forward. We firmly believe that every living being, regardless of
              its size, holds a unique tale, and our fervor lies in capturing
              their extraordinary moments through the lens of our cameras.
            </p>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-2 text-base text-white transition-all hover:bg-primary-700"
            >
              Read More
              <LuMoveRight className="h-6 w-6" />
            </Link>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Image alt="photography-image" src={photography13} />
              <Image alt="photography-image2" src={photography7} />
              <Image alt="photography-image5" src={photography14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
