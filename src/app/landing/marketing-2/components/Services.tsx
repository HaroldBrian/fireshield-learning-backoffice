import {
  LuBoxes,
  LuDot,
  LuFileText,
  LuMoveRight,
  LuRocket,
} from 'react-icons/lu'
import Link from 'next/link'

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Marketing Solutions
          </h2>
          <p className="mt-5 text-base">
            The marketing mix symbolizes the fundamental instruments that
            marketers can employ to introduce their products or services to the
            market.
          </p>
        </div>
        <div className="border border-default-200">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="border-b border-default-200 p-6 md:border-e xl:border-0">
              <div className="mx-auto">
                <LuFileText className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                Media Relations
              </h2>
              <p className="mt-5 text-base">
                Price need not be exclusively monetary; it can also encompass
                what is traded for the product or services, including energy or
                any sacrifices consumers make to acquire them.
              </p>
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Seasonal Campaigns
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Digital Marketing
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Sponsorships
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="group text-lg font-medium text-default-950"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="border-b border-default-200 p-6 xl:border-x xl:border-b-0">
              <div className="mx-auto">
                <LuBoxes className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                Marketing Consultancy
              </h2>
              <p className="mt-5 text-base">
                The product facets of marketing involve the specifications of
                the relevant products, goods, or services, and their alignment
                with the needs and desires of the end-users.
              </p>
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Search Engine Optimization
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Strategic Marketing
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Collaborations
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="group text-lg font-medium text-default-950"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="p-6">
              <div className="mx-auto">
                <LuRocket className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="mt-5 text-2xl font-medium text-default-950">
                Online Advertising
              </h2>
              <p className="mt-5 text-base">
                This pertains to how the product reaches the customer, including
                intermediaries such as wholesalers and retailers who facilitate
                convenient access to products or services.
              </p>
              <ul
                role="list"
                className="text-default-white -ms-3 mb-3 mt-4 text-sm"
              >
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Experiential Marketing
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Event Marketing
                  </span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">
                    Seasonal Campaigns
                  </span>
                </li>
              </ul>
              <Link
                href=""
                className="group text-lg font-medium text-default-950"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
