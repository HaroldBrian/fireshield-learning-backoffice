import { LuChevronUp } from 'react-icons/lu'
import { faqContent } from '../data'
import { cn } from '@/utils'

const FAQs = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
            Frequently Asked Questions ?
          </h2>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="hs-accordion-group space-y-4">
            {faqContent.map((faq, idx) => {
              return (
                <div key={idx} className="relative z-20 w-full lg:w-full">
                  <div
                    className={cn(
                      'hs-accordion overflow-hidden border border-default-200 bg-white transition-all duration-500 hs-accordion-active:-translate-y-2 hs-accordion-active:translate-x-2 dark:bg-default-50',
                      { active: idx == 0 }
                    )}
                    id="faq-1"
                  >
                    <button
                      className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                      aria-controls="faq-accordion-1"
                    >
                      <h5 className="text-xl font-medium">{faq.title}</h5>
                      <LuChevronUp className="h-6 w-6 stroke-default-950 transition-all duration-500 hs-accordion-active:-rotate-180" />
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
                        <p className="text-base">{faq.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 -z-10 h-full w-full bg-default-950" />
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
