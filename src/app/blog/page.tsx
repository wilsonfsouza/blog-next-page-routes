import { BlogList } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'STips and strategies to boost your business',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog',
    description: 'STips and strategies to boost your business',
    url: 'https://blog-next-page-routes.vercel.app/og-image.jpg',
    siteName: 'Site.',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://blog-next-page-routes.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.',
      },
    ],
  },
}

export default function BlogPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return <BlogList posts={sortedPosts} />
}
