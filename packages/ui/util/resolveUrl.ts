import * as url from 'url'
import { NextContext } from 'next'

const LOCALHOST_URL = 'localhost:3000'

const resolveUrl = (ctx: NextContext, pathname: string): string => {
  const host = ctx.req ? ctx.req.headers.host! : window.location.hostname
  if (~host.indexOf('localhost')) {
    return url.format({
      protocol: 'http',
      host: LOCALHOST_URL,
      pathname,
    })
  } else {
    return url.format({
      protocol: 'https',
      host,
      pathname,
    })
  }
}

export default resolveUrl
