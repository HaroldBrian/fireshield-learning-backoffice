import type { StaticImageData } from 'next/image'

export type HeroSwiperType = {
  title: string
  description: string
}

export type PortfolioSlideType = {
  title: string
  subTitle: string
  image: StaticImageData
}

export type TestimonialSliderType = {
  name: string
  description: string
  image: StaticImageData
}

export type FaqType = {
  title: string
  description: string
}

export type BlogType = {
  title: string
  description: string
  image: StaticImageData
}
