import design from '@data/design.json'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(design)
}
