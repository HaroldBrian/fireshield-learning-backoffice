import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

const ActionBox = () => {
  return (
    <section className="py-10 lg:pb-20">
      <div className="container">
        <div className="rounded-lg border border-primary/20 bg-primary/5 bg-cover bg-no-repeat">
          <div className="px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
                Embark on Your SEO Journey with Us
              </h2>
              <p className="mt-6 text-base text-default-950">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="inline-block">
                <Link
                  href=""
                  className="mt-6 flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/90 px-6 py-2 text-white transition-all hover:bg-primary"
                >
                  Get started <LuMoveRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
