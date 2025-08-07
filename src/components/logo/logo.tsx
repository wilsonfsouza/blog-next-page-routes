import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

type LogoType = 'icon-only' | 'full'
type OmittedImageProps = 'src' | 'alt' | 'width' | 'height'

interface LogoProps extends Omit<ImageProps, OmittedImageProps> {
  type?: LogoType
}

export const Logo = ({ type = 'full', ...rest }: LogoProps) => {
  if (type === 'full') {
    return (
      <Link href="/" title="Homepage">
        <Image
          {...rest}
          src="/logo.svg"
          alt="Full Logo"
          width={84}
          height={32}
        />
      </Link>
    )
  }

  return (
    <Link href="/" title="Homepage">
      <Image
        {...rest}
        src="/mobile-logo.svg"
        alt="Icon Logo"
        width={40}
        height={40}
      />
    </Link>
  )
}
