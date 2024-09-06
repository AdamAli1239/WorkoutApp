const Workouts = require("../models/workoutModel");
const mongoose = require("mongoose");
const getWorkouts = async (req, res) => {
  const allWorkouts = await Workouts.find({}).sort();
  if (allWorkouts === null) {
    return res.status(404).json({ message: "No workouts found" });
  }
  res.status(200).json(allWorkouts);
};

const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid objectId" });
  }
  const workout = await Workouts.findById(id);
  if (workout === null) {
    return res.status(400).json({ error: "no workout found" });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid objectId" });
  }
  try {
    const updatedWorkout = await Workouts.findByIdAndUpdate(id, {
      title,
      reps,
      weight,
    });

    if (updatedWorkout === null) {
      return res.status(404).json({ error: "no workout found with that id" });
    }
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.log("here");
    return res.status(400).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  if (!title || !reps || !weight) {
    return res
      .status(400)
      .json({ error: "please make sure all the fields are filled in" });
  }
  try {
    const createdWorkout = await Workouts.create({ title, reps, weight });

    res.status(200).json(createdWorkout);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  console.log("WE HERE??");
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid objectId" });
  }
  try {
    const deletedWorkout = await Workouts.findByIdAndDelete(id);
    console.log("in here");
    if (deletedWorkout === null) {
      return res.status(404).json({ error: "no workout found with that id" });
    }
    res.status(200).json(deletedWorkout);
  } catch (error) {
    console.log("here");
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  updateWorkout,
  createWorkout,
  deleteWorkout,
};
