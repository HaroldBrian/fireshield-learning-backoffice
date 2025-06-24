import type { StaticImageData } from 'next/image'

export type ExpertType = {
  name: string
  position: string
  description: string
  image: StaticImageData
}

export type AssetType = {
  title: string
  description: string
  image: StaticImageData
}
