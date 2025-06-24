import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import ActionBox from './components/ActionBox'
import Blogs from './components/Blogs'
import ContactUs from './components/ContactUs'
import DomainNames from './components/DomainNames'
import Hero from './components/Hero'
import InvestmentSteps from './components/InvestmentSteps'
import MarqueeGroup from './components/MarqueeGroup'
import PortfolioSwiper from './components/PortfolioSwiper'
import Services from './components/Services'
import TestimonialSlider from './components/TestimonialSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MArketing 2',
}

const Marketing2 = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'about',
          'services',
          'portfolio',
          'testimonial',
          'blog',
          'contact',
        ]}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <MarqueeGroup />

      <About />

      <Services />

      <PortfolioSwiper />

      <InvestmentSteps />

      <TestimonialSlider />

      <ActionBox />

      <Blogs />

      <DomainNames />

      <ContactUs />
    </>
  )
}

export default Marketing2
