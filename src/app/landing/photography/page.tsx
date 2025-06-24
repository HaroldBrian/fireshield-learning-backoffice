import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import ActionBox from './components/ActionBox'
import FAQs from './components/FAQs'
import Home from './components/Home'
import MarqueeGroup from './components/MarqueeGroup'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import UpdatedBlogs from './components/UpdatedBlogs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography',
}

const Photography = () => {
  return (
    <>
      <TopNavBar
        position="sticky"
        menuItems={['home', 'about', 'services', 'portfolio', 'faq']}
      />

      <Home />

      <MarqueeGroup />

      <About />

      <Services />

      <Portfolio />

      <FAQs />

      <UpdatedBlogs />

      <ActionBox />

      <MarqueeGroup />
    </>
  )
}

export default Photography
