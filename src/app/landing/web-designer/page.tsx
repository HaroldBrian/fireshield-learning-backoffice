import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import ContactUs from './components/ContactUs'
import FAQs from './components/FAQs'
import Hero from './components/Hero'
import Services from './components/Services'
import Stories from './components/Stories'
import Works from './components/Works'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Designer',
}

const WebDesigner = () => {
  return (
    <>
      <TopNavBar
        position="fixed"
        menuItems={[
          'home',
          'about',
          'services',
          'work',
          'faq',
          'stories',
          'contact',
        ]}
        hasDownloadButton
      />

      <Hero />

      <About />

      <Services />

      <Works />

      <FAQs />

      <Stories />

      <ContactUs />
    </>
  )
}

export default WebDesigner
