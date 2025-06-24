import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type PricingPlan = {
  name: string
  price: number
  title: string
  subTitle: string
  features: string[]
}

export type ServiceType = {
  title: string
  description: string
  icon: IconType
}

export type TestimonialSliderType = {
  name: string
  location: string
  description: string
  image: StaticImageData
}

export type FaqType = {
  title: string
  description: string
}
