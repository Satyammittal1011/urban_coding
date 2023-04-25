const express = require("express")
const app = express()
const route = express.Router()

route.get("/courses",(req,res) =>{
    res.send("welcome to courses")
})


module.exports = route