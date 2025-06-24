import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import ActionBox from './components/ActionBox'
import Blogs from './components/Blogs'
import Brands from './components/Brands'
import FAQs from './components/FAQs'
import Features from './components/Features'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
}

const Portfolio = () => {
  return (
    <>
      <TopNavBar
        position="fixed"
        menuItems={['home', 'about', 'services', 'testimonials', 'blog', 'faq']}
        hasDownloadButton
      />

      <Hero />

      <Brands />

      <Features />

      <About />

      <Services />

      <Testimonial />

      <Blogs />

      <FAQs />

      <ActionBox />
    </>
  )
}

export default Portfolio
