require('dotenv').config()
const app = require('./src/app')
const cors = require('cors')
const dns = require('dns')
const connectToDb = require('./src/config/database')
dns.setServers(["1.1.1.1", "1.0.0.1"]);  
app.use(cors()); 
connectToDb();
app.listen(3000,()=>{
    console.log('Server Running on PORT 3000');
})
