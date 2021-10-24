import type { AppProps } from 'next/app'
import { AuthProvider } from 'lib/auth'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="relative w-full h-full">
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default MyApp
