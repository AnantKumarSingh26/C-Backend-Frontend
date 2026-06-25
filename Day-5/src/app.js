const express = require("express");

const app = express();

app.use(express.json())
const notes =[

]
//! Post method with status code 

app.post('/notes',(req,res)=>{

    notes.push(req.body)
    res.status(201).json({
        message:"Note Created Successfully"
    })
    console.log(req.body);
   
})

// Get Method with status code

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})

module.exports = app