const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/products', productRoutes)

module.exports = router;