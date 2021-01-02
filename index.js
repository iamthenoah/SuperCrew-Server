const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidv4 } = require('uuid');

server.listen(3000);

app.set('view engine,', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
    res.render('index.ejs', { data: req.params.room });
});

io.on('connection', socket => {
    socket.on('join', (roomid, userid) => {
        socket.join(roomid);
        socket.to(roomid).broadcast.emit('user-connected', userid);
    });
});