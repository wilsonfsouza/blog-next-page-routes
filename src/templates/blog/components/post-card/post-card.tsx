import { Avatar } from '@/components/avatar'
import Image from 'next/image'
import Link from 'next/link'

type Image = {
  src: string
  alt: string
}

type Author = {
  name: string
  avatar: Image
}

interface BlogPostCardProps {
  slug: string
  title: string
  description: string
  image: Image
  date: string
  author: Author
}

export const BlogPostCard = ({
  slug,
  title,
  description,
  image,
  date,
  author,
}: BlogPostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex w-full max-w-2xl overflow-hidden rounded-xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="flex flex-col overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="background-blur-sm absolute right-0 top-0 rounded-bl-[0.625rem] bg-gray-600 pb-[0.375rem] pl-[0.625rem] pr-[0.375rem] pt-[0.125rem]">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image?.src}
            alt={image?.alt}
            width={288}
            height={144}
            className="h-40 w-full rounded-md object-cover object-top"
          />
        </div>

        <div className="p-2 md:flex md:flex-1 md:flex-col">
          <div>
            <h2 className="line-clamp-3 text-balance pb-2 text-heading-xs text-gray-100">
              {title}
            </h2>

            <p className="line-clamp-3 text-balance pb-3 text-body-xs text-gray-300">
              {description}
            </p>
          </div>

          <div className="mt-auto flex items-center overflow-hidden border-t border-gray-400 pt-3">
            <Avatar.Container>
              <Avatar.Image
                src={author?.avatar?.src}
                alt={author?.avatar?.alt}
                size="xs"
              />
              <Avatar.Description>{author?.name}</Avatar.Description>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  )
}
