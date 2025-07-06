import { Search } from '@/components/search'
import { useRouter } from 'next/router'
import { BlogPostCard } from './components/post-card'
import { BlogPostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const DEFAULT_PAGE_TITLE = 'Tips and strategies to boost your business'
  const pageTitle = query ? `Search results for "${query}"` : DEFAULT_PAGE_TITLE

  return (
    <div className="flex flex-col gap-6 px-4 py-5 md:gap-14 md:px-0 md:py-20">
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

      <BlogPostGridCard>
        <BlogPostCard
          title="Transformando seu negócio em uma loja virtual"
          description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online..."
          date="20/12/2024"
          slug="transforming-business-into-online-store"
          image={{
            src: '/assets/transforming-business-into-online-store.png',
            alt: 'Photo of a business man using his macbook to create his online store',
          }}
          author={{
            avatar: {
              src: '/reviews/customer-01.png',
              alt: 'Picture of Aspen Dokidis',
            },
            name: 'Aspen Dokidis',
          }}
        />
      </BlogPostGridCard>
    </div>
  )
}
