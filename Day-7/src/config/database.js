const mongoose = require('mongoose');
function connectToDb(){
    mongoose.connect(process.env.uri).then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDb