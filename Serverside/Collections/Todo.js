const mongoose=require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
})

const todoCollection = mongoose.model("todo", todoSchema) //name of database, and schema

module.exports = todoCollection;