import { FunctionComponent } from 'react'
import { Nav } from 'components/Nav'
import { Footer } from './Footer'
export const Layout: FunctionComponent = ({ children }) => (
  <>
    <div className="relative w-full h-full">
      <Nav />
      <div className="relative w-full">
        <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-6 md:translate-x-12 lg:translate-x-16 xl:translate-x-20 z-10" />
        <div className="w-full">{children}</div>
      </div>
    </div>
    <Footer />
  </>
)
