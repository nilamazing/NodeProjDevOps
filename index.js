const serverUtility = require('./serverUtil');
serverUtility().createCustomServer(8081).then(() => {
    serverUtility().testServerResponse(8081).then((data) => {
        console.log("Successfully got response");
        console.log(data);
    }, (err) => {
        console.log("Error retrieved while getting response");
        console.log(err);
    });
}, (err) => {
    console.log("Got back error");
});
// const express=require('express');
// const app=express();
// let port=8081;
// app.get('/',(req,res)=>{
//     res.send("<h2>Welcome to the Node Server</h2>");
// });

// app.listen(port,()=>{console.log(`Listening to port : ${port}`)});