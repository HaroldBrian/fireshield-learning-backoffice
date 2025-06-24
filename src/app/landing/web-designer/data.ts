import { FaqType, ServiceType, StoryType, WorkType } from './types'

import web2 from '@/assets/images/landing/web-designer/img-2.jpg'
import web3 from '@/assets/images/landing/web-designer/img-3.jpg'
import web4 from '@/assets/images/landing/web-designer/img-4.jpg'
import web5 from '@/assets/images/landing/web-designer/img-5.jpg'
import web8 from '@/assets/images/landing/web-designer/img-8.jpg'
import web9 from '@/assets/images/landing/web-designer/img-9.jpg'
import web10 from '@/assets/images/landing/web-designer/img-10.jpg'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

const services: ServiceType[] = [
  {
    title: 'Business Consultancy',
    description:
      'Massa est senectus sapien ultrices volutpat. Fermentum, posuere risus proin integer. Adipiscing elit.',
  },
  {
    title: 'Web Design',
    description:
      'Suspendisse consectetur elit, purus quis id sem quam quisque. Eget tortor tortor leo faucibus.',
  },
  {
    title: 'Production',
    description:
      'Tempor dolor eros luctus at sagittis ut egestas tristique. Non massa ut accumsan, ornare.',
  },
]

const works: WorkType[] = [
  {
    title: 'Medium Scene',
    date: '27 Aug 2021',
    category: 'Web-Design',
    description:
      'Explore a medium scene where creativity meets innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
    image: web2,
  },
  {
    title: 'The Emergence of Design',
    date: '27 Aug 2021',
    category: 'Graphic-Design',
    description:
      'Proin elementum ipsum vel mauris pellentesque accumsan. Nulla in erat ligula, vivamus sed egestas elit, sit amet convallis metus.',
    image: web3,
  },
  {
    title: 'Amplitude',
    date: '27 Aug 2021',
    category: 'Illustrator',
    description:
      'Aliquam tempus nunc nec rutrum malesuada. Proin pulvinar augue quis pharetra vulputate. Sed lacinia convallis orci vitae condimentum.',
    image: web4,
  },
  {
    title: 'Visual Enigma',
    date: '27 Aug 2021',
    category: 'Photography',
    description:
      'Suspendisse scelerisque convallis nibh. Maecenas bibendum porta mattis. Donec quis nibh porta dolor ultrices bibendum vel quis leo.',
    image: web5,
  },
]

const faqContent: FaqType[] = [
  {
    title: 'What Is Web Design?',
    description:
      'Explore the world of brand strategy as we dive into the realms of consumer perception, market positioning, and effective communication.',
  },
  {
    title: 'How Long Does It Take To Design A Website?',
    description:
      'Immerse yourself in the art of web design, where creativity and functionality converge. Our designs are tailored to captivate your audience, ensuring a memorable online presence.',
  },
  {
    title: "Can I Update My Website's Design After It's Live?",
    description:
      "Experience the impact of compelling visual direction. Our artistic vision guides your brand's aesthetics, leaving a lasting impression on your audience.",
  },
  {
    title: 'What Is User Experience UI Design In Web Design?',
    description:
      'Discover the realm of web development where innovation meets functionality. We bring your digital ideas to life, creating seamless and user-friendly experiences.',
  },
  {
    title: 'What Is Responsive Web Design?',
    description:
      "Unleash the power of strategic marketing. Our marketing techniques are designed to help your brand reach new heights, ensuring it's heard loud and clear in the digital landscape.",
  },
]

const stories: StoryType[] = [
  {
    title: 'Natura Insects Series: Shaping Insects from Flowers',
    date: 'December 3, 2023',
    postedBy: 'Olivia Rhye',
    image: avatar1,
    backgroundImage: web10,
  },
  {
    title: 'Minimalistic Design Concept for Balmain Online Store',
    date: 'December 2, 2023',
    postedBy: 'Olivia Rhye',
    image: avatar3,
    backgroundImage: web9,
  },
  {
    title: 'Spotlight on the Equinox Collection by Shane Griffin<',
    date: 'November 29, 2023',
    postedBy: 'Olivia Rhye',
    image: avatar2,
    backgroundImage: web8,
  },
]

export { services, works, faqContent, stories }
