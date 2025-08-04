import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 bg-[url('/background-images/background-features.svg')] bg-cover bg-center bg-no-repeat" />

      <div className="container relative">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3 inline-block font-sans">
            <span className="inline-block -translate-x-1 -translate-y-1 -rotate-12 transform text-2xl font-semibold text-gray-100">
              4
            </span>
            <span className="inline-block text-2xl font-semibold text-gray-100">
              0
            </span>
            <span className="inline-block text-2xl font-semibold text-gray-100">
              4 - Not found
            </span>
          </div>

          <h1 className="mb-3 text-center font-sans text-3xl font-medium lg:text-5xl">
            <span className="bg-gradient-sitedot bg-clip-text text-transparent">
              You reached another dimension
            </span>
          </h1>

          <p className="mb-8 text-center text-body-md text-gray-100">
            The page you are trying to access most likely has been moved or
            removed.
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="primary" asChild>
              <Link href="/">Back to Home</Link>
            </Button>

            <Button variant="secondary" asChild>
              <Link href="/blog?q=">
                <Search className="h-4 w-4" />
                Search Posts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
