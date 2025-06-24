import { allReviews } from '../data'
import ReviewCard from './ReviewCard'

const Since = () => {
  return (
    <section className="relative py-10 lg:py-20 xl:py-0">
      <div className="container">
        <div className="relative grid grid-cols-1 items-center gap-12 xl:grid-cols-2">
          <div className="mx-auto">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Since From
            </span>
            <h1 className="my-4 max-w-lg text-4xl font-medium text-default-950 md:text-5xl/tight">
              Keep pushing forward. We&apos;ve got your back.
            </h1>
            <p className="max-w-md md:text-lg">
              Thing go wrong have questions. We&apos;ve understand. So we have
              people
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-16">
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-medium text-default-950">10k</h2>
                <p className="text-base">
                  Happy Users <br />
                  Around World
                </p>
              </div>
              <div className="flex items-center gap-6">
                <h2 className="text-5xl font-medium text-default-950">120k</h2>
                <p className="text-base">
                  Projects <br />
                  Already Done
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[600px] overflow-hidden">
            <div className="marquee">
              <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                  {allReviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                  ))}
                </div>
                <div
                  aria-hidden="true"
                  className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                >
                  {allReviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Since
