const app = require('./src/app')

// app.get('/',(req,res)=>{
//     res.send("Home Page")
// })

// app.post('/notes',(req,res)=>{
//         console.log(req.body);
        
//         res.send("Notes Created")
// })

app.listen(3000, ()=>{
    console.log('Server running on PORT-3000');
})