const express = require("express")
const app = express()
const auth = require("./auth")
const courses = require("./courses")
const interview = require("./interview")
const article = require("./article")


app.use("/",auth)
app.use("/",courses)
app.use("/",interview)
app.use("/",article)

module.exports = app;