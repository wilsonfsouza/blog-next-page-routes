import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MenuItem } from '../types'
import { HamburgerMenu } from './hambuger-menu'

const menuItems: MenuItem[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Blog', href: '/blog' },
]

export const MobileNavigation = () => {
  return (
    <nav className="flex w-full items-center md:hidden">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Logo className="block md:hidden" type="icon-only" priority />
        </li>

        <li>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <Button size="md" variant="secondary" asChild>
                <Link href="/create-store">Start Today</Link>
              </Button>
              <HamburgerMenu menuItems={menuItems} />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
