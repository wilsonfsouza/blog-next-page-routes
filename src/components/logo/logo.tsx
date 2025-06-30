import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  usesAltLogoOnMobile?: boolean
}

export const Logo = ({ usesAltLogoOnMobile = false }: LogoProps) => {
  return (
    <Link href="/" title="Homepage">
      <Image
        src="/logo.svg"
        alt="Desktop Logo"
        width={84}
        height={32}
        className={cn('', usesAltLogoOnMobile ? 'hidden md:block' : 'block')}
      />

      <Image
        src="/mobile-logo.svg"
        alt="Mobile Logo"
        width={40}
        height={40}
        className={cn('', usesAltLogoOnMobile ? 'block md:hidden' : 'hidden')}
      />
    </Link>
  )
}
