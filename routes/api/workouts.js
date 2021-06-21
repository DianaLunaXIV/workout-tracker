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
router.post('/', async (req, res) => {
    try {
        const postResult = await db.Workout.create(req.body)
        res.status(200).json(postResult)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) =>{
    try {
        const putResult = await db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        res.status(200).json(putResult)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;