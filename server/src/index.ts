import express, { Express } from 'express'
import db from './config/connection'
import routes from './routes'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.use(cors)
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`)
  })
})
