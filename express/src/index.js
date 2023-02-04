const path = require('path');

const express = require('express');

const app = express();

// console.log(__dirname)

const staticPath= path.join(__dirname, "../public")
app.use(express.static(staticPath))
app.get("/", (req, res) => {
    res.send("hello world!");
});
app.get("/about", (req, res) => {
    res.send("hello about!");
});

app.listen(8000,()=>{
    console.log("listening")
})
