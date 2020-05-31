// import express packages
const express = require('express');

// create server
const server = express();

// add route
server.all('/', (req, res)=>{
    res.send('Fuxi is alive!')
})

// start server
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

// keepAlive to ensure bot is awake
module.exports = keepAlive;