import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Experts from './components/Experts'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Hero from './components/Hero'
import MarqueeGroup from './components/MarqueeGroup'
import OnBoarding from './components/OnBoarding'
import SearchPlan from './components/SearchPlan'
import ValuableAssets from './components/ValuableAssets'

export const metadata: Metadata = {
  title: 'Finance',
}

const Finance = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'experts', 'features', 'assets', 'onboarding']}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <MarqueeGroup />

      <Experts />

      <Feature1 />

      <Feature2 />

      <Feature3 />

      <ValuableAssets />

      <OnBoarding />

      <SearchPlan />
    </>
  )
}

export default Finance
