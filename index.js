//const app = require('express')();
const server = require('http').createServer(/*app*/);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connect', socket => {

    console.log('connected:', socket.client.id);

    socket.on('serverEvent', data => console.log('new message from client:', data));

    setInterval(() => {
        socket.emit('clientEvent', Math.random());
        console.log('message sent to the clients');
    }, 3000);
});