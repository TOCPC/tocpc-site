import type { NextPage } from 'next'
import Head from 'next/head'
import { THACO } from 'components/main/THACO'
import { Donation } from 'components/main/Donation'
import { Overview } from 'components/main/Overview'
import { Schedule } from 'components/main/Schedule'
import { Question } from 'components/main/Question'

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TOCPC 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full">
        <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-6 md:translate-x-12 lg:translate-x-16 xl:translate-x-20 lg: z-10" />
        <div className="w-full">
          <THACO />
          <Overview />
          <Schedule />
          <Donation />
          <Question />
        </div>
      </main>
    </div>
  )
}

export default Home
