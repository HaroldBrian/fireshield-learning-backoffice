import {
  LuComponent,
  LuFigma,
  LuLayers,
  LuLayoutGrid,
  LuMonitor,
  LuMoveRight,
  LuPaintbrush,
} from 'react-icons/lu'
import Link from 'next/link'

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Featureo Features
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Our Features
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200 md:grid-cols-2 xl:grid-cols-3">
          <div className="group h-full border-b border-default-200">
            <div className="p-8 sm:p-10">
              <span>
                <LuComponent className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Developer
              </h2>
              <p className="mb-6 text-base">
                Lorem ipsum dummy text are usually use in these section. Lorem
                ipsum dummy text are used in this design
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 md:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuMonitor className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Web Design
              </h2>
              <p className="mb-6  text-base">
                {' '}
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium.
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 xl:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayers className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Digital Product Design
              </h2>
              <p className="mb-6  text-base">
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus.
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-s border-default-200 xl:border-0">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayoutGrid className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Branding &amp; Design
              </h2>
              <p className="mb-6  text-base">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere Curae; In ac dui quis mi consectetuer lacinia.
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-b border-default-200 md:border-b-0 xl:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuFigma className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Ui/Ux &amp; Design
              </h2>
              <p className="mb-6  text-base">
                Maecenas malesuada. Praesent congue erat at massa. Sed cursus
                turpis vitae tortor. Donec posuere vulputate arcu.
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
          <div className="group h-full border-default-200 md:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuPaintbrush className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Graphic Design
              </h2>
              <p className="mb-6  text-base">
                Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                nunc, eu sollicitudin urna dolor sagittis lacus.
              </p>
              <Link href="" className="text-lg text-default-950">
                Read More
                <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
