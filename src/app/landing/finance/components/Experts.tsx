import { experts } from '../data'
import ExpertCard from './ExpertCard'

const Experts = () => {
  return (
    <section id="experts" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Experts
            </span>
            <h2 className="mt-4 text-4xl font-medium text-default-950">
              You&apos;re the expert in business; we&apos;re the numbers
              experts.
            </h2>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl lg:grid-cols-2">
          {experts.map((expert, idx) => (
            <ExpertCard expert={expert} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experts
