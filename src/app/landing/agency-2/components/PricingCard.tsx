import { LuDot } from 'react-icons/lu'
import type { PricingType } from '../types'
import Link from 'next/link'

const PricingCard = ({ pricingPlan }: { pricingPlan: PricingType }) => {
  const { day, features, name, price } = pricingPlan
  return (
    <div className="z-2 group relative rounded-md bg-default-100 shadow dark:bg-default-50">
      <div className="p-6 py-8">
        <h6 className="mb-5 font-bold uppercase text-primary">{name}</h6>
        <div className="mb-2 flex text-default-950">
          <span className="text-xl font-semibold">$</span>
          <span className="price mb-0 text-4xl font-semibold">{price}</span>
          <span className="mb-1 self-end text-xl font-semibold">/mo</span>
        </div>
        <p>{day} days free</p>
        <ul role="list" className="text-default-white -ms-3 mb-5 mt-4 text-sm">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 py-1">
              <LuDot className="inline-block h-8 w-8 stroke-primary" />
              <span className="text-base text-default-950">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href=""
          className="inline-block rounded-md  border border-primary/50 bg-primary/10 px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default PricingCard
