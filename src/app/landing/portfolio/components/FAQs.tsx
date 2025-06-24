import { cn } from '@/utils'

const faqs = [
  'Is Subscription Upgrading Possible?',
  'Guaranteed First-Page Google Placement?',
  'Tailored Marketing Approaches?',
  'Do You Offer Local SEO Services?',
  'Is Blogging Crucial For SEO Success?',
  "What's The ROI Of Digital Marketing?",
]
const FAQs = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our FAQ
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Find Your Answers Here
            </h2>
            <p className="text-base">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {faqs.map((faq, idx) => {
              return (
                <div
                  key={idx}
                  className={cn(
                    'hs-accordion overflow-hidden rounded-lg border border-primary/20 hs-accordion-active:bg-primary/10',
                    { active: idx === 0 }
                  )}
                >
                  <button
                    className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-accordion-1"
                  >
                    <h5 className="flex text-base font-medium">{faq}</h5>
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
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
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
