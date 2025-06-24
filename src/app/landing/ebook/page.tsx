import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Courses from './components/Courses'
import TestimonialSlider from './components/TestimonialSlider'
import SubscribeToMail from './components/SubscribeToMail'

export const metadata: Metadata = {
  title: 'Ebook',
}

const Ebook = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'about', 'benefits', 'courses', 'testimonials']}
        position="fixed"
      />

      <Hero />

      <About />

      <Benefits />

      <Courses />

      <TestimonialSlider />

      <SubscribeToMail />
    </>
  )
}

export default Ebook
