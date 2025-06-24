import companyHero from '@/assets/images/landing/company/hero-img.png'
import { LuBell } from 'react-icons/lu'
import Link from 'next/link'
import { features } from '../data'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary/5 py-24 lg:py-40"
    >
      <div className="container">
        <div className="mb-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-block rounded-full border border-primary/20 pe-5">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <LuBell className="h-4 w-4 text-default-950" />
                </div>
                <span className="text-xs font-medium text-default-950 md:text-sm">
                  Startup Business
                </span>
              </div>
            </div>
            <h1 className="my-4 max-w-lg text-4xl font-medium text-default-950 md:text-4xl/tight">
              Empowering startups to fuel their business growth
            </h1>
            <p className="md:text-lg">
              Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
              velit <br /> nibh arcu eu. Id sem varius malesuada tincidunt
              sodales.
            </p>
            <div className="inline-block">
              <Link
                href=""
                className="mt-6 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-base font-medium text-white transition-all duration-500 hover:bg-primary-300"
              >
                Get started now
              </Link>
            </div>
          </div>
          <div>
            <Image alt="companyHero" src={companyHero} />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:text-start"
              >
                <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0">
                  <div className="sm:pe-5">
                    <Icon className="mx-auto h-10 w-10 text-default-950" />
                  </div>
                  <div className="border-primary/20 sm:border-s sm:ps-5">
                    <h2 className="text-xl font-medium text-default-950">
                      {feature.title}
                    </h2>
                    <p className="mt-3 text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
