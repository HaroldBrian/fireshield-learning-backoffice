import { cn } from '@/utils'
import { faqContent } from '../data'
import { LuChevronUp } from 'react-icons/lu'

import marketing9 from '@/assets/images/landing/marketing/img-9.jpg'
import marketing10 from '@/assets/images/landing/marketing/img-10.jpg'
import Image from 'next/image'

const FAQs = () => {
  return (
    <section id="faq" className="bg-white py-10 dark:bg-default-50 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our FAQ
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Frequently Asked Questions ?
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative mb-20 lg:mb-0">
            <div className="relative">
              <Image alt="marketing-9" src={marketing9} className="mx-auto" />
            </div>
            <div className="absolute inset-x-0 -bottom-14 hidden sm:block">
              <Image alt="marketing-10" src={marketing10} className="h-full" />
            </div>
          </div>
          <div className="lg:pb-20">
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
                      <LuChevronUp className="lucide lucide-chevron-up h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180" />
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
                        <p className="text-sm">
                          It can increase brand visibility, drive website
                          traffic, generate leads, and ultimately boost sales
                          and revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
