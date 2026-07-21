const express = require('express')
const userController = require('../controllers/user.controller')
const userRouter = express.Router()
const identifyUser = require('../middleware/auth.middleware')

// route post /api/user/follow/:userid 
//! @desc Follow a user
// ? access : private

//Test to be done for follow and unfollow 

userRouter.post('/follow/:username', identifyUser, userController.followUserController)
userRouter.post('/unfollow/:username', identifyUser, userController.unfollowUserController)


module.exports = userRouter;