const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlreadyExist = await userModel.findOne({ email })

    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: 'User already exists with this email address'
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt-token", token)
    res.status(201).json({
        message: 'User Registered Successfully',
        user,
        token
    })
})
authRouter.post('/protected',async(req,res)=>{
    console.log(req.cookies)

    res.status(200).json({
        message:"This is protected route"
    })
})


module.exports = authRouter;