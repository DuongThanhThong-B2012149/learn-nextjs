import Cookies from 'cookies'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
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
    // Convert cookies to header Authorization
    const cookies = new Cookies(req, res)
    if (cookies.get('access_token')) {
      req.headers.Authorization = `Bearer ${cookies.get('access_token')}`
    }

    // Don't send cookies to api server
    req.headers.cookie = ''

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false, // nếu để false là để cho server proxy tự xử lí response trả về cho client luôn mình không xử lí
    })

    proxy.once('proxyRes', () => {
      resolve(true)
    })
  })
}
