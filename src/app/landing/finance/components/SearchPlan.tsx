import { LuSearch } from 'react-icons/lu'

import backgroundLine2 from '@/assets/images/other/bg-lines-2.png'

const SearchPlan = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="rounded-lg bg-gradient-to-l from-primary/5 via-primary/0 to-primary/10 bg-cover shadow">
          <div
            className="bg-cover bg-no-repeat px-6 py-20"
            style={{ backgroundImage: `url(${backgroundLine2.src})` }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
                Obtain Your Customizable Financial Survival Plan.
              </h2>
              <p className="mt-6  text-base text-default-950">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPlan
