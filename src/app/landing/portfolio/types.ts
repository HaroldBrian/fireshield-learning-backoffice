import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type FeatureType = {
  title: string
  description: string
}

export type TestimonialType = {
  name: string
  description: string
  image: StaticImageData
}

export type BlogType = {
  title: string
  description: string
  image: StaticImageData
}

export type ServiceType = {
  title: string
  description: string
  icon: IconType
  variant: string
}
