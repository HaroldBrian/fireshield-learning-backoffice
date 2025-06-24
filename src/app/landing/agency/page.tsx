import ServicesMarquee from '@/components/ServicesMarquee'
import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FAQs from './components/FAQs'
import Home from './components/Home'
import OurPortfolio from './components/OurPortfolio'
import Services from './components/Services'
import Services2 from './components/Services2'

export const metadata: Metadata = {
  title: 'Agency',
}

const Agency = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'about',
          'services',
          'portfolio',
          'faq',
          'blog',
          'contact',
        ]}
        position="sticky"
        hasDownloadButton
      />

      <Home />

      <section className="lg:pb-10">
        <ServicesMarquee />
      </section>

      <About />

      <Services />

      <OurPortfolio />

      <Services2 />

      <FAQs />

      <Blog />

      <Contact />
    </>
  )
}

export default Agency
