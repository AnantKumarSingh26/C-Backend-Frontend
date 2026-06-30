const express = require('express')
const noteModel = require('./models/note.model')

const app = express()

app.use(express.json())
// Post method

app.post('/api/notes',async(req,res)=>{
    const{title , description} = req.body

    const note =await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"Note Created Successfully",
        note
    })
})




module.exports = app;