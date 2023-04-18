const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;