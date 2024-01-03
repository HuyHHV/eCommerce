import { Router } from 'express'
// const userRoutes = require('./userRoutes')
// const authRoutes = require('./authRoutes')
// const productRoutes = require('./productRoutes')
// const checkoutRoutes = require('./checkoutRoutes')

const router = Router()
router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/products', productRoutes)
router.use('/checkout', checkoutRoutes)

export default router
