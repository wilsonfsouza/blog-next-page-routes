'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ActiveLinkProps extends Omit<LinkProps, 'classname'> {
  children: React.ReactNode
}

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? ''
  const pathname = usePathname()
  const isCurrentPath =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'w-full border-b border-white/10 px-5 py-6 text-action-sm transition-colors hover:text-blue-200 md:w-fit md:border-none md:p-0',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  )
}
