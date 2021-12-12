import { MainFootage } from 'components/footage'
import { useAuth } from 'lib/auth'
import Link from 'next/link'

export const TOCPC = () => {
  const auth = useAuth()

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      <MainFootage />
      <div className="absolute block w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="pt-20">
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              Thailand
            </p>
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              Online
            </p>
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              Competitive
            </p>
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              Programming
            </p>
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              Contest
            </p>
            <p className="py-1 text-3xl font-extrabold text-center text-white font-display sm:text-4xl">
              2021
            </p>
            <p className="py-6 text-xl text-center text-white font-display">
              20-21 NOV 2021
            </p>
          </div>
          <div className="pt-6">
            <Link href="/ranks" passHref>
              <p className="px-8 cursor-pointer py-4 text-lg font-display font-semibold text-white bg-red-400 rounded-full sm:px-10 sm:py-6 text-center">
                ดูอันดับการเข้าแข่งขัน
              </p>
            </Link>
          </div>
          {/* {auth?.user === null && (
            <div className="pt-6">
              { <Link href="/thankyou" passHref> }
              <a
                href="https://contest.tocpc.codes"
                rel="noreferrer"
                className="px-8 py-4 text-lg font-display font-semibold text-white bg-red-400 rounded-full sm:px-10 sm:py-6"
              >
                เข้าการสู่แข่งขัน
              </a>
              { </Link> }
              { <p className="py-4 text-center text-white font-display">
                UNTIL 19 NOV 2021
              </p> }
            </div>
          )} */}
        </div>
      </div>
    </section>
  )
}
