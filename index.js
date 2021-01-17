const app = require('express')();
app.use(cors({ origin: '*' }));

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

server.listen(process.env.PORT || 3000);

io.on('connect', socket => {

    console.log('connected:', socket.client.id);

    socket.on('received', (id, data) => console.log('FROM:', id, 'DATA:', data));
});
