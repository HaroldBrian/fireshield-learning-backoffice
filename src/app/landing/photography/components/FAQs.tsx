import { cn } from '@/utils'
import { faqContent } from '../data'
import { LuPlus } from 'react-icons/lu'

const FAQs = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950">
              Our FAQ
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Have Questions?
            </h2>
            <p className="text-base">
              Discover solutions to frequently asked questions about booking pet
              portrait sessions, event photography, wildlife destinations, and
              the use of commercial images.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {faqContent.map((faq, idx) => {
              return (
                <div
                  key={idx}
                  className={cn(
                    'hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10',
                    { active: idx == 0 }
                  )}
                  id="faq-1"
                >
                  <button
                    className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-accordion-1"
                  >
                    <h5 className="text-xl font-medium">{faq.title}</h5>
                    <LuPlus className="h-6 w-6 transition-all duration-300 hs-accordion-active:-rotate-45" />
                  </button>
                  <div
                    id="faq-accordion-1"
                    className={cn(
                      'hs-accordion-content w-full overflow-hidden transition-[height] duration-300',
                      { hidden: idx != 0 }
                    )}
                    aria-labelledby="faq-1"
                  >
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-sm">{faq.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
