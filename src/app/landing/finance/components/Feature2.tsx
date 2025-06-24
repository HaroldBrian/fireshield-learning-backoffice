import finance9 from '@/assets/images/landing/finance/img-9.png'
import { LuCircle, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import Image from 'next/image'

const Feature2 = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <Image
              alt="finance-9"
              src={finance9}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Investor ready reporting
            </span>
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              Streamline Data Integrations: Simplify finance with Vault
            </h2>
            <ul
              role="list"
              className="-ms-3 mt-6 space-y-2 ps-6 text-sm text-default-700"
            >
              <li className="flex items-center gap-3">
                <LuCircle className="inline-block h-2 w-2 shrink fill-primary text-primary" />
                <span className="grow text-base font-medium">
                  Demonstrate your firm grasp of business finances by having
                  instant access.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuCircle className="inline-block h-2 w-2 shrink fill-primary text-primary" />
                <span className="grow text-base font-medium">
                  Effortlessly collaborate with investors by sharing live
                  reports and models.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuCircle className="inline-block h-2 w-2 shrink fill-primary text-primary" />
                <span className="grow text-base font-medium">
                  Simplify investor collaboration by seamlessly sharing
                  real-time Sheets.
                </span>
              </li>
            </ul>
            <div className="group mt-5">
              <Link
                href=""
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Read More
                <LuMoveRight className="inline-block h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature2
