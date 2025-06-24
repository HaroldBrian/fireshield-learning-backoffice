import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type FeatureType = {
  title: string
  description: string
  icon: IconType
}

export type ServiceType = {
  title: string
  description: string
  icon: IconType
}

export type FaqType = {
  title: string
  description: string
}

export type TestimonialSliderType = {
  name: string
  location: string
  description: string
  image: StaticImageData
}

export type BlogSliderType = {
  description: string
  image: StaticImageData
}
