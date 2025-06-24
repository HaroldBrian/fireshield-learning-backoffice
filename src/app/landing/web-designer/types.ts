import type { StaticImageData } from 'next/image'

export type ServiceType = {
  title: string
  description: string
}

export type WorkType = {
  date: string
  title: string
  category: string
  description: string
  image: StaticImageData
}

export type FaqType = {
  title: string
  description: string
}
export type StoryType = {
  title: string
  date: string
  postedBy: string
  image: StaticImageData
  backgroundImage: StaticImageData
}
