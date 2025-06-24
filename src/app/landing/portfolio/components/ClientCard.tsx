import { LuStar } from 'react-icons/lu'
import type { TestimonialType } from '../types'
import Image from 'next/image'

const ClientCard = ({ client }: { client: TestimonialType }) => {
  return (
    <div>
      <div className="relative m-2 w-full lg:w-full">
        <div className="group">
          <div className="w-full translate-x-1 rounded-xl border border-default-200">
            <div className="relative z-10 h-full rounded-xl bg-white p-6 dark:bg-default-50">
              <div className="flex items-center gap-3">
                <div className="rounded-full border p-1">
                  <Image
                    src={client.image}
                    alt="client-image"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-default-950">
                    {client.name}
                  </h3>
                  <p className="mt-1 text-sm">user</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-base">{client.description}</p>
              <div className="mt-3 flex items-center gap-1">
                {Array.from(new Array(4)).map((_val, idx) => {
                  return (
                    <LuStar
                      key={idx}
                      className="h-5 w-5 fill-yellow-300 text-yellow-300"
                    />
                  )
                })}
                <LuStar className="h-5 w-5 text-yellow-300" />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-default-200" />
        </div>
      </div>
    </div>
  )
}

export default ClientCard
