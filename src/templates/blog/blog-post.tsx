import { Avatar } from '@/components/avatar'
import { Markdown } from '@/components/markdown'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { PostShare } from './components/post-share'

export type BlogPostProps = {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  const publisedDate = new Date(post.date).toLocaleDateString('en-US')
  const postUrl = `http://localhost:300/blog/${post.slug}`

  return (
    <section className="text-gray-100">
      <div className="container space-y-5 px-4 pb-20 pt-5 md:space-y-8 md:px-8 md:pb-[8.5rem] md:pt-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_14rem] lg:gap-6">
          <article className="overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
              />
            </figure>

            <header className="px-6 py-8 lg:px-16 lg:py-12">
              <h1 className="mb-6 text-left text-heading-md text-gray-100 lg:mb-8 lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post.author.avatar.src}
                  alt={post.author.avatar.alt}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Published on{' '}
                    <time dateTime={post.date}>{publisedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>
            <div className="prose prose-invert max-w-none px-6 lg:px-16">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <PostShare
            url={postUrl}
            title={post?.title}
            description={post?.description}
          />
        </div>
      </div>
    </section>
  )
}
