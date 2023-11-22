require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hello")
    console.log('hello home route');
})
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})