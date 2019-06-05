import * as os from 'os'
import { Router } from 'express'

const envRouter = Router()

envRouter.get('/', (req, res) => {
  res.json({
    NODE_VERSION: process.version,
    NODE_ENV: process.env.NODE_ENV,
    OS: {
      PLATFORM: os.platform(),
      CPUS: os.cpus(),
      HOSTNAME: os.hostname(),
      TOTALMEM: os.totalmem(),
    },
  })
})

export default envRouter
