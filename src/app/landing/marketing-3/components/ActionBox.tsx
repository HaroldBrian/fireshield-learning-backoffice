import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import marketing7 from '@/assets/images/landing/marketing-3/img-7.png'
import Image from 'next/image'

const ActionBox = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="rounded-xl bg-primary/20 p-6">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div>
              <Image src={marketing7} alt="marketing7" className="max-w-full" />
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col">
                <div>
                  <h3 className="mb-2 text-3xl/snug font-medium text-default-950">
                    Transform your concepts into reality <br />
                    and construct your website visually.
                  </h3>
                  <p className="mb-6 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    tempora dolorem incidunt ex at possimus laborum nemo dolor.
                    Nam doloremque inventore dolor. Id maxime quos odio natus
                    sit repellat fugiat.
                  </p>
                </div>
                <div>
                  <Link
                    href=""
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
                  >
                    Sign up free
                    <LuMoveRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
