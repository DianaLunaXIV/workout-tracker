const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req, res) => {
    try {
        const workoutResults = await db.Workout.find({})
        res.status(200).json(workoutResults)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;