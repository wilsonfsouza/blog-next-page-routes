import { BlogPost } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const revalidate = 86400 // 1 day
export const dynamicParams = true

export async function generateStaticParams() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const recentPosts = sortedPosts.slice(0, 5)
  const paths = recentPosts.map((post) => ({
    slug: post.slug,
  }))

  return paths
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = allPosts.find(
    (post) => post?.slug.toLowerCase() === slug.toLowerCase()
  )

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
