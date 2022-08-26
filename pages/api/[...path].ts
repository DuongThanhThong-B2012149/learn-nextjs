// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import httpProxy from 'http-proxy'
import Cookies from 'cookies'
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
  return new Promise((resolve) => {
    // Convert cookies
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }
    // Don't send cookie to server
    req.headers.cookie = ''

    proxy.web(req, res, {
      target: process.env.API_URI,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    proxy.on('proxyRes', () => {
      resolve(true)
    })
  })
}
