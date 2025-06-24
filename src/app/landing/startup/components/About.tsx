import { LuMinus, LuMoveRight } from 'react-icons/lu'
import Image from 'next/image'
import Link from 'next/link'

import startup3 from '@/assets/images/landing/startup/img-3.jpg'
import startup10 from '@/assets/images/landing/startup/img-10.jpg'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div className="relative mb-20 lg:mb-0">
            <div className="relative">
              <Image
                alt="startup-3"
                src={startup3}
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="absolute inset-x-0 -bottom-14 hidden sm:block">
              <Image
                alt="startup-10"
                src={startup10}
                className="h-full rounded-xl"
              />
            </div>
          </div>
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              About Our Studio
            </span>
            <h2 className="mt-6 text-4xl/tight font-medium text-default-950">
              We trust designers driven by passion
            </h2>
            <p className="mt-5 text-base">
              Etiam fermentum vehicula faucibus. Praesent ullamcorper urna id
              arcu molestie scelerisque. Sed imperdiet tristique mauris et
              faucibus. Maecenas semper augue non fringilla placerat. Curabitur
              luctus erat sit amet ultricies aliquam. Donec dictum convallis
              mauris et maximus. Nullam massa arcu, porta quis felis et,
              eleifend varius quam.
            </p>
            <ul role="list" className="mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <LuMinus className="inline-block size-7 text-primary" />
                <span className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuMinus className="inline-block size-7 text-primary" />
                <span className="text-base">
                  Vivamus hendrerit eros vitae tincidunt vulputate.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuMinus className="inline-block size-7 text-primary" />
                <span className="text-base">
                  Aenean at bibendum enim. In auctor consectetur urna.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <LuMinus className="inline-block size-7 text-primary" />
                <span className="text-base">
                  Proin ut gravida lorem, quis scelerisque metus.
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-md border border-default-300 px-8 py-2 text-base text-default-900 transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                Read More
                <LuMoveRight className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
