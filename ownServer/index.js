

// isme kya hai ki khudka server bna sakte ho , bnane k liye kuch nhi bs const http= require('http');

const server= http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("<h1 style= {background:blue}>Home</h1>")
    }else  if(req.url=="/Contacts"){
        res.end("<h1>Contact</h1>")
    }else  if(req.url=="/About"){
        res.end("<h1>About</h1>")
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end("<h1>404</h1>")
    }
    // 
});
server.listen(8000, "127.0.0.1" , ()=>{
    console.log("listening")
})