import { clients } from '../data'
import ClientCard from './ClientCard'

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Testimonials
            </span>
            <h2 className="my-4 text-3xl font-medium text-default-950 md:text-4xl">
              Client Testimonials
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div>
          <div className="relative m-auto flex gap-8 overflow-hidden">
            <div className="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8">
              {clients.map((client, idx) => (
                <ClientCard client={client} key={idx} />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee__group flex min-w-full flex-shrink-0 justify-around gap-8"
            >
              {clients.map((client, idx) => (
                <ClientCard client={client} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
