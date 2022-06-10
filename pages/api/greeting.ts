import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.headers);
  res.json({ message: 'Ohayo gozaimasu!!!' });
}