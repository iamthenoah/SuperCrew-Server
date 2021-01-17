const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors({ origin: '*' }));

server.listen(process.env.PORT || 3000);

io.on('connect', socket => {

    console.log('connected:', socket.client.id);

    socket.on('serverEvent', data => console.log('new message from client:', data));

    setInterval(() => socket.emit('clientEvent', Math.random()), 3000);
});
