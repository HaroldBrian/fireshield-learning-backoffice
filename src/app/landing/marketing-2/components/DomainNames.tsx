import { LuSearch } from 'react-icons/lu'

import backgroundImg1 from '@/assets/images/landing/marketing-2/bg-1.png'
import backgroundImg2 from '@/assets/images/landing/marketing-2/bg-2.png'

const DomainNames = () => {
  return (
    <section>
      <div className="container">
        <div
          className="rounded-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImg2.src})` }}
        >
          <div
            className="bg-cover bg-no-repeat px-6 py-20"
            style={{ backgroundImage: `url(${backgroundImg1.src})` }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Domain names
              </span>
              <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
                Stay updated with our weekly newsletter.
              </h2>
              <p className="mt-6 text-base text-default-950">
                Nunc egestas, augue at pellentesque laoreet, felis eros vehicula
                leo, at malesuada velit leo quis pede.
              </p>
              <form className="mx-auto mt-6 max-w-2xl space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    id="subcribe"
                    className="h-12 w-full rounded-md border-default-200 bg-default-50 py-4 pe-14 ps-4 text-default-950 focus:border-default-200 focus:ring-0"
                    placeholder="Type Your Email"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 px-3"
                  >
                    <LuSearch className="h-6 w-6 text-default-950" />
                  </button>
                  <small className="text-default-700">
                    By submitting the form, you acknowledge and agree to our
                    Terms &amp; Conditions and Privacy Policy.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainNames
