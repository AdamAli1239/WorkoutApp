const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workoutRoutes");
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.connect(process.env.DB_URL, () => {
  app.listen(process.env.PORT);
});
