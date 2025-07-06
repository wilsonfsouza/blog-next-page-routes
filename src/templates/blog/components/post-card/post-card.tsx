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
      className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
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

        <div className="p-2">
          <h2 className="line-clamp-3 text-balance pb-2 text-heading-xs text-gray-100">
            {title}
          </h2>

          <p className="line-clamp-3 text-balance text-body-xs text-gray-300">
            {description}
          </p>

          <div className="mt-3 flex items-center gap-2 overflow-hidden border-t border-gray-400 pt-3">
            <div className="relative h-5 w-5 rounded-full border border-blue-200">
              <Image
                src={author?.avatar?.src}
                alt={author?.avatar?.alt}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-body-xs text-gray-300">{author?.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
