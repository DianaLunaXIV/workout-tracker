const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {type: String}, //necessary to avoid setting the whole schema to a string
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;