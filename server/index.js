const express= require("express");
const app= express();
const server = require('http').Server(app)
const io = require('socket.io')(server) ;

const router = require('./router');
app.use(router);

io.on("connection", socket => {
    
    console.log('new Connection');
    
    socket.on('disconnect',()=>{

        console.log("User disconnected");
      })
});

const port = process.env.PORT || 4000;
const ip = process.env.IP || "0.0.0.0";
server.listen(port,ip ,()=>{
    console.log("THe  server Has started");
    console.log(`Server is running at http://${ip}:${port}`);

 });