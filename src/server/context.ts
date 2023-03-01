import { NextApiRequest, NextApiResponse } from 'next';

function createContext({req, res} : {req: NextApiRequest, res: NextApiResponse}) {
  return {
    req,
    res,
    prisma,
  }
}

export type Context = ReturnType<typeof createContext>