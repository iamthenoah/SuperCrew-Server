const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

io.on('connect', socket => {

    console.log('connected:', socket);

    socket.on('serverEvent', data => console.log('new message from client:', data));

    setInterval(() => socket.emit('clientEvent', Math.random()), 3000);
});
