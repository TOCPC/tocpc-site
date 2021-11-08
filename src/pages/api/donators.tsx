import { getDonators } from 'lib/db'
import type { NextApiRequest, NextApiResponse } from 'next'
const Donators = async (req: NextApiRequest, res: NextApiResponse) => {
  const donators = await getDonators()
  res.status(200).json(donators)
}
export default Donators
