import TopNavBar from '@/components/TopNavBar'
import Brands from './components/Brands'
import DiscoverServices from './components/DiscoverServices'
import DomainNames from './components/DomainNames'
import FAQs from './components/FAQs'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Services from './components/Services'
import TestimonialSlider from './components/TestimonialSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hosting',
}

const Hosting = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'pricing', 'services', 'features', 'testimonial']}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <Brands />

      <Pricing />

      <Services />

      <DomainNames />

      <Features />

      <TestimonialSlider />

      <FAQs />

      <DiscoverServices />
    </>
  )
}

export default Hosting
