import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type FeatureType = {
  icon: IconType
  title: string
  description: string
}

export type FaqType = {
  title: string
  description: string
}

export type ProjectSlideType = {
  title: string
  subTitle: string
  image: StaticImageData
}

export type PricingType = {
  name: string
  price: number
  day: number
  features: string[]
}

export type ReviewType = {
  name: string
  description: string
  image: StaticImageData
}

export type BlogType = {
  title: string
  description: string
  image: StaticImageData
}
