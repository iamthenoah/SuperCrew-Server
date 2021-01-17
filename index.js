const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

// const cors = require('cors');
// app.use(cors({ origin: '*' }));

server.listen(process.env.PORT || 3000);

io.on('connect', socket => {

    console.log('connected:', socket.client.id);

    socket.on('received', (id, data) => console.log('FROM:', id, 'DATA:', data));
});
