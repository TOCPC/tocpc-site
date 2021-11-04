import type { NextPage } from 'next'
import Head from 'next/head'
import { THACO } from 'components/main/THACO'
import { Donation } from 'components/main/Donation'
import { Overview } from 'components/main/Overview'
import { Schedule } from 'components/main/Schedule'
import { Question } from 'components/main/Question'
import { Layout } from 'components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <THACO />
      <Overview />
      <Schedule />
      <Donation />
      <Question />
    </>
  )
}

export default Home
