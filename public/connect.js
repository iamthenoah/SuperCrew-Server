const socket = io('/');

socket.emit('join', ROOM_ID, 10);

socket.on('user-connected', userid => {
    console.log(userid);
});