import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type PortfolioSliderType = {
  title: string
  subTitle: string
  image: StaticImageData
}

export type StepType = {
  title: string
  description: string
  icon: IconType
}

export type TestimonialSlideType = {
  name: string
  position: string
  description: string
  image: StaticImageData
}

export type BlogType = {
  title: string
  description: string
  date: string
  type: string
  image: StaticImageData
}
