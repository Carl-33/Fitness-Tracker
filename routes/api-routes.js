const router = require("express").Router();
const db = require("../models/")

router.get("/api/workouts", ({ body }, res) => {
  console.log("get " + body);
  // trying to get teh total workout Duration to populate
  const workout = new db.Workout(body);
  workout.setTotalDuration();
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  console.log("post")
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  console.log("update")
  const Id = body.id;
  db.Workout.findOne({
    where: {
      Id
    }
  })
  db.Workout.create(body)
    // .then(({_id})) => db.Workout.findO
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log("get range")
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;