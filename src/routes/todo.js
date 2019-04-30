const router = require('express').Router()
const Todo = require("../models/Todo")

// Get all transactions
router.get('/', (req, res) => {
    Todo.find({})
        .then(data => {
            res.json(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

// Get one transaction by ID
router.get('/:id', (req, res) => {
    Todo.findById({ _id: req.params.id })
        .then(data => {
            res.json(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

// Post new transaction
router.post("/new", (req, res) => {
    const newTodo = {
        description: req.body.description,
        completed: false
    }
    Todo.create(newTodo)
        .then(data => {
            res.json(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

// Delete transaction by Id
router.delete('/delete/:id', (req, res) => {
    Todo.findByIdAndDelete({ _id: req.params.id })
        .then(data => {
            res.json(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
