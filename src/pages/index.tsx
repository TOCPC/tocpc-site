import { GetStaticProps } from 'next'
import { THACO } from 'components/main/THACO'
import { Reward } from 'components/main/Reward'
import { Overview } from 'components/main/Overview'
import { Schedule } from 'components/main/Schedule'
import { Question } from 'components/main/Question'
import { Donation } from 'components/main/Donation'
import { Description } from 'components/Description'

import db from 'lib/firebase-admin'

const Home = ({
  registerSize,
  donators,
}: {
  registerSize: number
  donators: Object[]
}) => {
  return (
    <>
      <Description />
      <THACO />
      <Overview />
      <Reward />
      <Schedule registerSize={registerSize} />
      <Donation donators={donators} />
      <Question />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let donators: Object[] = []
  await db()
    .collection('donators')
    .get()
    .then((snap) => {
      snap.forEach((donator) => {
        donators.push(donator.data())
      })
    })

  const registerSize = await db()
    .collection('users')
    .get()
    .then((snap) => snap.size)
  return {
    props: {
      registerSize,
      donators,
    },
    revalidate: 60 * 60,
  }
}

export default Home
