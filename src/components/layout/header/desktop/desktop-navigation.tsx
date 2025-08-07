import { ActiveLink } from '@/components/active-link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type MenuItem = {
  id: number
  title: string
  href: string
}

const menuItems: MenuItem[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Blog', href: '/blog' },
]

export const DesktopNavigation = () => {
  return (
    <nav className="hidden w-full items-center md:flex">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Logo
            className="hidden md:block"
            priority
            fetchPriority="high"
            loading="eager"
          />
        </li>

        <li>
          <ul className="flex items-center gap-6">
            {menuItems.map((link) => (
              <li key={link.id}>
                <ActiveLink href={link.href}>{link.title}</ActiveLink>
              </li>
            ))}
            <li className="flex items-center gap-6">
              <Button size="md" variant="secondary" asChild>
                <Link href="/create-store">Start Today</Link>
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
