import ServicesMarquee from '@/components/ServicesMarquee'
import TopNavBar from '@/components/TopNavBar'
import type { Metadata } from 'next'
import Blogs from './components/Blogs'
import FAQs from './components/FAQs'
import Features from './components/Features'
import HeroSwiper from './components/HeroSwiper'
import ProjectSlider from './components/ProjectSlider'
import Services from './components/Services'
import TestimonialSlider from './components/TestimonialSlider'

export const metadata: Metadata = {
  title: 'Creative',
}

const Creative = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'features',
          'portfolio',
          'testimonial',
          'faq',
          'blog',
        ]}
        position="sticky"
        hasDownloadButton
      />

      <HeroSwiper />

      <section>
        <ServicesMarquee />
      </section>

      <Features />

      <ProjectSlider />

      <Services />

      <TestimonialSlider />

      <FAQs />

      <Blogs />
    </>
  )
}

export default Creative
