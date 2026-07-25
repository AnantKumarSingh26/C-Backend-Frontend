const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"img_url is required for Post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:[true,"User Required to be login for post creation "]
    }
})
const postModel = mongoose.model("posts",postSchema)

module.exports = postModel