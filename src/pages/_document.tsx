import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="keywords"
            content="TOCPC, THACO, Thai Competitive Programming, Thai Programming, Thai Dev, Thai Code, Thailand Competitive Programming, Competitive Programming, การแข่งขันเขียนโปรแกรม, เขียนโปรแกรม, สอวน, สอวน คอม, แข่งเขียนโปรแกรม, TOI"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tocpc.codes/" />
          <meta
            property="og:title"
            content="Thailand Online Competitive Programming Contest 2021"
          />
          <meta
            property="og:description"
            content="การแข่งขันเขียนโปรแกรมแนว Competitive Programming สุดเท่ประจำปี 2021"
          />
          <meta property="og:image" content="/banner.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tocpc.codes/" />
          <meta
            property="twitter:title"
            content="Thailand Online Competitive Programming Contest 2021"
          />
          <meta
            property="twitter:description"
            content="การแข่งขันเขียนโปรแกรมแนว Competitive Programming สุดเท่ประจำปี 2021"
          />
          <meta property="twitter:image" content="/banner.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
