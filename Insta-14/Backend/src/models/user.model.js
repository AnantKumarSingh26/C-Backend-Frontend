  const mongoose = require('mongoose')

  const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: [true,"Username already exist"],
        required:[true,"Username required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exist"],
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password Required to continue"],
        select: false           //used to not read password when trying to read password
    },
    bio:String,
    profileImage:{      
        type:String,
        default:"https://ik.imagekit.io/v3gzubezm/default-image.jpg?updatedAt=1783532903340"
    },
  })

  const userModel= mongoose.model("Users",userSchema)

  module.exports = userModel