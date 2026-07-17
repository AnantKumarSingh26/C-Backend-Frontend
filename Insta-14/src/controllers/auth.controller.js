const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

//! REGISTER
async function registerController(req, res) {
    const { email, username, password, bio, profileImage } = req.body

    // const isUserExistByEmail = await userModel.findOne({email})
    // if(isUserExistByEmail){
    //     return res.status(409).json({
    //         message:"User already exist with email"
    //     })
    // }
    // const isUserExistByUsername = await userModel.findOne({username})
    // if(isUserExistByUsername){
    //     return res.status(409).json({
    //         message:"Choose different username"
    //     })
    // }

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: "Already Exists: " + (isUserAlreadyExist.email == email ? " Email already exist" : "Username already exist")
        })
    }

    const hash =await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    })
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profileImage: user.profileImage
        }
    })
}

//! LOGIN
async function loginController(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                username: username,
            },
            {
                email: email,
            }
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })
    }
   

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(404).json({
            message:"Password Invalid"
        })
    }

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )
    res.cookie("token",token)

    res.status(200).json({
        message:"User Logged In Successfully",
        user:{
            username:user.username,
            email:user.email
        }
    })
}

module.exports ={
    registerController,
    loginController
}