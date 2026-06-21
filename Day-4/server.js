const app = require('./src/app')

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(3000, ()=>{
    console.log('Server running on PORT-3000');
})