import type { NextPage } from 'next'
import Link from 'next/link'

const NotFoundPage: NextPage = () => {
  return (
    <section className="flex flex-col items-center h-screen w-full bg-gray-900 overflow-hidden justify-center">
      <h1 className="font-display text-center font-bold text-white text-8xl">
        404
      </h1>
      <p className="font-display text-center font-regular text-white text-2xl mt-4">
        Page Not Found
      </p>
      <Link href="/">
        <a className="font-display text-center font-regular text-red-400 text-md mt-8 hover:underline">
          Back to main
        </a>
      </Link>
    </section>
  )
}

export default NotFoundPage
