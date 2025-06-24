import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import ServicesMarquee from '@/components/ServicesMarquee'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import PortfolioSlider from './components/PortfolioSlider'
import FAQs from './components/FAQs'
import TestimonialSlider from './components/TestimonialSlider'
import Blogs from './components/Blogs'

export const metadata: Metadata = {
  title: 'Marketing',
}
const Marketing = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'features',
          'about',
          'services',
          'portfolio',
          'faq',
          'testimonial',
          'blog',
        ]}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <ServicesMarquee />

      <Features />

      <About />

      <Services />

      <PortfolioSlider />

      <FAQs />

      <TestimonialSlider />

      <Blogs />
    </>
  )
}

export default Marketing
