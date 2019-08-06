const express = require('express');
const app = express();
let server;
function serverUtility() {
    return {
        createCustomServer: function createCustomServer(port) {
            server = app.listen(port, () => { console.log(`Listening to port : ${port}`);});
            return new Promise((resolve, reject) => {
                app.get('/', (req, res) => {
                    res.send("<h2>Welcome to the Node Server</h2>");
                    resolve(); 
                });
            });
        },
        testServerResponse: function testServerResponse(port) {
            const req = require('request');
            
            return new Promise((resolve, reject) => {
                req(`http://localhost:${port}`, (err, res, body) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(body);
                });

            });
        },
        terminateCustomServer: function terminateCustomServer(){
            server.close();
        }
    }

}
module.exports = serverUtility;
//module.exports=testServerResponse;