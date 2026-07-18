const followModel = require('../models/follow.model')

async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followeeUsername == followerUsername) {
        return res.status(400).json({
            message: 'You Can\'t follow yourself'
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        followee: followeeUsername,
        follower: followerUsername

    })
    if (isAlreadyFollowing) {
        return res.status(409).json({
            message: 'You are already following ',
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })
    res.status(200).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

module.exports = {
    followUserController
}