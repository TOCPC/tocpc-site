import db from 'lib/firebase-admin'
import type { NextApiRequest, NextApiResponse } from 'next'

const Donate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, donator } = req.body

  await db().collection('donators').add({
    name: donator.displayName,
    amount: donator.amount,
    hideName: donator.hideName,
    noSouvenir: donator.noSouvenir,
    firstname: donator.firstname,
    lastname: donator.lastname,
    souvenirs: donator.souvenirs,
    tel: data.tel,
    size: data.size,
    postcode: data.postcode,
    address: data.address,
    verify: false,
  })

  res.status(200).end()
}
export default Donate
