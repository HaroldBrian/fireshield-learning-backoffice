import { AssetType, ExpertType } from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import finance3 from '@/assets/images/landing/finance/img-3.jpg'
import finance4 from '@/assets/images/landing/finance/img-4.jpg'
import finance5 from '@/assets/images/landing/finance/img-5.jpg'

const experts: ExpertType[] = [
  {
    name: 'Eric Houston',
    position: 'Founder & CEO of Luminous',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Sed fringilla mauris sit amet nibh.Sed consequat.',
    image: avatar1,
  },
  {
    name: 'Robby Winston',
    position: 'CEO of Product',
    description:
      "Vault's expert support enabled us to secure the necessary capital for our expansion. Plus, it's quicker and more cost-effective than hiring a consultant. Sed fringilla mauris sit amet nibh.Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
    image: avatar3,
  },
]

const valuableAssets: AssetType[] = [
  {
    title: '10 Straightforward Techniques to Improve by 1% Daily',
    description:
      'Customers are constantly seeking ways to enhance their lives. Utilize this phrase as a substitute for...',
    image: finance3,
  },
  {
    title: 'Explore 5 Astonishing Uses of Artificial Intelligence',
    description:
      'Customers appreciate simplicity and perceive it as excellent customer service. Customers strongly dislike complexity...',
    image: finance4,
  },
  {
    title: 'This Long-Awaited Innovation Could Finally Transform the World',
    description:
      "This phrase is a variation of 'new and improved,' indicating that the product is the most up-to-date and advanced.",
    image: finance5,
  },
]

export { experts, valuableAssets }
