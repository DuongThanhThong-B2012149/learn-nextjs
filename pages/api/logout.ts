// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'
import httpProxy, { ProxyResCallback } from 'http-proxy'
// type Data = {
//   name: string
// }

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Method not supported' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token', '')
  res.status(200).json({ message: 'Logout successfully' })
}
