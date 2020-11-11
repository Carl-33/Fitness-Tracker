const db = require("./models");

const app = express();

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(db)
    })
})