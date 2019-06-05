import * as express from 'express'
import * as helmet from 'helmet'

import dateRouter from './routes/date'
import envRouter from './routes/env'

const app = express()

app.use(helmet())

app.use('/api/date', dateRouter)
app.use('/api/env', envRouter)

export default app
