import { Search } from '@/components/search'
import { allPosts } from 'contentlayer/generated'
import { Inbox } from 'lucide-react'
import { useRouter } from 'next/router'
import { BlogPostCard } from './components/post-card'
import { BlogPostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const DEFAULT_PAGE_TITLE = 'Tips and strategies to boost your business'
  const pageTitle = query ? `Search results for "${query}"` : DEFAULT_PAGE_TITLE

  const posts = query
    ? allPosts.filter(
        (post) => post.title.toLowerCase() === query.toLowerCase()
      )
    : allPosts

  const hasPosts = posts.length > 0
  return (
    <article className="flex flex-col gap-6 px-4 py-5 md:gap-14 md:px-0 md:py-20">
      <header>
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
          <div className="flex max-w-[27.5rem] flex-col items-start gap-3">
            <span className="w-fit rounded-sm bg-cyan-300 px-3 py-[0.375rem] text-body-tag uppercase text-cyan-100">
              Blog
            </span>
            <h1 className="text-balance text-heading-lg text-gray-100 md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {hasPosts && (
        <BlogPostGridCard>
          {posts.map((post) => (
            <BlogPostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString('en-US')}
              slug={post.slug}
              image={post.image}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
            />
          ))}
        </BlogPostGridCard>
      )}

      {!hasPosts && (
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
            <Inbox className="h-12 w-12 text-cyan-100" />

            <p className="text-center text-body-md text-gray-100">
              No posts were found.
            </p>
          </div>
        </div>
      )}
    </article>
  )
}
