import type { NextPage } from 'next'
import { THACO } from 'components/main/THACO'
import { Reward } from 'components/main/Reward'
import { Overview } from 'components/main/Overview'
import { Schedule } from 'components/main/Schedule'
import { Question } from 'components/main/Question'
import { Description } from 'components/Description'

const Home: NextPage = () => {
  return (
    <>
      <Description />
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
