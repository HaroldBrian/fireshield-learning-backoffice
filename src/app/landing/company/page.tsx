import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Services from './components/Services'
import FAQs from './components/FAQs'
import TestimonialSlider from './components/TestimonialSlider'
import Blogs from './components/Blogs'

export const metadata: Metadata = {
  title: 'Company',
}

const Company = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'services', 'faq', 'testimonials', 'blog']}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <Brands />

      <Contact />

      <Services />

      <FAQs />

      <TestimonialSlider />

      <Blogs />
    </>
  )
}

export default Company
