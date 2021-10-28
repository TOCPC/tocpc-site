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
        <div className="absolute right-full bg-red-400 w-20 h-full transform translate-x-2 sm:translate-x-10 md:translate-x-20 z-10"></div>
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
