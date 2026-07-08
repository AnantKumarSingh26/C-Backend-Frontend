require('dotenv').config();
const app = require('./src/app')
const connectToDB = require('./src/config/database')
const dns = require('dns')
dns.setServers(["1.1.1.1", "1.0.0.1"]);

connectToDB();

app.listen(3000, () => {
    console.log('Server is running on PORT 3000')
})