import Link from 'next/link'
import type { ExpertType } from '../types'
import Image from 'next/image'

const ExpertCard = ({ expert }: { expert: ExpertType }) => {
  return (
    <div className="bg-default-100 dark:bg-default-50">
      <div className="p-8 sm:p-10">
        <div className="mb-6 flex items-center gap-5">
          <Image
            alt="expert-image"
            width={56}
            height={56}
            src={expert.image}
            className="h-14 rounded-full"
          />
          <div>
            <Link href="">
              <h4 className="text-xl font-medium text-default-950">
                {expert.name}
              </h4>
            </Link>
            <p className="text-base">{expert.position}</p>
          </div>
        </div>
        <p className="text-base text-default-900">
          &quot;{expert.description}&quot;
        </p>
      </div>
    </div>
  )
}

export default ExpertCard
