interface AvatarContainerProps {
  children: React.ReactNode
}

export const AvatarContainer = ({ children }: AvatarContainerProps) => {
  return <div className="flex items-center gap-2">{children}</div>
}
