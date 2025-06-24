import { LuComponent, LuLayers, LuLayoutGrid } from 'react-icons/lu'
import type {
  BlogType,
  FaqType,
  PortfolioSlideType,
  ServiceType,
  SlideType,
} from './types'

import agency6 from '@/assets/images/landing/agency/img-6.jpg'
import agency7 from '@/assets/images/landing/agency/img-7.jpg'
import agency8 from '@/assets/images/landing/agency/img-8.jpg'
import agency9 from '@/assets/images/landing/agency/img-9.jpg'
import agency13 from '@/assets/images/landing/agency/img-13.jpg'
import agency14 from '@/assets/images/landing/agency/img-14.jpg'
import agency15 from '@/assets/images/landing/agency/img-15.jpg'

const homeSwiperSlides: SlideType[] = [
  {
    title: 'Digital agency',
    name: 'Beyond a Design Agency',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
  {
    title: 'Digital agency',
    name: 'Beyond a Design Agency',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
  {
    title: 'Digital agency',
    name: 'Beyond a Design Agency',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
]

const services: ServiceType[] = [
  {
    title: 'Developer',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design',
    icon: LuComponent,
  },
  {
    title: 'Digital Product Design',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design',
    icon: LuLayers,
  },
  {
    title: 'Branding & Design',
    description:
      'Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design',
    icon: LuLayoutGrid,
  },
]

const portfolioSlides: PortfolioSlideType[] = [
  {
    title: 'Web Design',
    subTitle: 'Branding Process',
    image: agency6,
  },
  {
    title: 'Web Design',
    subTitle: 'Digital Platform',
    image: agency7,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: agency8,
  },
  {
    title: 'Web Design',
    subTitle: 'New Gadgets',
    image: agency9,
  },
]

const faqContents: FaqType[] = [
  {
    title: 'What is web design, and why is it important?',
    description:
      'Web design is the process of creating the visual and functional elements of a website.',
  },
  {
    title: 'Are These Projects Real Or Concepts?',
    description:
      "The projects featured in my portfolio are a mix of real-world projects I've completed and conceptual designs that showcase my creative thinking and design skills.",
  },
  {
    title: 'How Often Is The Portfolio Updated?',
    description:
      'I strive to keep my portfolio up-to-date with my latest work and projects. I regularly update it to reflect my evolving skills and design philosophy.',
  },
  {
    title: 'Can I Leave Feedback Or Comments On The Portfolio Projects?',
    description:
      "At the moment, I don't have a comments section on the portfolio pages. However, I welcome feedback and inquiries.",
  },
]

const blogs: BlogType[] = [
  {
    title: 'Brilliant minds.',
    description:
      'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
    no: '06',
    image: agency13,
  },
  {
    title: 'Digital Marketing.',
    description:
      'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
    no: '05',
    image: agency14,
  },
  {
    title: 'Good thinking.',
    description:
      'Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...',
    no: '04',
    image: agency15,
  },
]

export { homeSwiperSlides, services, portfolioSlides, faqContents, blogs }
