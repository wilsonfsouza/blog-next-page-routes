import { ActiveLink } from '@/components/active-link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Logo usesAltLogoOnMobile />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button size="md" variant="secondary" asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
