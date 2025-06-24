import type {
  BlogType,
  FaqType,
  HeroSwiperType,
  PortfolioSlideType,
  TestimonialSliderType,
} from './types'

import company2 from '@/assets/images/landing/creative/img-2.jpg'
import company4 from '@/assets/images/landing/creative/img-4.jpg'
import company5 from '@/assets/images/landing/creative/img-5.jpg'

import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import creative6 from '@/assets/images/landing/creative/img-6.png'
import creative8 from '@/assets/images/landing/creative/img-8.png'

const heroSwiperSlides: HeroSwiperType[] = [
  {
    title: 'Crafting Vision into Reality: Design Agency at Your Service',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
  {
    title: 'Innovative Design Solutions: Unleashing Creativity for You',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
  {
    title: 'Design Excellence Redefined: Elevate Your Brand with Our Agency',
    description:
      'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
  },
]

const portfolioSlides: PortfolioSlideType[] = [
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company2,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company4,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company5,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company2,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company4,
  },
  {
    title: 'Brand',
    subTitle: 'Coder Studio',
    image: company5,
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

const faqContent: FaqType[] = [
  {
    title:
      ' How do you stay updated with the latest trends in digital marketing?',
    description:
      'I regularly participate in industry webinars, attend conferences, and subscribe to leading digital marketing publications. Duis leo. Sed fringilla mauris sit amet nibh.',
  },
  {
    title: "Can you provide examples of successful projects you've worked on?",
    description:
      'Certainly! I have a portfolio section on my website where you can find detailed case studies of some of my most successful projects. These case studies include data-driven results and client testimonials to give you a clear picture of my capabilities and achievements.',
  },
  {
    title: 'How do you measure the success of a digital marketing campaign?',
    description:
      'I adhere to industry-standard security practices and use secure tools and platforms for data handling and communication. Your data is treated with the utmost confidentiality and is only used for the purposes of our digital marketing projects. Duis leo. Sed fringilla mauris sit amet nibh.',
  },
  {
    title:
      ' How can I get in touch with you to discuss a potential project Design?',
    description:
      'Molestie at id integet venenatis, fermentum luctus. Ullamcorper, ac morbi augue laoreet aenean sit faucibus scelerisque. Interdum risus sagittis faucibus pharetra. Faucibus sed consectetur mattis nunc, feugiat. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
  },
]

const blogs: BlogType[] = [
  {
    title: 'Free advertising you online business.',
    description: 'Content king that means bringing and strategic approach.',
    image: creative6,
  },
  {
    title: 'Investment monitor top 2023',
    description: 'Content king that means bringing and strategic approach.',
    image: creative8,
  },
]
export {
  heroSwiperSlides,
  portfolioSlides,
  testimonialSlides,
  faqContent,
  blogs,
}
