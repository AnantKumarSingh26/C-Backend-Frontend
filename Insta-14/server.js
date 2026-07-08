require('dotenv').config()
const { connected } = require('process')
const app = require('./src/app')
const dns = require('dns')
const connectToDB = require('./src/config/database')
dns.setServers(['1.1.1.1'], ["8.8.8.8"])


connectToDB()

app.listen(3000, () => {
    console.log('Server is running on PORT 3000')
})