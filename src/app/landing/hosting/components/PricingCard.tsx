import { LuDot } from 'react-icons/lu'
import { PricingPlan } from '../types'
import Link from 'next/link'

const PricingCard = ({ pricingPlan }: { pricingPlan: PricingPlan }) => {
  const { features, name, price, subTitle, title } = pricingPlan

  return (
    <div className="relative mx-auto w-full lg:w-full">
      <div className="group">
        <div className="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
          <div className="bg-white p-6 dark:bg-default-50">
            <h5 className="text-center text-2xl font-medium text-default-950">
              {name}
            </h5>
            <p className="mt-1 text-center text-xs uppercase tracking-widest text-default-950">
              For individuals and teams
            </p>
            <div className="mt-6 flex items-center gap-4 bg-default-100 p-5 text-default-950">
              <h2 className="text-5xl font-semibold">
                <sup className="text-xl">$</sup>
                {price}
              </h2>
              <div>
                <p className="text-lg">{title}</p>
                <p className="text-xs">{subTitle}</p>
              </div>
            </div>
            <ul role="list" className="mt-3 text-sm text-default-700">
              {features.map((feature, idx) => {
                return (
                  <li key={idx} className="flex items-center gap-2">
                    <LuDot className="inline-block h-9 w-9 text-primary" />
                    <span className="text-base text-default-950">
                      {feature}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="relative z-20 mx-auto mt-5 w-full lg:w-56">
              <div className="group">
                <div className="w-full border border-default-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:border-transparent">
                  <div className="relative z-10 flex h-4 items-center justify-center bg-primary p-6">
                    <Link className="button bg-primary text-white" href="">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
      </div>
    </div>
  )
}

export default PricingCard
