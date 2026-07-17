const postModel = require("../models/post.model")
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const identifyUser = require('../middleware/auth.middleware')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    // publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    // urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function createPostController(req, res) {
    // console.log(req.body, req.file)
    
    // console.log(decoded)


    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })
    res.status(201).json({
        message: "Post created Successfully.",
        post
    })
}

async function getPostController(req, res) {
    
    const userId = req.user.id

    const posts = await postModel.find({
        user : userId
    })
    res.status(200).json({
        message: "Post fetched Successfully",
        posts
    })
}


async function getPostDetails(req,res) {

    const userId = req.user.id 
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:'Post Not Found'
        })
    }
    const isValidUser =  post.user.toString() === userId

    if(!isValidUser){
        return res.status(403).json({
            message:'Forbidden Content'
        })
    }
    return res.status(200).json({
        message:'Post Fetched Successfully',
        post
    })


}

module.exports = {
    createPostController,
    getPostController,
    getPostDetails
}