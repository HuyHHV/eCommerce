const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/products', productRoutes)
router.use('/checkout',checkoutRoutes)

module.exports = router;