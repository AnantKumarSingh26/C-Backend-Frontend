require('dotenv').config() //require to use dotenv data here
// Starting Sever and Connecting to Database
const app = require('./src/app')
const connectToDB = require("./src/config/database")

//! For server error DNS problem
const dns = require('dns')
dns.setServers(["1.1.1.1" ,"8.8.8.8"])
connectToDB()




app.listen(3000,(req,res)=>{
    console.log('Server Running on PORT 3000');
    
})