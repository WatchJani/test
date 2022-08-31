const express = require("express")
require('dotenv').config({ path: './local.env' });
const mongoose = require("mongoose")

const app = express()



const db = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
mongoose.connect(
    db,
    () => {
        console.log('Connected');
    },
    (err) => console.log(err.message)
);

app.get("/", (req, res )=>{
    res.send("radi sve")
})



app.listen(5000, () => {
    console.log("radi na portu 5000")
})