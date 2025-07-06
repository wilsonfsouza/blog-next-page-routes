interface BlogPostGridCardProps {
  children: React.ReactNode
}

export const BlogPostGridCard = ({ children }: BlogPostGridCardProps) => {
  return (
    <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {children}
    </div>
  )
}
