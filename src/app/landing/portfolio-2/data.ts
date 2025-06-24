import {
  LuFigma,
  LuInstagram,
  LuLayers,
  LuLinkedin,
  LuTriangle,
  LuTwitter,
} from 'react-icons/lu'
import type {
  AccoladeType,
  BlogType,
  ResourceType,
  TestimonialSlideType,
} from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'

import portfolio5 from '@/assets/images/landing/portfolio-2/img-5.jpg'
import portfolio6 from '@/assets/images/landing/portfolio-2/img-6.jpg'
import portfolio7 from '@/assets/images/landing/portfolio-2/img-7.jpg'

const resources: ResourceType[] = [
  {
    name: 'Figma',
    percentage: 94,
    icon: LuFigma,
  },
  {
    name: 'Sketch',
    percentage: 82,
    icon: LuTriangle,
  },
  {
    name: 'Photoshop',
    percentage: 98,
    icon: LuInstagram,
  },
  {
    name: 'Adobe xDS',
    percentage: 84,
    icon: LuTwitter,
  },
  {
    name: 'Invisionapp',
    percentage: 78,
    icon: LuLinkedin,
  },
  {
    name: 'Illustrator',
    percentage: 84,
    icon: LuLayers,
  },
]

const accolades: AccoladeType[] = [
  {
    title: 'Awwwards Site of the Day',
    subTitle: 'For Exhibition in 2023',
  },
  {
    title: 'Awwwards',
    subTitle: 'Awarded to Muteza in 2023',
    divider: true,
  },
  {
    title: 'Muzli',
    subTitle: 'Featured in 2023',
  },
  {
    title: 'CSS Awardssa',
    subTitle: 'Featured in 2023',
  },
  {
    title: 'coderthemes.com',
    subTitle: 'Interview 2023',
    divider: true,
  },
  {
    title: 'Chapters Studio',
    subTitle: 'On Display in 2023',
  },
]

const testimonialSlides: TestimonialSlideType[] = [
  {
    name: 'Farhan Firoz',
    position: 'Founder & CEO',
    description:
      'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
    image: avatar3,
  },
  {
    name: ' Robert Henricks',
    position: 'UI/UX Designer',
    description:
      "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
    image: avatar1,
  },
  {
    name: ' Albert Flores',
    position: 'Marketing Officer',
    description:
      'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
    image: avatar5,
  },
  {
    name: 'Rudra Ghosh',
    position: 'Founder & CEO',
    description:
      "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
    image: avatar4,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Six Hands-On Exercises for Mastering UI/UX Design.',
    date: 'October 10,2023',
    image: portfolio7,
  },
  {
    title: 'Designing a Photoshoot Environment',
    date: 'June 16,2023',
    image: portfolio5,
  },
  {
    title: 'The Essentials of Conversion-Oriented Design',
    date: 'October 10,2023',
    image: portfolio6,
  },
]
export { resources, accolades, testimonialSlides, blogs }
