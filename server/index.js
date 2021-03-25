const express= require("express");
const app= express();
const server = require('http').Server(app)
const io = require('socket.io')(server) ;
const router = require('./router');

const cors = require('cors');

app.use(router);
app.use(cors());

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

io.on("connection", (socket) => {
   

    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });
  
      if(error) return callback(error);
  
      socket.join(user.room);
  
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
  
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
  
      io.to(user.room).emit('message', { user: user.name, text: message });
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
     
});

const port = process.env.PORT || 4050;
const ip = process.env.IP || "0.0.0.0";
server.listen(port,ip ,()=>{
    console.log("THe  server Has started");
    console.log(`Server is running at http://${ip}:${port}`);

 });