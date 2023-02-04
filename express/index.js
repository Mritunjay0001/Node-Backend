const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello world!");
});
app.get("/about", (req, res) => {
    res.send("hello about!");
});

app.listen(8000,()=>{
    console.log("listening")
})
