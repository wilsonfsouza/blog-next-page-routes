import { useCallback, useEffect, useState } from 'react'

interface UseCopyToClipboardParams {
  timeout?: number
}

export const useCopyToClipboard = ({
  timeout = 2000,
}: UseCopyToClipboardParams) => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = useCallback(async (text: string) => {
    const isClipboardSupported = Boolean(navigator?.clipboard)

    if (!isClipboardSupported) {
      console.error('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setHasCopied(true)
    } catch (error) {
      console.error('Failed to copy the text: ', error)
      setHasCopied(false)
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (hasCopied) {
      timer = setTimeout(() => {
        setHasCopied(false)
      }, timeout)
    }

    return () => clearTimeout(timer)
  }, [hasCopied, timeout])

  return {
    hasCopied,
    handleCopy,
  }
}
