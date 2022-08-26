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

  return new Promise((resolve) => {
    // Don't send cookie to server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
        body += chunk
      })
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })

          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })
          ;(res as NextApiResponse).status(200).json({ message: 'Login successfully' })
        } catch (error) {
          console.log(error)
          ;(res as NextApiResponse).status(500).json({ message: 'Some thing went wrong' })
        }
        resolve(true)
      })
    }
    proxy.on('proxyRes', handleLoginResponse)
    proxy.web(req, res, {
      target: process.env.API_URI,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}
