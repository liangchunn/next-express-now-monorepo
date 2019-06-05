import { Router } from 'express'
import * as moment from 'moment'

const dateRouter = Router()

dateRouter.get('/', (req, res) => {
  res.set('Content-Type', 'text/html')
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
  res.status(200).send(currentTime)
})

export default dateRouter
