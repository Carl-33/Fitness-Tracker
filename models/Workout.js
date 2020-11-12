const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: 
        [{
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: false
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
        }],
        totalDuration: Number
});

WorkoutSchema.methods.setTotalDuration = function() {
    console.log(this.duration)
    this.totalDuration = `${this.duration}`;
  
    return this.totalDuration;
  };
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;