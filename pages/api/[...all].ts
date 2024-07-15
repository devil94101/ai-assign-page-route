import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default (req: NextApiRequest, res: NextApiResponse) => (
    httpProxyMiddleware(req, res, {
      // You can use the `http-proxy` option
      target: "http://13.52.253.28",
      // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
      pathRewrite: [{
        patternStr: "^/api/new",
        replaceStr: "/v2"
      }, {
        patternStr: "^/api",
        replaceStr: ""
      }],
    })
);