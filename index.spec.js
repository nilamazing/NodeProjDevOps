let assert=require('assert');
const serverUtility=require('./serverUtil');
const req=require('request');

beforeEach("Setting up Custom Node Server",()=>{
    serverUtility().createCustomServer(8082).then(()=>{
        console.log("Successfully created Server at port: 8082");
    })
})
describe("Test suite for a Simple Custom Node Server",()=>{
    it("Unit Test to check if the server is up and running",(done)=>{
        serverUtility().testServerResponse(8082).then((data)=>{
            console.log(data);
            assert.equal(data.startsWith("<h2>"),true);
            done();
        },(err)=>{
            assert.equal(data.startsWith("<h2>"),true);
            done();
        });
    })
})
afterEach("Terminating Test Server",()=>{
    serverUtility().terminateCustomServer();
});