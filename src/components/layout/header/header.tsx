import { ActiveLink } from '@/components/active-link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { MobileNavigationContainer } from './mobile-navigation-container'

type MenuItem = {
  id: number
  title: string
  href: string
}

const menuItems: MenuItem[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Blog', href: '/blog' },
]

export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-[100vw] border-b border-white/10 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Logo usesAltLogoOnMobile fetchPriority="high" />

          <nav className="hidden items-center gap-6 md:flex">
            {menuItems.map((link) => (
              <ActiveLink key={link.id} href={link.href}>
                {link.title}
              </ActiveLink>
            ))}

            <Button size="md" variant="secondary" asChild>
              <Link href="/create-store">Start Today</Link>
            </Button>
          </nav>

          <MobileNavigationContainer>
            <nav className="flex items-center gap-2 md:hidden">
              <Button size="md" variant="secondary" asChild>
                <Link href="/create-store">Start Today</Link>
              </Button>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="flex rounded-full md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            </nav>
            <SheetContent>
              <SheetHeader className="h-16 justify-center border-b border-white/10">
                <SheetTitle>
                  <SheetClose asChild>
                    <Logo />
                  </SheetClose>
                  <span className="sr-only">Homepage - Company logo</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-center">
                {menuItems.map((link) => (
                  <SheetClose key={link.id} asChild>
                    <ActiveLink href={link.href}>{link.title}</ActiveLink>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </MobileNavigationContainer>
        </div>
      </div>
    </header>
  )
}
