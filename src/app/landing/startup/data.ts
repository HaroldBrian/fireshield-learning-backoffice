import { LuAirplay, LuFigma, LuLayers, LuLayoutGrid } from 'react-icons/lu'
import type {
  BlogType,
  ServiceType,
  StatisticType,
  TestimonialSlideType,
} from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'

import startup8 from '@/assets/images/landing/startup/img-8.jpg'
import startup9 from '@/assets/images/landing/startup/img-9.jpg'

const statistics: StatisticType[] = [
  {
    title: 'Completed Projects',
    state: '180+',
  },
  {
    title: 'Satisfied Clients',
    state: '90+',
  },
  {
    title: 'Cups of Coffee',
    state: '30k',
  },
  {
    title: 'Negative Reviews',
    state: '0',
  },
]

const services: ServiceType[] = [
  {
    title: 'Brand Strategy',
    description:
      'Curabitur vel molestie dolor vulputate diam. Etiam ornare facilisis eu euismod cras blandit vel purus nec varius.',
    icon: LuLayoutGrid,
  },
  {
    title: 'UI/UX Design',
    description:
      'Quisque accumsan augue nec ligula gravida, eleifend volutpat, vulputate imperdiet quis sed odio.',
    icon: LuFigma,
  },
  {
    title: 'Motion Design',
    description:
      'Maecenas finibus ipsum orci, sit amet eleifend purus rutrum fringilla. Nunc quis lobortis nulla.',
    icon: LuLayers,
  },
  {
    title: 'Research & Solutions',
    description:
      'Cras nisl ex, fermentum id volutpat luctus, interdum luctus tortor. Nunc vestibulum accumsan.',
    icon: LuAirplay,
  },
]

const testimonialSlides: TestimonialSlideType[] = [
  {
    name: 'Alice Watson',
    position: 'Product Designer',
    description:
      'A remarkable model, everything has been thought out with skill – the design, the responsiveness, and the various adaptations.',
    image: avatar4,
  },
  {
    name: 'Thomas Johnson',
    position: 'UI/UX Designer',
    description:
      ' Beautiful template with clean code, easily customizable. Optimal structure for SEO basics.',
    image: avatar3,
  },
  {
    name: 'Emma Kande',
    position: '3D Artist',
    description:
      "The support is among the best I've ever had the pleasure of interacting with. Quick, courteous, and exceptionally helpful!",
    image: avatar1,
  },
  {
    name: 'Peter Rebel',
    position: 'Business Owner',
    description:
      'This template is exceptionally beautiful and offers fantastic new options. Its frequent updates add to its quality.',
    image: avatar5,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Elegant Branding Work for Red Circle by Oddone',
    description:
      'Oddone collaborated with brand strategist Caren Williams to create elegant branding for Red Circle, a San Francisco-based startup.',
    image: startup8,
  },
  {
    title: 'Random Explorations with Cinema 4D and Redshift',
    description:
      'Oddone collaborated with brand strategist Caren Williams to create elegant branding for Red Circle, a San Francisco-based startup.',
    image: startup9,
  },
]
export { statistics, services, testimonialSlides, blogs }
