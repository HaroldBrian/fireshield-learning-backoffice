import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import Blogs from './components/Blogs'
import DomainNames from './components/DomainNames'
import Home from './components/Home'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
const Work = dynamic(() => import('./components/Work'), { ssr: false })

export const metadata: Metadata = {
  title: 'Startup',
}

const Startup = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'about',
          'services',
          'work',
          'testimonials',
          'blog',
        ]}
        position="fixed"
      />

      <Home />

      <About />

      <Statistics />

      <Services />

      <Work />

      <Testimonials />

      <Blogs />

      <DomainNames />
    </>
  )
}

export default Startup
