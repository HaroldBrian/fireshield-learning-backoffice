import { LuCamera, LuGitFork, LuProjector, LuUserSquare } from 'react-icons/lu'
import type { BlogType, FaqType, ServiceType } from './types'

import photography2 from '@/assets/images/landing/photography/img-2.jpg'
import photography12 from '@/assets/images/landing/photography/img-12.jpg'
import photography10 from '@/assets/images/landing/photography/img-10.jpg'

const services: ServiceType[] = [
  {
    title: 'Pet Portraits',
    description:
      'Preserve the distinct personality and soul of your cherished pets with beautiful and heartwarming portraits.',
    icon: LuCamera,
  },
  {
    title: 'Wildlife Photography',
    description:
      'Embark on an exhilarating adventure into the untamed, seizing breathtaking instances of wildlife in their native environments.',
    icon: LuUserSquare,
  },
  {
    title: 'Nature Videography',
    description:
      'These videos encompass everything from awe-inspiring landscapes to intricate details of flora and fauna, showcasing the tranquility and grandeur of nature in all its splendor.',
    icon: LuProjector,
  },
  {
    title: 'Commercial Projects',
    description:
      "Highlight your brand's distinctive narrative with our tailored commercial photography services designed for the animal industry.",
    icon: LuGitFork,
  },
]

const faqContent: FaqType[] = [
  {
    title: 'How Can I Book A Pet Portrait Session?',
    description:
      "Booking a pet portrait session is a breeze! Just get in touch with us through our contact page or give us a call. We'll collaborate to determine a convenient date and location for your photoshoot.",
  },
  {
    title: 'Can I Bring My Own Pet Props Or Accessories?',
    description:
      "Certainly! We encourage you to bring any special props or accessories that showcase your pet's unique personality. It adds a personal touch to the photos and makes the experience even more memorable.",
  },
  {
    title: 'Do You Offer Photo Packages For Pet Events And Celebrations?',
    description:
      "Yes, we have customized photo packages for pet events and celebrations. Whether it's a birthday party or a pet-friendly gathering, we'll be there to capture the joy and excitement of the occasion.",
  },
  {
    title: 'What Locations Do You Cover For Wildlife Photography?',
    description:
      "Our wildlife photography services encompass a wide range of locations, from local wildlife reserves to exotic destinations. Please contact us to discuss your specific interests and preferences, and we'll plan an unforgettable wildlife photography adventure.",
  },
  {
    title: 'Can You Provide Images For Commercial Use?',
    description:
      "Absolutely! We provide commercial licensing options for our images, enabling you to use them for promotional materials, websites, and other marketing purposes. Just let us know your requirements, and we'll furnish you with the relevant licensing details.",
  },
]

const blogs: BlogType[] = [
  {
    title: 'Inaights and strategies for breathtaking shots',
    description:
      'Unlock the true potential wildlife photography with our expert insights and techniques.',
    type: 'Strategies',
    time: '5-minute',
    image: photography2,
  },
  {
    title: 'Wildlife preservation photography',
    description:
      'Observe the profound influence of wildlife photography as a potent instrument for preservation.',
    type: 'Video',
    time: '5-minute',
    image: photography12,
  },
  {
    title: 'Heartwarming Pet Portraits',
    description:
      'Commend the affection and connection between pets and their human counterparts through heart-touching pet portrayals.',
    type: 'Photography',
    time: '5-minute',
    image: photography10,
  },
]

export { services, faqContent, blogs }
