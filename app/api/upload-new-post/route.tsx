import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body; // Adjust according to your form fields

    console.log(req);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
