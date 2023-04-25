const express = require('express')

const router = express.Router()
const Workout = require('../models/workoutModel')

//GET All Workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET All Workouts'})
})

//GET a Single workout
router.get('/:id', (resq, res)=>{
    res.json({mssg: 'GET a single Workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    const {title, load, reps} = req.body
    res.json({mssg: 'POST a new workout'})
})

// DELETE  a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE  a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})


module.exports = router