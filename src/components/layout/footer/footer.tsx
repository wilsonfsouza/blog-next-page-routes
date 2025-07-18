import { Logo } from '@/components/logo'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="flex flex-col items-start gap-4 text-sm text-blue-100 md:flex-row md:items-center">
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-blue-200"
            >
              Terms of service
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-blue-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/send-feedback"
              className="transition-colors hover:text-blue-200"
            >
              Send-feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
