const router = require("express").Router();
const db = require("../models/")

router.get("/api/workouts", (req, res) => {
    console.log("party")
    db.Workout.find({})
    //   .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;