const express = require('express')
const userModel = require('../models/user.model')

const authRouter = express.Router()


authRouter.post('/register',async(req, res)=>{
    const {email,username, password,bio,profileImage}= req.body

    const isUserExistByEmail = await userModel.findOne({email})
})