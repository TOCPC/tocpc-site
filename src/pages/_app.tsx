import type { AppProps } from 'next/app'
import { AuthProvider } from 'lib/auth'
import { Layout } from 'components/Layout'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <AuthProvider>
      {pathname !== '/certificate' ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  )
}

export default MyApp
