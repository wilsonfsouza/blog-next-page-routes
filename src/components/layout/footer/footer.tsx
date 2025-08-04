import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 py-8 md:flex-row md:justify-between">
          <Logo />

          <span className="text-sm text-blue-100">
            Copyright © 2025 Wilson Franca de Souza
          </span>
        </div>
      </div>
      <div className="bg-gradient-sitedot h-1 w-full"></div>
    </footer>
  )
}
