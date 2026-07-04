const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
// Post method

app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "Note Created Successfully",
        note
    })
})

// GET Method to fetch all the data from MongoDB

app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes
    })
})


// Delete method to delete data from DB

app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note Deleted Successfull y"
    })
})


app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message:"Note Updated Successfully"
    })
})


module.exports = app;