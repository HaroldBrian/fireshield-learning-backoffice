import type {
  BlogType,
  FaqType,
  PricingType,
  ProjectSlideType,
  ReviewType,
} from './types'

import agency1 from '@/assets/images/landing/agency-2/img-1.jpg'
import agency2 from '@/assets/images/landing/agency-2/img-2.jpg'
import agency3 from '@/assets/images/landing/agency-2/img-3.jpg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'

const faqContent: FaqType[] = [
  {
    title: 'How Can Digital Marketing Benefit My Business?',
    description:
      'It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue.',
  },
  {
    title: 'Do I Need To Have A Large Budget For Digital Marketing?',
    description:
      'We work with businesses of various budgets and can create strategies that align with your financial resources while delivering meaningful results.',
  },
  {
    title: 'What Services Does [Your Digital Agency] Offer?',
    description:
      'provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization',
  },
  {
    title: 'Can Help With Content Creation And Social Media Management?',
    description:
      'Absolutely! We offer content creation services, including blog posts, social media content, and multimedia assets.',
  },
]

const projectSlides: ProjectSlideType[] = [
  {
    title: 'Web Design',
    subTitle: 'Branding Process',
    image: agency1,
  },
  {
    title: 'Web Design',
    subTitle: 'Digital Platform',
    image: agency2,
  },
  {
    title: 'Web Design',
    subTitle: 'Branding Studio',
    image: agency3,
  },
  {
    title: 'Web Design',
    subTitle: 'Branding Process',
    image: agency1,
  },
  {
    title: 'Web Design',
    subTitle: 'Branding Process',
    image: agency2,
  },
  {
    title: 'Web Design',
    subTitle: 'Branding Studio',
    image: agency3,
  },
]

const pricingPlans: PricingType[] = [
  {
    name: 'advanced',
    day: 14,
    price: 24,
    features: [
      'Guaranteed quality control',
      'Top quality service',
      'Best experts at your lease',
    ],
  },
  {
    name: 'enterprise',
    day: 14,
    price: 87,
    features: [
      'Guaranteed quality control',
      'Top quality service',
      'Best experts at your lease',
    ],
  },
]

const allReviews: ReviewType[] = [
  {
    name: 'Leonard Heiser',
    description:
      'I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.',
    image: avatar1,
  },
  {
    name: 'Leonard Heiser',
    description:
      'I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.',
    image: avatar2,
  },
  {
    name: 'Leonard Heiser',
    description:
      'I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.',
    image: avatar3,
  },
  {
    name: 'Leonard Heiser',
    description:
      'I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.',
    image: avatar4,
  },
  {
    name: 'Leonard Heiser',
    description:
      'I have been hiring people in this space for and numbers of years and I have to be never seen this level of professionalism.',
    image: avatar5,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Free advertising you online business.',
    description: 'Content king that means bringing and strategic approach.',
    image: agency1,
  },
  {
    title: 'Investment monitor top 2023',
    description:
      'We are thrilled to the Investment Top 2023, recognizing the excellence and innovation.',
    image: agency2,
  },
  {
    title: 'Advancing Innovation and Collaboration',
    description:
      'Join us for a transformative event focused on Advancing Innovation and Collaboration.',
    image: agency3,
  },
]
export { faqContent, projectSlides, pricingPlans, allReviews, blogs }
