const express = require("express")
const noteModel = require("./models/notes_models")
const app = express();

app.use(express.json())

app.post('/notes', async(req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: 'Note Created Successfully',
        note
    })
})

app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:'Note fetched Successfully',
        notes
        
    })
})

module.exports = app;