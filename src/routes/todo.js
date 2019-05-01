const router = require('express').Router()
const Todo = require("../models/todo")

// Get all transactions
router.get('/todos', (req, res) => {
    Todo.find({}).then(todos => {
            res.json(todos).send()
            console.log(data)
        })
        .catch(err => {
            res.status(500).send()
        })
})

// Get one transaction by ID
router.get('/todos/:id', (req, res) => {
    const _id = req.params.id
    Todo.findById(_id).then(todo => {
        if (!todo) {
            return res.status(404).send()
        }

        res.json(todo).send()
        }).catch(err => {
            res.status(500).send()
        })
})

// Post new transaction
router.post("/todos", (req, res) => {
    const todo = new Todo(req.body)
    
    todo.save().then(() => {
        res.status(201).send(todo)
    }).catch(err => {
            res.status(400).send(err)
        })
})

// Delete transaction by Id
router.delete('/todos/:id', (req, res) => {
    const _id = req.params.id

    Todo.findByIdAndDelete(_id)
        .then(todo => {
            res.json(todo).send()
            console.log(todo)
        })
        .catch(err => {
            res.status(500).send()
        })
})

module.exports = router
