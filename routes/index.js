const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes);
router.get('/exercise', async (req, res) => {
    res.sendFile(`exercise.html`, {root: path.join(__dirname, '../public') });
})

router.get('/stats', async (req, res) => {
    res.sendFile(`stats.html`, {root: path.join(__dirname, '../public') });
})
module.exports = router;