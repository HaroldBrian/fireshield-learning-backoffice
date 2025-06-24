import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { faqContent } from '../data'
import { cn } from '@/utils'

const FAQs = () => {
  return (
    <section id="faq" className="bg-white py-10 dark:bg-default-50 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="hs-accordion-group space-y-4">
              {faqContent.map((faq, idx) => {
                return (
                  <div
                    key={idx}
                    className={cn(
                      'hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50',
                      { active: idx == 0 }
                    )}
                    id="faq-1"
                  >
                    <button
                      className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                      aria-controls="faq-accordion-1"
                    >
                      <h5 className="flex text-base font-medium">
                        {faq.title}
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="chevron-up"
                        className="lucide lucide-chevron-up h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
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
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our FAQ
            </span>
            <h2 className="mt-5 text-4xl/tight font-medium text-default-950">
              Frequently Asked Questions ?
            </h2>
            <p className="mb-10 mt-5 text-base">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
              blandit vel, luctus pulvinar, hendrerit id, lorem.
            </p>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
            >
              Read More
              <LuMoveRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
