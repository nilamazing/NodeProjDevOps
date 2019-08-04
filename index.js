const express=require('express');
const app=express();
let port=8081;
app.get('/',(req,res)=>{
    res.send("<h2>Welcome to the Node Server</h2>");
});

app.listen(port,()=>{console.log(`Listening to port : ${port}`)});