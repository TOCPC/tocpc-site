import type { NextPage } from 'next'
import Head from 'next/head'
import { THACO } from 'components/main/THACO'
import { Reward } from 'components/main/Reward'
import { Overview } from 'components/main/Overview'
import { Schedule } from 'components/main/Schedule'
import { Question } from 'components/main/Question'

const Home: NextPage = () => {
  return (
    <>
      <THACO />
      <Overview />
      <Reward />
      <Schedule />
      {/* <Donation /> */}
      <Question />
    </>
  )
}

export default Home
