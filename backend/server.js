require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
 

const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

app.use(cors())

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //Listen for request
    app.listen(process.env.PORT, () => {
      console.log("Conneected to Db and Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
