import {
  LuBadgeDollarSign,
  LuBookCopy,
  LuDollarSign,
  LuHand,
  LuIndianRupee,
  LuSend,
} from 'react-icons/lu'
import type { CausesType, TestimonialType, serviceType } from './types'

import charity6 from '@/assets/images/landing/charity/img-6.jpg'
import charity3 from '@/assets/images/landing/charity/img-3.jpg'
import charity7 from '@/assets/images/landing/charity/img-7.jpg'
import charity9 from '@/assets/images/landing/charity/img-9.jpg'
import charity10 from '@/assets/images/landing/charity/img-10.jpg'
import charity11 from '@/assets/images/landing/charity/img-11.jpg'

const allService: serviceType[] = [
  {
    title: 'Nutritious Meals',
    description:
      'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
    icon: LuBookCopy,
  },
  {
    title: 'Pure Drinking Water',
    description:
      'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
    icon: LuSend,
  },
  {
    title: 'Quality Education',
    description:
      'Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.',
    icon: LuBookCopy,
  },
]

const allCauses: CausesType[] = [
  {
    title: 'Providing Education for Everyone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.',
    image: charity6,
  },
  {
    title: 'Feeding African Children',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.',
    image: charity3,
  },
  {
    title: 'Building a Brighter Future',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.',
    image: charity7,
  },
]

const testimonialSlides: TestimonialType[] = [
  {
    title: 'Make a Contribution',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuBadgeDollarSign,
    image: charity6,
  },
  {
    title: 'Become a Volunteer',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuHand,
    image: charity9,
  },
  {
    title: 'Fundraising',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuDollarSign,
    image: charity10,
  },
  {
    title: 'Make a Contribution',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuIndianRupee,
    image: charity11,
  },
  {
    title: 'Make a Contribution',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuBadgeDollarSign,
    image: charity6,
  },
  {
    title: 'Become a Volunteer',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuHand,
    image: charity9,
  },
  {
    title: 'Fundraising',
    description:
      'Children growing up in poverty encounter challenges such as hunger and malnutrition.',
    icon: LuDollarSign,
    image: charity10,
  },
]

export { allService, allCauses, testimonialSlides }
