import {
  LuAppWindow,
  LuCodesandbox,
  LuDatabase,
  LuHeadphones,
  LuSettings,
  LuTruck,
} from 'react-icons/lu'
import type {
  BlogSliderType,
  FaqType,
  FeatureType,
  ServiceType,
  TestimonialSliderType,
} from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import company5 from '@/assets/images/landing/company/img-5.jpg'
import company6 from '@/assets/images/landing/company/img-6.jpg'
import company7 from '@/assets/images/landing/company/img-7.jpg'
import company8 from '@/assets/images/landing/company/img-8.jpg'
import company9 from '@/assets/images/landing/company/img-9.jpg'
import company10 from '@/assets/images/landing/company/img-10.jpg'

const features: FeatureType[] = [
  {
    title: 'Immediate Deployment',
    description: 'Et vero eos et accusamus et iusto odio dignissimos',
    icon: LuSettings,
  },
  {
    title: 'DOS Protection',
    description: 'But I need to clarify how this erroneous concept is',
    icon: LuAppWindow,
  },
  {
    title: 'Premium Support',
    description: 'we disapprove of those who uphold righteous indignation.',
    icon: LuHeadphones,
  },
]

const services: ServiceType[] = [
  {
    title: 'Fuel Delivery',
    description:
      'Efficiently delivers diverse fuels (gasoline, diesel, propane, etc.) promptly to residential, commercial, or industrial sites.',
    icon: LuTruck,
  },
  {
    title: 'Fuel Storage Solutions',
    description:
      'Supplying secure fuel storage solutions with tanks or containers, ensuring adherence to safety standards and regulations.',
    icon: LuDatabase,
  },
  {
    title: 'Equipment Maintenanceegies',
    description:
      'Providing maintenance for fuel-related equipment like pumps, tanks, and generators to ensure safety compliance and functionality.',
    icon: LuCodesandbox,
  },
]

const faqContent: FaqType[] = [
  {
    title: 'How Do You Address My Concepts?',
    description:
      'It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue.',
  },
  {
    title: 'In Which Industries Do You Have Expertise?',
    description:
      'We work with businesses of various budgets and can create strategies that align with your financial resources while delivering meaningful results.',
  },
  {
    title: 'How Do You Approach My Ideas?',
    description:
      'provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization',
  },
]

const testimonialSlides: TestimonialSliderType[] = [
  {
    name: 'Enagol Ame',
    location: 'Brazil',
    description:
      "We' ve been utilizing Vault for the past five years. Vault is exceptional. It goes without saying that we are incredibly content with the outcomes. Training was not even necessary.",
    image: avatar1,
  },
  {
    name: 'Rashed ka.',
    location: 'Italy',
    description:
      'Setting up was incredibly straightforward. I had no prior experience with hosting, but Vault has made everything appear easy.',
    image: avatar2,
  },
  {
    name: 'Jackma Kalin',
    location: 'USA',
    description:
      "Vault is the next game-changing application. I'm at a loss for words. I'll definitely inform my mom about this; she could benefit greatly from using Vault!",
    image: avatar3,
  },
]

const blogSlides: BlogSliderType[] = [
  {
    description: '10 Easy Habits to Enhance Your Daily Progress by 1%',
    image: company5,
  },
  {
    description: '5 Mind-Blowing Applications of Artificial Intelligence',
    image: company6,
  },
  {
    description:
      'This Highly Anticipated Technology Could Finally Transform the World',
    image: company7,
  },
  {
    description:
      'Design Thinking: Crafting a Design System for an Established Product',
    image: company8,
  },
  {
    description:
      'If You Possess Self-Discipline, Begin Cultivating These 4 Habits Now',
    image: company9,
  },
  {
    description:
      'This Highly Anticipated Technology Could Finally Transform the World',
    image: company10,
  },
]

export { features, services, faqContent, testimonialSlides, blogSlides }
