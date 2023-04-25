const express = require("express")
const app = express()
const route = require("./routes")
const bodtparser = require("body-parser")

// app.get("/",(req,res) =>{
//     res.send("welcome")
// })
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/",route)

app.listen(9000,() => {
    console.log("server is listing on port 9000")
});