// In src/index.js
const express = require("express");
// *** ADD ***
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// *** ADD ***
app.use(bodyParser.json());
app.use(cache("2 minutes"))
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});