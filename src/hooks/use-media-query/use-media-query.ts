'use client'

import { useCallback, useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        handleSetIsOpen(false) // Close the sheet if the media query matches (e.g., on larger screens)
      }
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [handleSetIsOpen])

  return {
    isOpen,
    handleSetIsOpen,
  }
}
