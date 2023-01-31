const http = require('http');
// console.log(http)
const server = http.createServer((request,response)=>{
    if(request.url=="/"){
        response.end("HOME")
    }

});
server.listen(4000,()=>{
    console.log("serveris there")
})


// <-----------Same As OwnServer------------>