import Image, { ImageProps } from 'next/image'

interface AvatarImageProps extends Omit<ImageProps, 'classname' | 'fill'> {}

export const AvatarImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) => {
  return (
    <div className="relative h-5 w-5 rounded-full border border-blue-200">
      <Image
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill
        className="rounded-full object-cover"
      />
    </div>
  )
}
