const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let userCount = 0;

io.on('connection', (socket) => {
  userCount++; // Increment the user count when a new user connects

  // Emit the current user count to all connected clients
  io.emit('usercnt', userCount);

  socket.on('login', (data) => {
    console.log(`User ${data.userId} has logged in.`);
  });

  socket.on('disconnect', () => {
    userCount--; // Decrement the user count when a user disconnects
    io.emit('usercnt', userCount); // Emit the new user count
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
