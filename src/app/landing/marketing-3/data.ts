import {
  LuClipboardSignature,
  LuContact2,
  LuFolderKanban,
  LuImage,
  LuNewspaper,
  LuStore,
} from 'react-icons/lu'
import { FaqType, ServiceType } from './types'

const services: ServiceType[] = [
  {
    title: 'Search Engine Optimization',
    icon: LuNewspaper,
  },
  {
    title: 'Social Media Marketing',
    icon: LuFolderKanban,
  },
  {
    title: 'E-commerce Solutions',
    icon: LuClipboardSignature,
  },
  {
    title: 'Pay-Per-Click Advertising',
    icon: LuStore,
  },
  {
    title: ' Branding  Strategy',
    icon: LuContact2,
  },
  {
    title: 'Marketing Copywriting',
    icon: LuImage,
  },
]

const faqContent: FaqType[] = [
  {
    title: 'Monetize Your App With Google Mobile',
    description:
      'It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue.',
  },
  {
    title: 'Performance-Optimized Hosting In Your Account',
    description:
      'We work with businesses of various budgets and can create strategies that align with your financial resources while delivering meaningful results.',
  },
  {
    title: "Monitor Your Car's Location",
    description:
      'provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization',
  },
  {
    title: 'Leverage Google Mobile To Monetize Your App',
    description:
      'provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization',
  },
]

export { services, faqContent }
