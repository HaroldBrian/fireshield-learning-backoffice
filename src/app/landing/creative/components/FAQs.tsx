import creative2 from '@/assets/images/landing/creative/img-2.jpg'
import creative7 from '@/assets/images/landing/creative/img-7.jpg'
import { faqContent } from '../data'
import { LuChevronUp, LuHelpCircle } from 'react-icons/lu'
import { cn } from '@/utils'
import Image from 'next/image'

const FAQs = () => {
  return (
    <section className="py-10 lg:py-20" id="faq">
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
        <div className="relative">
          <div className="hidden lg:block">
            <div className="before:absolute before:-start-10 before:-top-10 before:h-24 before:w-24 before:bg-[url('../images/other/dot.svg')]" />
            <div className="after:absolute after:-bottom-10 after:-end-10 after:h-24 after:w-24 after:bg-[url('../images/other/dot.svg')]" />
          </div>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div>
              <div className="relative z-10">
                <Image
                  alt="creative2"
                  src={creative2}
                  width={432}
                  height={288}
                  className="h-full rounded-md shadow lg:h-72"
                />
              </div>
              <div className="-mt-28 hidden xl:block">
                <Image
                  alt="creative7"
                  src={creative7}
                  width={432}
                  height={288}
                  className="ms-auto h-72 rounded-md shadow"
                />
              </div>
            </div>
            <div>
              <div className="hs-accordion-group space-y-4">
                {faqContent.map((faq, idx) => {
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'hs-accordion overflow-hidden rounded-lg border border-default-200 bg-default-50 backdrop-blur-3xl',
                        { active: idx == 0 }
                      )}
                      id="faq-2"
                    >
                      <button
                        className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                        aria-controls="faq-2"
                      >
                        <h5 className="flex text-base font-medium">
                          <LuHelpCircle className="me-3 h-5 w-5 stroke-default-950 align-middle" />
                          {faq.title}
                        </h5>
                        <LuChevronUp className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                      </button>
                      <div
                        id="faq-2"
                        className={cn(
                          'hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300',
                          { hidden: idx != 0 }
                        )}
                        aria-labelledby="faq-2"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <p className="mb-2  text-sm">{faq.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
