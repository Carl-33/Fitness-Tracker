const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DaySchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: Schema.Types.ObjectID,
            ref: "Workout"
        }
    ]

});

const Day = mongoose.model("Day", DaySchema);
module.exports = Day;