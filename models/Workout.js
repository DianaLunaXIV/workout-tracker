const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: Date,
    exercises: Array
}, { toJSON: { virtuals: true } }); //deploy virtual for summing up total workout duration

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;