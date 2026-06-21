const express = require("express");

const app = express();

const notes =[]
app.use(express.json())


app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("notes Created")
})

app.get('/notes',function(req,res){
    res.send(notes)
})

app.get('/',function(req,res){
    res.send('Homepage Hello')
})

app.listen(3000,()=>{
    console.log("Server is runing on port 3000");
});