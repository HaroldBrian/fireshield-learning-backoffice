import {
  LuActivitySquare,
  LuComponent,
  LuMoveRight,
  LuShoppingBag,
  LuToggleRight,
} from 'react-icons/lu'
import Link from 'next/link'

const Feature2 = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="h-40 w-52 rounded-xl bg-purple-500/10 p-6 text-center">
                <div className="flex justify-center">
                  <LuShoppingBag className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-purple-600">
                  Ecommerce
                </h3>
              </div>
              <div className="h-40 w-52 rounded-xl bg-green-500/10 p-6 text-center md:-mt-14">
                <div className="flex justify-center">
                  <LuActivitySquare className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-green-600">
                  Branding
                </h3>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <div className="h-40 w-52 rounded-xl bg-red-500/10 p-6 text-center">
                <div className="flex justify-center">
                  <LuToggleRight className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-red-600">
                  Consultation
                </h3>
              </div>
              <div className="h-40 w-52 rounded-xl bg-sky-500/10 p-6 text-center md:-mt-14">
                <div className="flex justify-center">
                  <LuComponent className="h-12 w-12 text-sky-600" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-sky-600">
                  Marketing
                </h3>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-default-950">
              Marketing Solutions ⚡
            </h2>
            <p className="mb-10 mt-5 text-base">
              With a wealth of over 25 years in the field, we have developed
              numerous strategic discovery processes that empower us to uncover
              the layers necessary to comprehend, link, and represent
              effectively.
            </p>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
            >
              Read More
              <LuMoveRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature2
