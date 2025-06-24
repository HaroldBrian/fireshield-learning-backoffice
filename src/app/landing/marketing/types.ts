import type { StaticImageData } from 'next/image'

export type PortfolioSlideType = {
  title: string
  subTitle: string
  image: StaticImageData
}

export type FaqType = {
  title: string
  description: string
}

export type TestimonialSliderType = {
  name: string
  description: string
  image: StaticImageData
}

export type BlogType = {
  title: string
  image: StaticImageData
}
