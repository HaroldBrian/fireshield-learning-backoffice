import { LuArrowRight, LuStar } from 'react-icons/lu'
import Link from 'next/link'

const about = [
  'Extremely impressed with the service and the outcomes!',
  'Outstanding service for precision-targeted lead generation.',
  "I've thoroughly enjoyed my collaboration with Resonance.",
]
const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our About
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Top-Tier Online Marketing Firm Located in New York
          </h2>
          <p className="mt-5 text-base">
            Marketing encompasses the activities, institutions, and procedures
            aimed at generating, conveying, delivering, and exchanging valuable
            offerings for customers, partners, and society as a whole.
          </p>
        </div>
        <div className="rounded-xl border border-default-200">
          <div className="grid grid-cols-1 items-center divide-y divide-default-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {about.map((item, idx) => {
              return (
                <div key={idx} className="p-8 text-center">
                  <h5 className="text-xl font-medium text-default-950">
                    &quot;{item}&quot;
                  </h5>
                  <p className="mt-4 text-lg text-default-950">
                    Rated 4.5 on Trustpilot
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-1">
                    {Array.from(new Array(5)).map((_val, idx) => {
                      return (
                        <LuStar
                          key={idx}
                          data-lucide="star"
                          className="h-6 w-6 fill-yellow-300 text-yellow-300"
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            Read More
            <LuArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
