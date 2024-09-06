const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.listen(4000, () => {
  mongoose.connect(process.env.DB_URL);
});
