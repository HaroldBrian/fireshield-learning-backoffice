import type {
  BlogType,
  FeatureType,
  ServiceType,
  TestimonialType,
} from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'
import avatar6 from '@/assets/images/avatars/img-6.jpg'

import portfolio4 from '@/assets/images/landing/portfolio/img-4.jpg'
import portfolio5 from '@/assets/images/landing/portfolio/img-5.jpg'
import { LuAirplay, LuCircleDollarSign, LuMail } from 'react-icons/lu'

const features: FeatureType[] = [
  {
    title: 'Drive Sales Growth',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore.',
  },
  {
    title: 'Fuel Expansion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore.',
  },
  {
    title: 'Focused Audience',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

const clients: TestimonialType[] = [
  {
    name: 'Ryan Delk',
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, content to the next level.",
    image: avatar1,
  },
  {
    name: 'Marsel Fischer',
    description:
      "As a content marketer, I'm always looking for ways to streamline my workflow and create high-quality for me, and I don't know how I ever managed without it.",
    image: avatar2,
  },
  {
    name: 'John Tayes',
    description:
      ' The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interacti',
    image: avatar3,
  },
  {
    name: '  Ryan Jonas',
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is engaging, and it's helped me take my content to the next level.",
    image: avatar4,
  },
  {
    name: 'Randy Hilarski',
    description:
      'I was surprised by the ease and speed of the video editing service based on AI technology from this site. The resylts are amazing and very satisfying.',
    image: avatar5,
  },
  {
    name: 'Jonathan Simcoe',
    description:
      'The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.',
    image: avatar6,
  },
]

const blogs: BlogType[] = [
  {
    title: "The Definitive SEO Guide: Enhancing Your Website's Visibility",
    description:
      'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
    image: portfolio4,
  },
  {
    title: 'Effective Social Media Marketing Tactics for Small Businesses',
    description:
      'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.',
    image: portfolio5,
  },
]

const services: ServiceType[] = [
  {
    title: 'SEO Solutions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: LuAirplay,
    variant: 'sky',
  },
  {
    title: 'PPC Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: LuCircleDollarSign,
    variant: 'pink',
  },
  {
    title: 'Email Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: LuMail,
    variant: 'purple',
  },
]

export { clients, features, blogs, services }
