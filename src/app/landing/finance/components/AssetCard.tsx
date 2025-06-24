import Link from 'next/link'
import type { AssetType } from '../types'
import { LuMoveRight } from 'react-icons/lu'
import Image from 'next/image'

const AssetCard = ({ asset }: { asset: AssetType }) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-default-200">
      <div className="group relative overflow-hidden">
        <div className="overflow-hidden">
          <Image
            alt="asset-image"
            src={asset.image}
            className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-medium text-default-950 transition-all duration-700">
            {asset.title}
          </h2>
          <p className="my-4 text-base">{asset.description}</p>
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
          >
            Read More
            <LuMoveRight className="inline-block h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AssetCard
