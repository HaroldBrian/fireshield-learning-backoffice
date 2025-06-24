import { ProjectSwiper } from '@/components'
import { portfolioSlides } from '../data'

const PortfolioSlider = () => {
  return (
    <section id="portfolio" className="pb-10 pt-20">
      <div className="mb-10 flex items-end justify-between">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Portfolio
          </span>
          <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
            Selected Projects.
          </h2>
        </div>
      </div>
      <div>
        <ProjectSwiper slides={portfolioSlides} bgBlack />
      </div>
    </section>
  )
}

export default PortfolioSlider
