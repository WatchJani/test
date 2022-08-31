const express = require("express")


const app = express()

app.get("/", (req, res )=>{
    res.send("radi sve")
})



app.listen(5000, () => {
    console.log("radi na portu 5000")
})