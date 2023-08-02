const express = require('express')
const fs = require('fs')
const users =require("./MOCK_DATA.json")
const app = express();
const PORT =8080;
const midleware = app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res)=>{
    return res.json(users)
})



app.get("/users", (req, res)=>{
    const html = `
    <ul>
    ${users.map((users)=> `<li>${users.job_title}</li>`)}
    </ul>
    `;
    res.send(html);
})


app.post("/api/users",(req , res)=>{
    const body = req.body;
    users.push({...body, id:users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err, data)=>{
        return res.json({status:"success", id:users.length})
    })
    res.send(body)
    console.send(body)
})

app.listen(PORT,() => console.log(`SERVER STARTED`))