'use client'

import { Button } from '@/components/ui/button'
import { useShareToSocials } from '@/hooks'

interface PostShareProps {
  url: string
  title?: string
  description?: string
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShareToSocials({
    url,
    title,
    text: description,
  })

  return (
    <aside>
      <div className="space-y-5 bg-gray-700">
        <h2 className="hidden text-heading-xs text-gray-100 lg:block">Share</h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end lg:justify-start">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="lg:w-full lg:justify-start lg:gap-2"
              onClick={() => provider.action()}
            >
              {provider.icon}
              <span className="hidden lg:inline-block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
