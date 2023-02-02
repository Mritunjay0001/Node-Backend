const EventEmitter = require('events');
const event= new EventEmitter();

event.on("myName", ()=>{
    console.log("Akshay")
});

event.on("myName", ()=>{
    console.log("Ramu")
})

event.on("myName", ()=>{
    console.log("Chauhan")
})


event.emit("myName")