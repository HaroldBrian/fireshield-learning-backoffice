import TopNavBar from '@/components/TopNavBar'
import {
  AdminDemos,
  Hero,
  LandingDemos,
  SecurityDemos,
  Footer,
  Features,
} from '@/components/home'

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={['home', 'demos', 'features']} position="fixed" />

      <Hero />

      <LandingDemos />

      <AdminDemos />

      <SecurityDemos />

      <Features />

      <Footer />
    </>
  )
}
