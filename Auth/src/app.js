const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const app = express()

app.use(cors({
    origin: true, // or specify the frontend URL, e.g. 'http://localhost:5173'
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)

module.exports = app;