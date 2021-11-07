import { MainFootage } from 'components/footage'
import { useAuth } from 'lib/auth'
import Link from 'next/link'

export const THACO = () => {
  const auth = useAuth()

  return (
    <section className="w-full h-screen bg-gray-900 relative overflow-hidden">
      <MainFootage />
      <div className="block absolute h-full w-full">
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <div className="pt-20">
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              Thailand
            </p>
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              Online
            </p>
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              Competitive
            </p>
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              Programming
            </p>
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              Contest
            </p>
            <p className="font-display py-1 font-extrabold text-3xl sm:text-4xl text-white text-center">
              2021
            </p>
            <p className="font-display py-6 text-xl text-white text-center">
              20-21 NOV 2021
            </p>
          </div>
          {auth?.user === null && (
            <div className="pt-6">
              <Link href="/register" passHref>
                <button className="bg-red-400 px-8 py-4 sm:px-10 sm:py-6 text-white text-2xl font-semibold rounded-full">
                  Register
                </button>
              </Link>
              <p className="font-display py-4 text-white text-center">
                UNTIL 19 NOV 2021
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
