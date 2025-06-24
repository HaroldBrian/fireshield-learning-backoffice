import { LuMoveRight } from 'react-icons/lu'
import PricingCard from './PricingCard'
import { pricingPlans } from '../data'

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid gap-6 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Pricing
            </span>
            <h2 className="mt-6 text-4xl font-medium text-default-950">
              Affordable Pricing. <br /> Easy scaling.
            </h2>
            <hr className="my-6 hidden border border-dashed text-default-800 xl:block" />
            <p className="text-base">
              Things go wrong have questions. We’ve understand. So we have
              people
            </p>
            <ul role="list" className="text-default-white mt-4 text-sm">
              <li className="flex items-center gap-2 py-1">
                <LuMoveRight className="inline-block h-6 w-6 stroke-primary" />
                <span className="text-base text-default-950">
                  Amazing communication.
                </span>
              </li>
              <li className="flex items-center gap-2 py-1">
                <LuMoveRight className="inline-block h-6 w-6 stroke-primary" />
                <span className="text-base text-default-950">
                  Best trendinf designing experience.
                </span>
              </li>
              <li className="flex items-center gap-2 py-1">
                <LuMoveRight className="inline-block h-6 w-6 stroke-primary" />
                <span className="text-base text-default-950">
                  Email &amp; Live chat.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0 xl:col-span-3">
            <div className="lg:ms-8">
              <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                {pricingPlans.map((plan, idx) => (
                  <PricingCard key={idx} pricingPlan={plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
