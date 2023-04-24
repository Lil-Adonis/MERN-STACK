require('dotenv').config()

const express = require ('express')
const workoutRoutes = require('./routes/workouts')


// express app
const app = express()


//Middleware
app.use((req, res, next) => {
 console.log(req.path, req.method)
 next()
})


//Routes
app.use('/api/workouts' , workoutRoutes)


//Listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})

