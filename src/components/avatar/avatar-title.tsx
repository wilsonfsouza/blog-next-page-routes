interface AvatarTitleProps {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <span className="text-body-sm text-gray-200">{children}</span>
}
