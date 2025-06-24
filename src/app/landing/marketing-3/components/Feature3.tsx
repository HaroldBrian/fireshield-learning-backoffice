import marketing5 from '@/assets/images/landing/marketing-3/img-5.jpg'
import marketing6 from '@/assets/images/landing/marketing-3/img-6.jpg'
import Image from 'next/image'

const Feature3 = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-medium text-default-950">
              Powered by Enthusiasm.
            </h2>
            <div className="rounded-xl border border-default-200">
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <h2 className="text-xl font-medium text-default-950">
                    Mobile Development
                  </h2>
                  <p className="mt-3 text-sm">
                    At Hub IT, we empower your business and technology to
                    harness the potential of big data in the digital realm.
                  </p>
                </div>
                <div className="border-s border-default-200 p-6">
                  <h2 className="text-xl font-medium text-default-950">
                    Digital Branding
                  </h2>
                  <p className="mt-3 text-sm">
                    At Hub IT, we empower your business and technology to
                    harness the potential of big data in the digital realm.
                  </p>
                </div>
                <div className="border-e border-t border-default-200 p-6">
                  <h2 className="text-xl font-medium text-default-950">
                    Consultation
                  </h2>
                  <p className="mt-3 text-sm">
                    At Hub IT, we empower your business and technology to
                    harness the potential of big data in the digital realm.
                  </p>
                </div>
                <div className="border-t border-default-200 p-6">
                  <h2 className="text-xl font-medium text-default-950">
                    Social Media
                  </h2>
                  <p className="mt-3 text-sm">
                    At Hub IT, we empower your business and technology to
                    harness the potential of big data in the digital realm.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-20 lg:mb-0">
            <div className="relative">
              <Image
                alt="marketing5"
                src={marketing5}
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="absolute inset-x-0 -bottom-14 hidden sm:block">
              <Image
                alt="marketing6"
                src={marketing6}
                className="h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature3
