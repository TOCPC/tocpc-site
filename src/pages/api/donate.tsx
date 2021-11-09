import db from 'lib/firebase-admin'

import type { NextApiRequest, NextApiResponse } from 'next'
const Donate = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)

  const data = body.data
  const file = body.file
  const donator = body.donator
  // console.log(donator)
  if (!donator.hideName) {
    await db().collection('donators').add({
      name: donator.displayName,
      amount: donator.amount,
    })
    console.log('added')
  }
  res.status(200).end()
}
export default Donate
