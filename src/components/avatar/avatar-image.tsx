import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'

type AvatarSize = 'xs' | 'sm'

interface AvatarImageProps
  extends Omit<ImageProps, 'classname' | 'fill' | 'height' | 'width'> {
  size?: AvatarSize
}

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
}

export const AvatarImage = ({
  size = 'xs',
  src,
  alt,
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        'relative rounded-full border border-blue-200',
        avatarSize[size]
      )}
    >
      <Image
        {...rest}
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover"
      />
    </div>
  )
}
