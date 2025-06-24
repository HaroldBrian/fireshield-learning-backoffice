import {
  BlogType,
  PortfolioSliderType,
  StepType,
  TestimonialSlideType,
} from './type'
import { LuMapPin, LuNetwork, LuSend } from 'react-icons/lu'

import marketing2 from '@/assets/images/landing/marketing-2/img-2.jpg'
import marketing3 from '@/assets/images/landing/marketing-2/img-3.jpg'
import marketing4 from '@/assets/images/landing/marketing-2/img-4.jpg'
import marketing5 from '@/assets/images/landing/marketing-2/img-5.jpg'
import marketing6 from '@/assets/images/landing/marketing-2/img-6.jpg'
import marketing7 from '@/assets/images/landing/marketing-2/img-7.jpg'
import marketing11 from '@/assets/images/landing/marketing-2/img-11.jpg'
import marketing12 from '@/assets/images/landing/marketing-2/img-12.jpg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

const portfolioSlides: PortfolioSliderType[] = [
  {
    title:
      "How Marketing Wire's Support Led to a 70% Increase in Data Accuracy",
    subTitle: '70% Growth Achieved withs',
    image: marketing2,
  },
  {
    title:
      'How Surface Mobility Achieved a Increase in Sales in the Six Months',
    subTitle: 'Sales Tripled with ResonanceF',
    image: marketing3,
  },
  {
    title:
      'How Gen Machine Utilizes Automation to Expand Their Subscriber Base',
    subTitle: 'Zero Negative Reviews with Resonance',
    image: marketing4,
  },
  {
    title:
      'How Surface Mobility Achieved a Twofold Increase in Sales in the Six Months',
    subTitle: 'Sales Doubled with Resonance',
    image: marketing5,
  },
  {
    title:
      "How Marketing Wire's Support Led to an 80% Improvement in Data Accuracy",
    subTitle: '80% Growth Achieved with Resonances',
    image: marketing6,
  },
  {
    title:
      'How Gen Machine Harnesses Automation to Expand Their Subscriber Base',
    subTitle: 'Zero Adverse Reviews with Resonance',
    image: marketing7,
  },
]

const investmentSteps: StepType[] = [
  {
    title: 'Crafting Your Path Forward',
    description:
      'Businesses purchase products in substantial quantities for distribution to consumers.',
    icon: LuMapPin,
  },
  {
    title: 'Executing Your Strategy',
    description:
      'Consumers acquire products in smaller volumes suited for personal use.',
    icon: LuSend,
  },
  {
    title: 'Enhancing Through Empowerment',
    description:
      'The market for businesses to target is relatively smaller compared to direct consumers.',
    icon: LuNetwork,
  },
]

const testimonialSlides: TestimonialSlideType[] = [
  {
    name: 'Adam Peterson',
    position: 'Marketing Consultant',
    description:
      'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
    image: avatar1,
  },
  {
    name: 'Jordan Harvey',
    position: 'SEO/SMO Expert',
    description:
      "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
    image: avatar2,
  },
]

const blogs: BlogType[] = [
  {
    title: 'Steps in Content Marketing to Accelerate Business Growth',
    description:
      'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
    date: 'February 13, 2022',
    type: 'Articles',
    image: marketing11,
  },
  {
    title: 'Effective Content Marketing Strategies for Business Expansion',
    description:
      'The micro-environment, where a firm has more control, usually encompasses employees, suppliers, and the media.',
    date: 'February 11, 2023',
    type: 'Tutorials',
    image: marketing12,
  },
  {
    title: 'Mastering Content Propelling Business Towards Success',
    description:
      'The macro-environment, beyond the control of a firm, encompasses a multitude of external factors that operate on a broad scale.',
    date: 'February 28, 2022',
    type: 'Articles',
    image: marketing5,
  },
]

export { portfolioSlides, investmentSteps, testimonialSlides, blogs }
