const app = require('express')();
const cors = require('cors');
app.use(cors({ origin: '*' }));

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

io.on('connect', socket => {

    console.log('connected:', socket.client.id);

    socket.on('received', (id, data) => console.log('FROM:', id, 'DATA:', data));
});
