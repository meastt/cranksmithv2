import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Simple gear ratio calculation
  const { chainring, cog } = req.body;
  const ratio = chainring / cog;
  
  res.json({ ratio });
}