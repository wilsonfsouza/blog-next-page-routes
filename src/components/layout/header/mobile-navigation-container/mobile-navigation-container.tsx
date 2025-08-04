'use client'
import { Sheet } from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/use-media-query/use-media-query'

interface MobileNavigationContainerProps {
  children: React.ReactNode
}

export const MobileNavigationContainer = ({
  children,
}: MobileNavigationContainerProps) => {
  const { handleSetIsOpen, isOpen } = useMediaQuery('(min-width: 768px)')

  return (
    <Sheet open={isOpen} onOpenChange={handleSetIsOpen}>
      {children}
    </Sheet>
  )
}
