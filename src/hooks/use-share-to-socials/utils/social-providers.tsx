import { AtSign } from 'lucide-react'
import { Facebook, LinkedIn, Slack, TwitterX } from '../icons'

export type ShareConfig = {
  url: string
  title?: string
  text?: string
}

export type SocialProvider = keyof typeof SOCIAL_PROVIDERS

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <LinkedIn className="h-16 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'LinkedIn',
    icon: <Facebook className="h-16 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config?.title || '')}`,
  },
  x: {
    name: 'X',
    icon: <TwitterX className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config?.title || '')}`,
  },
  threads: {
    name: 'Threads',
    icon: <AtSign className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://threads.net/intent/post?text=${encodeURIComponent(
        `${config?.title || ''} ${config.url}`
      )}`,
  },
}
