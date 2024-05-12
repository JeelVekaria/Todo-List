const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const todoCollection = require("./Collections/Todo")

const app=express()

require("dotenv").config()
const MONGOURL = process.env.MONGOURL;

app.use(cors())
app.use(express.json()) //when we parse data itll be in json format

// have to use our own IP?
mongoose.connect(MONGOURL)

app.get("/get", (req, res) => {
    todoCollection.find()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.post("/add", (req, res) => {
    const task = req.body.task;

    // makes a document
    todoCollection.create({
        task
    })
    .then((result) => res.json(result)) //turns data to json
    .catch((error) => console.log("fel"))
})

app.listen(3000,() => {
    console.log("Server is running")
})