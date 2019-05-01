const mongoose = require('mongoose');

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect("mongodb://localhost:27017/todo_db", { 
        useNewUrlParser: true })
}

module.exports = mongoose