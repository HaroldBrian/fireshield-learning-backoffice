import TopNavBar from '@/components/TopNavBar'
import AbilitiesAndResources from './components/AbilitiesAndResources'
import About from './components/About'
import Accolades from './components/Accolades'
import ActionBox from './components/ActionBox'
import Blogs from './components/Blogs'
import Hero from './components/Hero'
import MarqueeGroup from './components/MarqueeGroup'
import Projects from './components/Projects'
import TestimonialSlider from './components/TestimonialSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio 2',
}

const Portfolio2 = () => {
  return (
    <>
      <TopNavBar
        position="fixed"
        menuItems={[
          'home',
          'about',
          'project',
          'portfolio',
          'advantage',
          'testimonials',
          'blog',
        ]}
        hasDownloadButton
      />

      <Hero />

      <MarqueeGroup />

      <About />

      <Projects />

      <AbilitiesAndResources />

      <Accolades />

      <TestimonialSlider />

      <Blogs />

      <ActionBox />
    </>
  )
}

export default Portfolio2
