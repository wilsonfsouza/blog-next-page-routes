import { Avatar } from '@/components/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

export default function BlogPostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) =>
    post.slug.toLowerCase().includes(slug.toLowerCase())
  )

  if (!post?._id) {
    return redirect('/blog')
  }

  const publisedDate = new Date(post?.date).toLocaleDateString('en-US')

  console.log(slug)
  return (
    <section className="container text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-action-sm text-blue-200">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_14rem] lg:gap-6">
        <article className="overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
          {post?.image && (
            <figure className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
              />
            </figure>
          )}

          <header className="px-6 py-8 lg:px-16 lg:py-12">
            <h1 className="mb-6 text-heading-md text-gray-100 lg:mb-8 lg:text-heading-xl">
              {post?.title}
            </h1>

            {post?.author.avatar && (
              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar.src}
                  alt={post?.author.avatar.alt}
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Published on{' '}
                    <time dateTime={post.date}>{publisedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            )}
          </header>
        </article>
      </div>
    </section>
  )
}
