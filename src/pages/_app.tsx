import type { AppProps } from 'next/app'
import { AuthProvider } from 'lib/auth'
import { Layout } from 'components/Layout'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
