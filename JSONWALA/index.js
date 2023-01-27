const fs= require('fs');

const myData={
    name : "akshay",
    age : 20,
    paisa : "unlimited"
};


const jsonData= JSON.stringify(myData);

fs.writeFile('file.json', jsonData ,(err)=>{
console.log("khatam")
})

fs.readFile('file.json', "utf-8",(err,data)=>{

    const origData= JSON.parse(data);
    console.log(origData)
 console.log(data)

})