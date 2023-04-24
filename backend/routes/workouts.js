const express = require('express')

const router = express.Router()


//GET All Workouts
router.get('/', (res, req) => {
    res.json({mssg: 'GET All Workouts'})
})

//GET a Single workout
router.get('/:id', (res, req)=>{
    res.json({mssg: 'GET a single Workout'})
})

//POST a new workout
router.post('/', (req, res) => {
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