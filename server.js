console.log("server is running")

const express = require('express')

const app = express()

app.set("view engine","ejs")

app.get("/",(req,res) => {
    console.log("here")
    // res.send("hi")
    // res.download("server.js")
    // res.json({message : "hii"})
    res.render("index",{text : "Hello is text"})
})

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.listen(3000)