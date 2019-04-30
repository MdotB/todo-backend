const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Todo = new Schema({
    description: String,
    completed: Boolean
})

module.exports = mongoose.model('Todo', Todo)