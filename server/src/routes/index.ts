import express from 'express'
const router = express.Router()
import routes from './api'

router.use('/api', routes)

export default router