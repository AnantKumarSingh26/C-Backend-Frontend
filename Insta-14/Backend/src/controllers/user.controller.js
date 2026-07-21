const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')

async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followeeUsername == followerUsername) {
        return res.status(400).json({
            message: 'You Can\'t follow yourself'
        })
    }

    const isFolloweeExist = await userModel.findOne({
        username: followeeUsername
    })
    if (!isFolloweeExist) {
        return res.status(404).json({
            message: "Trying to follow User who doesn't exist"
        })
    }
    const isAlreadyFollowing = await followModel.findOne({
        followee: followeeUsername,
        follower: followerUsername
    })

    if (isAlreadyFollowing) {
        if (isAlreadyFollowing.status === "Pending") {
            return res.status(409).json({
                message: `Already sent request to ${followeeUsername}`,
                follow: isAlreadyFollowing
            })
        }
        else if (isAlreadyFollowing.status === "Accepted") {
            return res.status(409).json({
                message: `You are already following ${followeeUsername}`,
                follow: isAlreadyFollowing
            })
        }
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })
    res.status(200).json({
        message: `Follow Request sent to ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })
    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }
    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You had Unfollowed ${followeeUsername}`
    })

}
module.exports = {
    followUserController,
    unfollowUserController
}