const express = require("express")
const app = express()
const route = express.Router()
const authcontroller = require("../controller/auth")

route.get("/me",(req,res) =>{
    res.send("this is profile page")
})

route.post("/registration",authcontroller.registration)
route.post("/login",authcontroller.login)

module.exports = route