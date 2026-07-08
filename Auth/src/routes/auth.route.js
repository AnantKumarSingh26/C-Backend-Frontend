const express = require('express')
const userModel = require('../models/user.model')
const authRouter = express.Router();
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email })

    if (isUserExist) {
        return res.status(409).json({ message: "User already exist" })
    }
    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash('sha256').update(password).digest('hex')
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.cookie('token', token)

    res.status(201).json({ message: "User created successfully", user: { name: user.name, email: user.email } })
})

authRouter.get('/get-me', async (req, res) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode);

        const user = await userModel.findById(decode.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ 
            user: { 
                name: user.name, 
                email: user.email 
            } 
        })
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
})

authRouter.post('/login', async (req, res) => { 
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex')
    if(!user.password === passwordHash){
        return res.status(401).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.cookie('token', token)
    res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } })
})

module.exports = authRouter;