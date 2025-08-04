import { Inter, PT_Sans_Caption } from 'next/font/google'
import { CallToAction } from './call-to-action'
import { Footer } from './footer'
import { Header } from './header'

interface LayoutProps {
  children: React.ReactNode
}

// Default
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

// Headings
const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="mt-16 flex flex-col">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  )
}
