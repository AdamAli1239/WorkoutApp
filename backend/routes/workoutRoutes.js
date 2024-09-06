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
router.post("/create", createWorkout);

// update a post
router.patch("/:id", updateWorkout);

// delete a post
router.delete("/:id", deleteWorkout);

module.exports = router;
