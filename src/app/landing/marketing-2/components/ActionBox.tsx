import marketing10 from '@/assets/images/landing/marketing-2/img-10.jpg'
import { LuCheckCircle2 } from 'react-icons/lu'
import Link from 'next/link'

const ActionBox = () => {
  return (
    <section className="relative h-full py-56">
      <div className="container">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${marketing10.src})` }}
        >
          <div className="absolute inset-0 h-full w-full bg-black/60" />
        </div>
        <div className="relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-medium text-white">
                Marketing Boost for Your Business
              </h2>
              <p className="mb-10 text-lg text-zinc-300">
                The marketing audit is typically carried out by a third party,
                not an internal member of the organization.
              </p>
              <Link
                href=""
                className="rounded-md bg-primary px-6 py-3 text-sm text-white transition-all hover:bg-primary-700"
              >
                Get a Consultation
              </Link>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">
                    Business-to-Business
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">
                    Business-to-Customer
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">
                    Nonprofit Organization
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">Ecommerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
