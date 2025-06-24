import { LuCheck } from 'react-icons/lu'
import Image from 'next/image'

import portfolio6 from '@/assets/images/landing/portfolio/img-6.jpg'

const about = [
  'Boot Your Business',
  'Marketing Support',
  'Talented Teams',
  '24/7 Strong Support',
]
const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 2xl:grid-cols-2">
          <div className="flex justify-center">
            <div className="inline-block rounded-xl border border-primary/20 bg-primary/10 p-6">
              <Image alt="portfolio6" src={portfolio6} className="rounded-lg" />
            </div>
          </div>
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our About
            </span>
            <h2 className="mt-6 text-3xl font-medium text-default-950 md:text-4xl">
              Fifteen Years of SEO Mastery
            </h2>
            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mb-10 mt-6 grid gap-6 md:grid-cols-2">
              {about.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
                    <LuCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-default-950">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <div className="2xl:-ms-32">
              <div className="rounded-xl border border-default-200 bg-white p-6 dark:bg-default-50">
                <div className="grid md:grid-cols-3">
                  <div className="text-center">
                    <h2 className="text-4xl font-medium text-default-950">
                      247+
                    </h2>
                    <p className="mt-1 text-lg">Completed Projects</p>
                  </div>
                  <div className="border-default-200 text-center md:border-x">
                    <h2 className="text-4xl font-medium text-default-950">
                      54+
                    </h2>
                    <p className="mt-1 text-lg">Satisfied Customers</p>
                  </div>
                  <div className="text-center">
                    <h2 className="text-4xl font-medium text-default-950">
                      43+
                    </h2>
                    <p className="mt-1 text-lg">Winning Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
