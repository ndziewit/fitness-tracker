const router = require("express").Router();
const Workout = require("../models/workout.js");

//Creates workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
      console.log(err);

    });
});

//Fetches workout to post to page
router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
        console.log(err);

      });
  });
  
  
//Deletes workout by ID
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
        console.log(err);
      });
  });
  

//Sorts by UD
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
      console.log(err);
    });
});

//Displays workout by range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
      console.log(err);
    });
});

module.exports = router;