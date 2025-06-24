import Image from 'next/image'
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div>
              <Image
                alt="avatar"
                height={320}
                width={320}
                src={avatar1}
                className="mx-auto h-80 rounded-full"
              />
            </div>
          </div>
          <div className="xl:col-span-3">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our About
            </span>
            <h2 className="mt-4 text-4xl font-medium text-default-950">
              Entrepreneur of the Year
            </h2>
            <h4 className="mt-5 text-xl font-medium text-default-400">
              Hello! I&apos;m Diego, a self-taught and award-winning Digital
              Designer and Developer with more than fifteen years of
              professional experience. I began my journey in my childhood
              bedroom and honed my skills at renowned digital agencies like
              nexum AG.
            </h4>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="w-48 rounded-xl bg-white p-4 text-center drop-shadow-md dark:bg-default-50">
                <h2 className="text-4xl font-medium text-default-950">200+</h2>
                <p className="mt-2 text-base">Project Delivered</p>
              </div>
              <div className="w-48 rounded-xl bg-white p-4 text-center drop-shadow-md dark:bg-default-50">
                <h2 className="text-4xl font-medium text-default-950">20+</h2>
                <p className="mt-2 text-base">Years of Experience</p>
              </div>
              <div className="w-48 rounded-xl bg-white p-4 text-center drop-shadow-md dark:bg-default-50">
                <h2 className="text-4xl font-medium text-default-950">45+</h2>
                <p className="mt-2 text-base">Happy Clients</p>
              </div>
            </div>
            <div className="inline-block">
              <Link
                href=""
                className="mt-6 flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/90 px-6 py-2 text-lg text-white transition-all hover:bg-primary"
              >
                Read more <LuMoveRight className="size-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
