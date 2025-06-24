import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type ServiceType = {
  title: string
  description: string
  icon: IconType
}

export type FaqType = {
  title: string
  description: string
}

export type BlogType = {
  title: string
  description: string
  type: string
  time: string
  image: StaticImageData
}
