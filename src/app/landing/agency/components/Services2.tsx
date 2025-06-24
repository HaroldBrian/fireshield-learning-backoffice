import Image from 'next/image'
import agency10 from '@/assets/images/landing/agency/img-10.jpg'

const Services2 = () => {
  return (
    <section id="serice" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              SERVICES
            </span>
            <p className="mt-5 text-lg font-medium text-default-800">
              We help you to go online and increase your conversion rate Better
              design for your digital products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative -z-10 overflow-hidden">
            <Image
              alt="img"
              src={agency10}
              className="h-full w-full rounded-md"
            />
            <div className="absolute inset-0 rounded-md bg-black/40" />
          </div>
          <div className="lg:-ms-20">
            <div className="divide-y divide-default-200 rounded-md bg-default-50 shadow">
              <div className="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md  border border-default-200 bg-white/5 text-xl text-default-950">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">
                    Graphic Design
                  </h3>
                  <p className="mt-3 text-base">
                    {' '}
                    Donec venenatis vulputate lorem. Morbi nec metus. Phasellus
                    blandit leo ut odio.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md  border border-default-200 bg-white/5 text-xl text-default-950">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">
                    Web Design
                  </h3>
                  <p className="mt-3 text-base">
                    {' '}
                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum
                    nec, nisi. Praesent nec nisl a purus blandit viverra.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 p-6 sm:flex-nowrap">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md  border border-default-200 bg-white/5 text-xl text-default-950">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">
                    Digital Marketing
                  </h3>
                  <p className="mt-3 text-base">
                    {' '}
                    Vestibulum rutrum, mi nec elementum vehicula, eros quam
                    gravida nisl, id fringilla neque ante vel mi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services2
