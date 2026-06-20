const express = require("express")

const app = express(); //Server Instance created

app.get('/', (req,res)=>{
    console.log('Hello World');
    res.send("Hello from Home page !!!")
})
app.get('/about', (req,res)=>{
    console.log('Hello World');
    res.send("Hello from About Page !!!")
})

app.listen(3000) // Server Start at 3000