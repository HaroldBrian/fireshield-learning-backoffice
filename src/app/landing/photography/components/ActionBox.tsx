import Image from 'next/image'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import photography11 from '@/assets/images/landing/photography/img-11.jpg'

const ActionBox = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="border border-primary/10 bg-primary/5 p-14">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl/tight font-medium text-default-950">
                Embark on Your Animal Photography Adventure Now
              </h2>
              <p className="mb-7 mt-4 text-base">
                Dive into the enchanting realm of animal photography alongside
                our seasoned team.
              </p>
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-2 text-base text-white transition-all hover:bg-primary-700"
              >
                Contact us
                <LuMoveRight className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <Image
                alt="photography11"
                src={photography11}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
