import { Header } from '../header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark relative flex min-h-screen flex-col">
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  )
}
