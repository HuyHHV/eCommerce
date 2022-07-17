const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;