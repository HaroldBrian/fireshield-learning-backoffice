import marketing2 from '@/assets/images/landing/marketing-3/img-2.jpg'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className="overflow-hidden py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_24px] dark:bg-default-50">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="relative p-6 text-center">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Highlighted Projects
              </span>
              <h2 className="mt-4 text-3xl font-medium text-default-950">
                Innovative Design Solutions 💡
              </h2>
              <p className="mb-8 mt-5 text-base">
                Customize your design using a variety of theme options in the
                WordPress Customize and witness instant changes.
              </p>
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
              >
                Read More
                <LuMoveRight className="h-6 w-6" />
              </Link>
            </div>
            <Image
              src={marketing2}
              alt="marketing2"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
