import type {
  BlogType,
  FaqType,
  PortfolioSlideType,
  TestimonialSliderType,
} from './types'

import marketing6 from '@/assets/images/landing/marketing/img-6.jpg'
import marketing7 from '@/assets/images/landing/marketing/img-7.jpg'
import marketing8 from '@/assets/images/landing/marketing/img-8.jpg'
import marketing12 from '@/assets/images/landing/marketing/img-12.jpg'
import marketing13 from '@/assets/images/landing/marketing/img-13.jpg'
import marketing14 from '@/assets/images/landing/marketing/img-14.jpg'

import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

const portfolioSlides: PortfolioSlideType[] = [
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: marketing6,
  },
  {
    title: 'Web Design',
    subTitle: 'Digital Platform',
    image: marketing7,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: marketing8,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: marketing6,
  },
  {
    title: 'Web Design',
    subTitle: 'Digital Platform',
    image: marketing7,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: marketing8,
  },
]

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
    title: 'Unique And Influential Design',
    description:
      'provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization',
  },
  {
    title: 'The Power Of Influencer Marketing',
    description:
      'Absolutely! We offer content creation services, including blog posts, social media content, and multimedia assets.',
  },
]

const testimonialSlides: TestimonialSliderType[] = [
  {
    name: 'Leonard Heiser',
    description:
      "There are many variations of passages of Lorem Ipsum available but the maj have suffered alteration in some form, by injected humour, or randomis words which don't look even slightly believable. If you are going",
    image: avatar3,
  },
  {
    name: 'Leonard Heiser',
    description:
      'Sed ut perspiciatis unde omnis iste nate error sitsau an voluptatem accusantium dolore mque laudantium, totamrem aperiam, inventore the ver quasi architecto again is there anyone who loves or pursues Variouses versions have evolved over the years.',
    image: avatar2,
  },
]

const blogs: BlogType[] = [
  {
    title:
      'We craft elements to pave the way for your future success and growth.',
    image: marketing12,
  },
  {
    title: 'Creative advertising in our life became a info noise',
    image: marketing13,
  },
  {
    title:
      'Creative advertising in our lives has evolved into a sea of information noise.',
    image: marketing14,
  },
]

export { portfolioSlides, faqContent, testimonialSlides, blogs }
