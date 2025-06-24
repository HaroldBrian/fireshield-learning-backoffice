import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

const ActionBox = () => {
  return (
    <section className="bg-default-100 py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto text-center">
          <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl/tight">
            Let&apos;s Explore the Next Major Innovation
          </h2>
          <p className="mt-6 text-base text-default-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-6">
            <Link
              href=""
              className="flex items-center justify-center gap-2 rounded-lg bg-primary/90 px-8 py-3 text-lg text-white transition-all hover:bg-primary"
            >
              Write A Message <LuMoveRight className="size-7" />
            </Link>
            <Link
              href=""
              className="flex items-center justify-center gap-2 rounded-lg bg-black px-8 py-3 text-lg text-white transition-all"
            >
              Discuss Project <LuMoveRight className="size-7" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
