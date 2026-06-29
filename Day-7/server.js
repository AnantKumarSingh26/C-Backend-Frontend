const app = require('./src/app')

require('dotenv').config()

const mongoose = require('mongoose')

const connectToDb = require('./src/config/database')
//! For server error DNS problem
const dns = require('dns')
dns.setServers(["1.1.1.1" ,"8.8.8.8"])

connectToDb();

app.listen(3000, ()=>{
    console.log('Server is Running at 3000 port');
    
})