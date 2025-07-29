import { cn } from '@/lib/utils'
import { CircleX, SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''
  const hasEmptyQuery = !!searchParams?.has('q')

  const handleSearch = useCallback(() => {
    event?.preventDefault()

    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`)
    }
  }, [query, router])

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false, // Controls scrolling to the top of the page after navigation
    })
  }

  const clearSearch = () => {
    router.push('/blog', {
      scroll: false, // Controls scrolling to the top of the page after navigation
    })
  }

  useEffect(() => {
    if (hasEmptyQuery) {
      inputRef.current?.focus()
    }
  }, [hasEmptyQuery])

  return (
    <form className="group relative w-full md:w-fit" onSubmit={handleSearch}>
      <SearchIcon
        className={cn(
          'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200 group-focus-within:text-blue-300',
          query ? 'text-blue-300' : 'text-gray-300'
        )}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        className="h-10 w-full rounded-lg border border-gray-400 bg-transparent pl-9 text-body-sm text-gray-100 outline-none transition-all duration-200 placeholder:text-body-sm placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 md:w-60"
      />

      {query && (
        <CircleX
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300"
          onClick={clearSearch}
        />
      )}
    </form>
  )
}
