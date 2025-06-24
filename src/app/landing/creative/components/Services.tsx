import creative3 from '@/assets/images/landing/creative/img-3.jpg'
import Image from 'next/image'
import { LuMoveRight } from 'react-icons/lu'

const Services = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="2xl:py-20">
            <div className="mb-10 flex items-end justify-between">
              <div className="mx-auto max-w-md text-center lg:text-start xl:ms-0">
                <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  Services
                </span>
                <p className="mt-5 text-base">
                  We help you to go online and increase your conversion rate
                  Better design for your digital products.
                </p>
              </div>
            </div>
            <div className="rounded-md bg-default-50">
              <div className="grid 2xl:grid-cols-2">
                <div className="divide-y divide-white/10">
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      Graphic Design
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      Web Design
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      Digital Marketing
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-white/10 border-t border-default-200 2xl:border-s 2xl:border-t-0">
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      Development
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      UI/UX Design
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-2xl font-medium text-default-950">
                      Branding
                    </h3>
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950 transition-all hover:bg-white hover:text-primary">
                      <LuMoveRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <Image
              alt="creative3"
              src={creative3}
              className="h-full w-full rounded-md"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
