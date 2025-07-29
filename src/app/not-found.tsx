import { Button } from '@/components/ui/button'
import { FileQuestion, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-6 w-full max-w-md text-center">
        <FileQuestion className="mx-auto h-16 w-16 text-gray-100" />
      </div>

      <div className="relative mb-3 inline-block font-sans">
        <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform text-8xl font-semibold text-gray-100">
          4
        </span>
        <span className="inline-block text-8xl font-semibold text-gray-100">
          0
        </span>
        <span className="inline-block text-8xl font-semibold text-gray-100">
          4
        </span>
      </div>

      <p className="mb-8 text-gray-100">Page not found</p>

      <div className="flex justify-center gap-4">
        <Button variant="primary" asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search className="h-4 w-4" />
            Search Posts
          </Link>
        </Button>
      </div>
    </div>
  )
}
