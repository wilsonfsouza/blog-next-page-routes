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
import { MenuItem } from '../types'
import { MobileNavigationContainer } from './mobile-navigation-container'

interface HamburgerMenuProps {
  menuItems: MenuItem[]
}

export const HamburgerMenu = ({ menuItems }: HamburgerMenuProps) => {
  return (
    <MobileNavigationContainer>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="flex rounded-full"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="relative h-16 justify-center border-b border-white/10">
          <SheetTitle>
            <SheetClose asChild>
              <Logo className="block md:hidden" />
            </SheetClose>
            <span className="sr-only">Homepage - Company logo</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex items-center">
          <ul className="flex w-full flex-col items-center">
            {menuItems.map((link) => (
              <li key={link.id} className="flex w-full">
                <SheetClose asChild>
                  <ActiveLink href={link.href}>{link.title}</ActiveLink>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </MobileNavigationContainer>
  )
}
