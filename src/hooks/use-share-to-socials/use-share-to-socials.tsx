import { Link2 } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { useCopyToClipboard } from '../use-copy-to-clipboard'
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './utils/social-providers'

type UseShareToSocialsParams = ShareConfig & {
  clipboardTimeout?: number
}

export const useShareToSocials = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareToSocialsParams) => {
  const { hasCopied, handleCopy } = useCopyToClipboard({
    timeout: clipboardTimeout,
  })

  const shareConfig = useMemo(() => {
    return {
      url,
      ...(title && { title }),
      ...(text && { text }),
    }
  }, [url, title, text])

  const handleShare = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url)
        }

        const providerConfig = SOCIAL_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider not supported: ${provider}`)
        }

        const urlToBeShared = providerConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          urlToBeShared,
          '_blank',
          'width=600,height=600,location=yes,status=yes'
        )

        return Boolean(shareWindow)
      } catch (error) {
        console.error(error)
        return false
      }
    },
    [shareConfig, handleCopy, url]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => handleShare(key as SocialProvider),
      })),
      {
        provider: 'clipboard',
        name: hasCopied ? 'Copied Link!' : 'Copy Link',
        icon: <Link2 className="h-4 w-4" />,
        action: () => handleShare('clipboard'),
      },
    ],
    [handleShare]
  )

  return {
    shareButtons,
  }
}
