import TopNavBar from '@/components/TopNavBar'
import ActionBox from './components/ActionBox'
import BusinessSolutions from './components/BusinessSolutions'
import ExploratoryStudies from './components/ExploratoryStudies'
import FAQs from './components/FAQs'
import Feature from './components/Feature'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Hero from './components/Hero'
import MarqueeGroup from './components/MarqueeGroup'
import Projects from './components/Projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing 3',
}

const Marketing3 = () => {
  return (
    <>
      <TopNavBar
        position="sticky"
        menuItems={['home', 'solutions', 'projects', 'features', 'faq']}
      />

      <Hero />

      <BusinessSolutions />

      <Projects />

      <ExploratoryStudies />

      <Feature />

      <Feature2 />

      <Feature3 />

      <MarqueeGroup />

      <FAQs />

      <ActionBox />
    </>
  )
}

export default Marketing3
