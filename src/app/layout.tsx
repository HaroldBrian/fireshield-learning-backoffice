import type { Metadata } from 'next'
import { REM } from 'next/font/google'
import { type ReactNode } from 'react'
import Image from 'next/image'
import NextTopLoader from 'nextjs-toploader'
import dynamic from 'next/dynamic'
import { Toaster } from 'sonner'

import '@/assets/css/style.css'

const AppProvidersWrapper = dynamic(
  () => import('@/components/AppsProviderWrapper'),
  { ssr: false }
)
const BackToTop = dynamic(() => import('@/components/BackToTop'))

const rem = REM({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default:
      'AeroPage Next - Tailwind CSS Multipurpose One Page Landing Template',
    template:
      '%s | AeroPage Next - Tailwind CSS Multipurpose One Page Landing Template',
  },
  description:
    'AeroPage - a cutting-edge, one-page template designed for unparalleled performance and seamless user experiences. This versatile template, initially released as AeroPage One Page Template, serves as the perfect starting point for your next project, showcasing expertise in building real websites with Tailwind CSS. The AeroPage Template epitomizes flexibility, user-friendliness, and responsiveness, delivering a seamless browsing experience across various devices, be it desktops, tablets, or mobiles. This template boasts an immaculately organized folder structure, clean code, and comprehensive comments, simplifying the process of customization. Built on the Tailwind CSS, AeroPage ensures compatibility across all devices, and its codebase is fully documented and W3C validated. Elevate your digital presence and captivate your audience with the AeroPage Template today.',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>

      <body className={rem.className}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={355}
            height={83}
            src={'/logo-dark.png'}
            style={{ height: '10%', width: 'auto' }}
          />
        </div>
        <NextTopLoader color="#ea580c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  )
}
