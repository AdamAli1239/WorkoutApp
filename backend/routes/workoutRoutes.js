const express = require("express");
const {
  getWorkouts,
  getWorkout,
  updateWorkout,
  createWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// get all posts
router.get("/", getWorkouts);

//get a single post
router.get("/:id", getWorkout);

// create a post
router.post("/", updateWorkout);

// update a post
router.patch("/:id", createWorkout);

// delete a post
router.get("/:id", deleteWorkout);

module.exports = router;
