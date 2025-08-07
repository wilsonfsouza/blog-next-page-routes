import { DesktopNavigation } from './desktop'
import { MobileNavigation } from './mobile'

export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-[100vw] border-b border-white/10 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center">
          <MobileNavigation />
          <DesktopNavigation />
        </div>
      </div>
    </header>
  )
}
