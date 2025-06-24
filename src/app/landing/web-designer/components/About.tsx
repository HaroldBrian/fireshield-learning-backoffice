import web8 from '@/assets/images/landing/web-designer/img-8.jpg'
import { LuDot, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <Image alt="web8" src={web8} className="rounded-xl" />
          </div>
          <div className="p-6">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our About
            </span>
            <h2 className="mt-4 text-4xl font-medium text-default-950">
              Why choose us
            </h2>
            <p className="mt-5 text-base text-default-950">
              The role of the graphic designer in the communication process is
              that of an encoder or interpreter of the message. They focus on
              interpreting, organizing, and presenting visual messages.
            </p>
            <div className="my-5 grid grid-cols-1">
              <div className="flex items-center gap-2">
                <div>
                  <LuDot className="size-9 text-primary" />
                </div>
                <h3 className="text-xl text-default-950">
                  Business Consultancy
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LuDot className="size-9 text-primary" />
                </div>
                <h3 className="text-xl text-default-950">Art direction</h3>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LuDot className="size-9 text-primary" />
                </div>
                <h3 className="text-xl text-default-950">Web development</h3>
              </div>
            </div>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              Read More
              <LuMoveRight className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
