import { ApexOptions } from 'apexcharts'
import type { StaticImageData } from 'next/image'

export type StatisticType = {
  title: string
  state: string
  change: number
  variant: 'text-teal-500' | 'text-red-500'
  chartOptions: ApexOptions
}

export type sourceType = {
  type: string
  session: number
  view: number
}

export type PerformerType = {
  name: string
  position: string
  image: StaticImageData
}

export type OrderType = {
  id: number
  product: string
  customer: string
  price: number
  status: 'Pending' | 'Delivered' | 'Declined'
}
